import { Lock, Mail, User2Icon } from 'lucide-react'
import React from 'react'

const Login = () => {
  const [state, setState] = React.useState("login")

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">

      <form onSubmit={handleSubmit} className="w-full sm:w-87.5 text-center bg-white/6 border border-white/10 rounded-2xl  px-6 sm:px-8">
          
        <h1 className="text-white text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-gray-300 text-sm mt-2">Please {state} in to continue</p>

        {/* name */}
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-violet-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
            <User2Icon size={16} color='#6B7280'/>
            <input type="text" name="name" placeholder="Name" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none ring-0" value={formData.name} onChange={handleChange} required />
          </div>
        )}

        {/* mail */}
        <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-violet-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
          <Mail size={13} color="#6B7280" />
          <input type="email" name="email" placeholder="Email id" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none ring-0 " value={formData.email} onChange={handleChange} required />
        </div>

        {/* password */}
        <div className=" flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-violet-500/60 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all ">
          <Lock size={13} color="#6B7280"/>
          <input type="password" name="password" placeholder="Password" className="w-full bg-transparent text-white placeholder-white/60 border-none outline-none ring-0" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="mt-4 text-left">
          <button className="text-sm text-violet-400 hover:underline">
            Forget password?
          </button>
        </div>

        <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-violet-700 hover:bg-violet-600 transition " >
          {state === "login" ? "Login" : "Sign up"}
        </button>

        <p onClick={() => setState(prev => prev === "login" ? "Sign up" : "login")} className="text-gray-400 text-sm mt-3 mb-11 cursor-pointer" >
          {state === "login" ? "Don't have an account?" : "Already have an account?"}
          <span className="text-violet-400 hover:underline ml-1">click here</span>
        </p>
      </form>

    </div>
  )
}

export default Login
