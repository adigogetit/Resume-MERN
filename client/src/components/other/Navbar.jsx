import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const user = { name: 'Aditya Singh' }
    const navigate = useNavigate()

    const logoutUser = () => {
        navigate('/')
    }

    return (
        <div className='bg-black border-b border-gray-800 shadow'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-200 transition-all'>

                <svg width="120" height="40">
                    <text className='cursor-pointer' x="8" y="28" fill="#ffffff" fontSize="26" fontWeight="600">
                        resume
                    </text>
                    <circle cx="115" cy="25" r="4" fill="#7C3AED" />
                </svg>

                <div className='flex items-center gap-4 text-sm'>
                    <p className='max-sm:hidden'>Hi, {user?.name}</p>
                    <button onClick={logoutUser} className='bg-violet-700 hover:bg-violet-600 text-white border border-violet-400 px-6 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
