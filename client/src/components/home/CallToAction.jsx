import React from 'react'

const CallToAction = () => {
    return (
        <>
            <div id='contact' className="bg-gray-100  max-w-5xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-linear-to-b from-[#d6ccf5] to-[#e9e5ff] rounded-2xl p-10 text-gray-900 mb-10 mt-40 shadow-lg">

                <p className="px-6 py-2 rounded-full text-sm border border-[#4a358a] bg-linear-to-r from-[#b06ce0] to-[#9a8bb8] bg-clip-text text-violet-600">
                    Career Growth & Opportunities
                </p>

                <h1 className="text-4xl md:text-5xl md:leading-15 font-medium max-w-2xl mt-5">
                    Join 10,000+ AI Infulencers
                    <span className="bg-linear-to-r from-[#7e22ce] to-[#8b5cf6] bg-clip-text text-transparent">
                        {" "}building smarter resumes with AI
                    </span>
                </h1>

                <p className="text-gray-700 text-sm mt-2">
                    Create ATS-friendly resumes, get AI suggestions, and land your dream job faster.
                </p>

                <button className="px-12 py-3.5 mt-6 rounded-full text-m border border-[#4a3f6f] active:scale-95 transition-all bg-linear-to-r from-[#8b5cf6] to-[#c084fc] bg-clip-text text-transparent hover:shadow-lg">
                    Get Started
                </button>

            </div>
        </>
    )
}

export default CallToAction