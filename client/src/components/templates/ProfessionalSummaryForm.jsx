import { Sparkles } from "lucide-react"


const ProfessionalSummaryForm = ({data, onChange, setResumeData}) => {

  return (
    <div className='space-y-4'>

      <div className='flex items-center justify-between'>
        {/* title */}
        <div>
            <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'> Professional Summary </h3>
            <p className='text-sm text-gray-500'>Add summary for your resume here</p>
        </div>

        {/* generate summary button using ai */}
        <button className='flex items-center gap-2 px-3 py-2 text-sm bg-violet-200 text-violet-800  hover:bg-violet-300 transition-colors disabled:opacity-50 rounded-lg'>
          <Sparkles className="size-4"/>
          Ai Enhance
        </button>
      </div>

      <div className="mt-6">
        {/* text area for writing summary */}
        <textarea value={data || ""} onChange={(e)=> onChange(e.target.value)} rows={7} className='w-full p-3 px-4 mt-2 border text-sm border-gray-500 rounded-lg focus:ring focus:ring-violet-500 focus:border-violet-500 outline-none transition-colors resize-none' placeholder='Write a compelling professional summary that highlights your key strengths and career objectives...' />

        <p className='text-xs text-gray-700 max-w-4/5 mx-auto text-center'>Tip: Keep it concise (3-4 sentences) and focus on your most relevant achievements and skills.</p>
      </div>
    </div>
  )
}

export default ProfessionalSummaryForm
