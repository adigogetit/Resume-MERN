
const ResumeBuilder = () => {

  const { resumeId } = useParams()

  const [resumeData, setResumeData] = useState({
    _id: '',
    title: '',
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  }) 

  const loadExistingResume = async () => {
   try {
    const resume = dummyResumneData.find(resume => resume._id === resumeId)
    if(resume){
      setResumeData(resume)
      document.title = resume.title;
    }
   } catch (error) {
    console.log(error.message)
   }
  }

  useEffect(()=>{
    loadExistingResume()
  },[])


  return (
    <div>
      
    </div>
  )
}

export default ResumeBuilder
