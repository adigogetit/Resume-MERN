import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import ResumePreview from '../components/other/ResumePreview'
import { ArrowLeftIcon } from 'lucide-react'

const Preview = () => {
  const { resumeId } = useParams()

  const [isLoading, setIsLoading] = useState(true)
  const [resumeData, setResumeData] = useState(null)

  const loadResume = async () => {
    setResumeData(dummyResumeData.find(resume => resume._id === resumeId || null))
  }

  useEffect(()=>{
    loadResume()
  },[])

  return resumeData ? (
    // after loading it will show
    <div className='bg-slate-100'>
      <div className='max-w-3xl mx-auto py-10'>
        {/* resumePreview page  */}
        <ResumePreview 
        data={resumeData} 
        template={resumeData.template} 
        accentColor={resumeData.accent_color} 
        classes='py-4 bg-white'/>
      </div>
    </div>
  ) : (

  )
}

export default Preview
