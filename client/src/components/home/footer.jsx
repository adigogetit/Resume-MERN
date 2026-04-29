import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[14px] text-gray-600 bg-gray-100  border-t border-gray-300">

      <div className="flex flex-wrap items-start gap-10 md:gap-15 xl:gap-35">

        <svg width="120" height="40">
          <text className='cursor-pointer' x="8" y="28" fill="#111827" fontSize="26" fontWeight="600">
            resume
          </text>
          <circle cx="115" cy="25" r="4" fill="#7C3AED" />
        </svg>

        <div>
          <p className="text-gray-950 font-semibold">Product</p>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-indigo-600 transition">Home</a></li>
            <li><a href="/" className="hover:text-indigo-600 transition">Support</a></li>
            <li><a href="/" className="hover:text-indigo-600 transition">Pricing</a></li>
            <li><a href="/" className="hover:text-indigo-600 transition">Affiliate</a></li>
          </ul>
        </div>

        <div>
          <p className="text-gray-950 font-semibold">Resources</p>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-indigo-600 transition">Company</a></li>
            <li><a href="/" className="hover:text-indigo-600 transition">Blogs</a></li>
            <li><a href="/" className="hover:text-indigo-600 transition">Community</a></li>
            <li><a href="/" className="hover:text-indigo-600 transition">Careers</a></li>
            <li><a href="/" className="hover:text-indigo-600 transition">About</a></li>
          </ul>
        </div>

        <div>
          <p className="text-gray-950 font-semibold">Legal</p>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-indigo-600 transition">Privacy</a></li>
            <li><a href="/" className="hover:text-indigo-600 transition">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
        <p className="max-w-60 text-gray-600">
          Making every customer feel valued—no matter the size of your audience.
        </p>

        <p className="mt-3 text-center text-gray-500">
          © 2026 <a href="/" className="hover:text-indigo-600">resume</a>
        </p>
      </div>

    </footer>
  )
}

export default Footer