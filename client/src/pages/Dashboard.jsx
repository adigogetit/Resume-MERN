import { FilePenLineIcon, LoaderCircleIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloud, UploadCloudIcon, XIcon } from 'lucide-react'


const Dasboard = () => {

  const user = { name: 'Aditya Singh' }

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

      <hr className='border-slate-100 my-6 sm:w-[305px]' />


    </div>
  )
}

export default Dasboard
