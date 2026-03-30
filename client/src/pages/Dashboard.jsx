import { FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets'

const Dasboard = () => {

  const user = { name: 'Aditya Singh' }

  const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"]
  const [allResumes, setAllResumes] = useState([])

  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)

  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')

  const loadAllResumes = async()=>{
    setAllResumes(dummyResumeData)
  }

  const createResume = async(event)=>{
    event.preventDefault();
    setShowCreateResume(false);
  }

  useEffect(() => {
    loadAllResumes()
  }, [])

  return (
    <div className="text-white max-w-7xl mx-auto px-4 py-8">

      {/* less than 640px  */}
      <p className="text-2xl font-medium mb-6 bg-clip-text sm:hidden">Hi, {user?.name}</p>

      {/* create and upload button */}
      <div className='flex gap-5 '>
        <button onClick={() => setShowCreateResume(true)} className='w-full bg-gray-950 sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-100 border border-dashed border-slate-700 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
          <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-indigo-300 to-indigo-500 text-white rounded-full' />
          <p className='text-sm group-hover:text-indigo-400 transition-all duration-300'>Create Resume</p>
        </button>

        <button onClick={() => setShowUploadResume(true)} className='w-full bg-gray-950 sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-100 border border-dashed border-slate-700 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer'>
          <UploadCloudIcon className='size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-purple-300 to-purple-500 text-white rounded-full' />
          <p className='text-sm group-hover:text-purple-400 transition-all duration-300'>Upload Existing</p>
        </button>
      </div>

      <hr className='border-slate-100 my-6 sm:w-76.25' />

      {/* display all resume in grid layout */}
      <div className="grid grid-cols-2 sm:flex flex-wrap gap-4 ">
        {allResumes.map((resume, index) => {
          const baseColor = colors[index % colors.length]; // color changes

          return (
            // added diff colors in button
            <button key={index} className='relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer'
              style={{ background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`, borderColor: baseColor + '40' }}>

              {/* title and updated on */}
              <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all " style={{ color: baseColor }} />
              <p className='text-sm group-hover:scale-105 transition-all  px-2 text-center' style={{ color: baseColor }}>{resume.title}</p>
              <p className='absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center' style={{ color: baseColor + '90' }}>
                Updated on {new Date(resume.updatedAt).toLocaleDateString()}
              </p>

              {/* on hover delete and edit option */}
              <div className='absolute top-1 right-1 group-hover:flex items-center hidden'>
                <TrashIcon className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors" />
                <PencilIcon className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors" />
              </div>

            </button>
          )
        })}
      </div>

      {showCreateResume && (
        <form onSubmit={createResume} onClick={() => setShowCreateResume(false)} className='fixed inset-0 bg-black/10 backdrop-blur bg-opacity-10 z-10 flex items-center justify-center'>
          <div onClick={e => e.stopPropagation()} className='relative bg-gray-950 border shadow-md rounded-lg w-full max-w-sm p-6'>

            <h2 className=' text-xl font-sm mb-4'>Create a Resume</h2>
            <input type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-violet-600 ring-violet-600' required />

            <button className='w-full py-2 bg-violet-600 text-white rounded hover:bg-violet-700 transition-colors'>Create Resume</button>
            <XIcon className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' onClick={() => { setShowCreateResume(false); setTitle('') }} />
          </div>
        </form>
      )
      }

    </div>
  )
}

export default Dasboard
