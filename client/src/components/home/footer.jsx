import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[14px] text-gray-600 bg-gray-100  border-t border-gray-300">

      <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">

        <svg width="120" height="40">
          <text className='cursor-pointer' x="8" y="28" fill="#111827" fontSize="26" fontWeight="600">
            resume
          </text>
          <circle cx="115" cy="25" r="4" fill="#7C3AED" />
        </svg>

        <div>
          <p className="text-gray-900 font-semibold">Product</p>
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
          <p className="text-gray-900 font-semibold">Legal</p>
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

        <div className="flex items-center gap-4 mt-3 text-gray-600">
          <a href="/" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition">
            {/* icons unchanged */}
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>
          </a>

          <a href="/" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>

          <a href="/" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>

          <a href="/" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
          </a>
        </div>

        <p className="mt-3 text-center text-gray-500">
          © 2026 <a href="/" className="hover:text-indigo-600">resume</a>
        </p>
      </div>

    </footer>
  )
}

export default Footer