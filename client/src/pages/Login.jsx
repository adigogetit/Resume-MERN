import { Lock, Mail, User2Icon } from 'lucide-react'
import React, { use } from 'react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const query = new URLSearchParams(window.location.search)
  const urlState = query.get('state')
  const [state, setState] = React.useState(urlState || "login")

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const endpoint = state === "signup" ? "register" : "login";
      const { data } = await api.post(`/api/users/${endpoint}`, formData)

      dispatch(login({
        token: data.token,
        user: data.user
      }))

      localStorage.setItem('token', data.token)
      toast.success(data.message)

      navigate('/app') 

    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">

      <form className="w-full sm:w-87.5 text-center bg-white border border-gray-400 rounded-2xl px-6 sm:px-8 shadow-lg">

        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-gray-700 text-sm mt-2">
          Please {state === "login" ? "login" : "sign up"} to continue
        </p>

        {/* Name */}
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-gray-200 focus-within:ring-2 focus-within:ring-violet-500 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
            <User2Icon size={16} color="#6B7280" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-transparent text-gray-950 placeholder-gray-500 border-none outline-none focus:outline-none focus:ring-0"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="flex items-center w-full mt-4 bg-gray-200 focus-within:ring-2 focus-within:ring-violet-500 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
          <Mail size={13} color="#6B7280" />
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="w-full bg-transparent text-gray-950 placeholder-gray-400 border-none outline-none focus:outline-none focus:ring-0"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center mt-4 w-full bg-gray-200 focus-within:ring-2 focus-within:ring-violet-500 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
          <Lock size={13} color="#6B7280" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent text-gray-950 placeholder-gray-400 border-none outline-none focus:outline-none focus:ring-0"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4 text-left">
          <button type="button" className="text-sm text-violet-800 hover:underline">
            Forget password?
          </button>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-2 w-full h-11 rounded-full text-white bg-violet-600 hover:bg-violet-500 transition active:scale-95"
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>

        <p
          onClick={() => setState(prev => prev === "login" ? "signup" : "login")}
          className="text-gray-900 text-sm mt-3 mb-11 cursor-pointer"
        >
          {state === "login" ? "Don't have an account?" : "Already have an account?"}
          <span className="text-violet-700 hover:underline ml-1">click here</span>
        </p>

      </form>

    </div>
  )
}

export default Login