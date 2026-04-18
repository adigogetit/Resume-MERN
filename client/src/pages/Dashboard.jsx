import { FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext'

const Dasboard = () => {

  const { user, token } = useSelector(state => state.auth)

  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"]
  const [allResumes, setAllResumes] = useState([])

  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [editResumeId, setEditResumeId] = useState('')

  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get('/api/users/resumes', { headers: { Authorization: token } })
      setAllResumes(data?.resumes || [])
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const createResume = async (event) => {
    try {
      event.preventDefault()
      const { data } = await api.post('/api/resumes/create', { title }, { headers: { Authorization: token } })
      setAllResumes([...allResumes, data.resume])
      setTitle('')
      setShowCreateResume(false)
      navigate(`/app/builder/${data.resume._id}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const uploadResume = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      const resumeText = await pdfToText(resume)
      const { data } = await api.post('/api/ai/upload-resume', { title, resumeText }, { headers: { Authorization: token } })
      setTitle('')
      setResume(null)
      setShowUploadResume(false)
      navigate(`/app/builder/${data.resumeId}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    setIsLoading(false)
  }

  const editTitle = async (event) => {
    try {
      event.preventDefault()
      const { data } = await api.put(`/api/resumes/update`, { resumeId: editResumeId, resumeData: { title } }, { headers: { Authorization: token } })
      setAllResumes(allResumes.map(resume => resume._id === editResumeId ? { ...resume, title } : resume))
      setTitle('')
      setEditResumeId('')
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }

  }

  const deleteResume = async (resumeId) => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this resume?')
      if (confirm) {
        const { data } = await api.delete(`/api/resumes/delete/${resumeId}`, { headers: { Authorization: token } })
        setAllResumes(allResumes.filter(resume => resume._id !== resumeId))
        toast.success(data.message)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }
  console.log("TOKEN:", token);

  useEffect(() => {
    loadAllResumes()
  }, [])

  return (
    <div className="bg-gray-100 text-gray-900 w-full min-h-screen mx-auto py-7">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-2xl font-medium mb-6 sm:hidden">Hi, {user?.name}</p>

        {/* buttons */}
        <div className='flex gap-6 '>
          <button onClick={() => setShowCreateResume(true)} className='w-full bg-gray-100 sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-gray-700 border border-dashed border-gray-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
            <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-indigo-300 to-indigo-500 text-white rounded-full' />
            <p className='text-sm group-hover:text-indigo-500 transition-all duration-300'>Create Resume</p>
          </button>

          <button onClick={() => setShowUploadResume(true)} className='w-full bg-gray-100 sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-gray-700 border border-dashed border-gray-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
            <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-purple-300 to-purple-500 text-white rounded-full' />
            <p className='text-sm group-hover:text-purple-500 transition-all duration-300'>Upload Existing</p>
          </button>
        </div>

        <hr className='border-gray-300 my-6 sm:w-76.25' />

        {/* resumes */}
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-7 ">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];

            return (
              <button key={index} onClick={() => navigate(`/app/builder/${resume._id}`)} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer'
                style={{ background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`, borderColor: baseColor + '40' }}>

                <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all " style={{ color: baseColor }} />
                <p className='text-sm group-hover:scale-105 transition-all px-2 text-center' style={{ color: baseColor }}>{resume.title}</p>

                <p className='absolute bottom-1 text-[11px] text-gray-500 group-hover:text-gray-600 transition-all duration-300 px-2 text-center'>
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div onClick={e => e.stopPropagation()} className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                  <TrashIcon onClick={() => deleteResume(resume._id)} className="size-7 p-1.5 hover:bg-gray-300 rounded text-gray-500 transition-colors" />
                  <PencilIcon onClick={() => { setEditResumeId(resume._id); setTitle(resume.title) }} className="size-7 p-1.5 hover:bg-gray-300 rounded text-gray-500 transition-colors" />
                </div>

              </button>
            )
          })}
        </div>

        {/* Create Modal */}
        {showCreateResume && (
          <form onSubmit={createResume} onClick={() => setShowCreateResume(false)} className='fixed inset-0 bg-black/30 backdrop-blur z-10 flex items-center justify-center'>
            <div onClick={e => e.stopPropagation()} className='relative bg-white border border-gray-300 shadow-md rounded-lg w-full max-w-sm p-6'>

              <h2 className='text-xl font-sm mb-4'>Create a Resume</h2>
              <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:border-violet-600 outline-none' required />

              <button className='w-full py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors'>Create Resume</button>
              <XIcon className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer' onClick={() => { setShowCreateResume(false); setTitle('') }} />
            </div>
          </form>
        )}

        {/* Upload Modal */}
        {showUploadResume && (
          <form onSubmit={uploadResume} onClick={() => setShowUploadResume(false)} className='fixed inset-0 bg-black/30 backdrop-blur z-10 flex items-center justify-center'>
            <div onClick={e => e.stopPropagation()} className='relative bg-white border border-gray-300 shadow-md rounded-lg w-full max-w-sm p-6'>

              <h2 className='text-xl font-sm mb-4'>Upload Resume</h2>
              <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:border-violet-600 outline-none' required />

              <div>
                <label htmlFor="resume-input" className="block text-sm text-gray-700">
                  Select resume file
                  <div className='flex flex-col items-center justify-center gap-2 border border-gray-300 border-dashed rounded-md p-4 py-10 my-4 hover:border-violet-500 hover:text-violet-700 cursor-pointer transition-colors'>
                    {resume ? (<p className='text-violet-700'>{resume.name}</p>) : (
                      <>
                        <UploadCloud className='size-14 stroke-1' />
                        <p>Upload resume</p>
                      </>
                    )}
                  </div>
                </label>
                <input type="file" id='resume-input' accept='.pdf' hidden onChange={(e) => setResume(e.target.files[0])} />
              </div>

              <button disabled={isLoading} className='w-full py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors flex items-center justify-center gap-2'>
                {isLoading && <LoaderCircleIcon className='animate-spin size-4 text-white' />}
                {isLoading ? 'Uploading...' : 'Upload Resume'}
              </button>

              <XIcon className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer' onClick={() => { setShowUploadResume(false); setTitle('') }} />
            </div>
          </form>
        )}

        {editResumeId && (
          <form onSubmit={editTitle} onClick={() => setEditResumeId('')} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
            <div onClick={e => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>

              <h2 className='text-xl font-bold mb-4'>Edit Resume Title</h2>
              <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-violet-600 ring-violet-600' required />

              <button type="submit" className='w-full py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors'>Update</button>
              <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={() => { setEditResumeId(''); setTitle('') }} />
            </div>
          </form>
        )
        }
      </div>
    </div>
  )
}

export default Dasboard