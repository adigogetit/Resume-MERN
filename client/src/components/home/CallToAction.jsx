import React from 'react'

const CallToAction = () => {
    return (
        <>
            <div id='contact' className="max-w-5xl py-16 md:w-full mx-2 md:mx-auto flex flex-col items-center justify-center text-center bg-linear-to-b from-[#281156] to-black rounded-2xl p-10 text-white mb-10 mt-40">
                <p className="px-6 py-2 rounded-full text-sm border border-[#523d97] bg-linear-to-r from-[#7112ac] to-[#5a3582] bg-clip-text text-violet-400">
                    Career Growth & Opportunities
                </p>
                <h1 className="text-4xl md:text-5xl md:leading-15 font-medium max-w-2xl mt-5">
                    Join 10,000+ AI Infulencers
                    <span className="bg-linear-to-r from-[#942fb6] to-[#A992F2] bg-clip-text text-transparent"> building smarter resumes with AI</span>
                </h1>
                <p className="text-white text-sm mt-2">Create ATS-friendly resumes, get AI suggestions, and land your dream job faster.</p>
                <button className="px-12 py-3.5 mt-6 rounded-full text-m border border-[#54487B] active:scale-95 transition-all bg-linear-to-r from-[#A992F2] to-[#DFAB9B] bg-clip-text text-transparent">
                    Get Started
                </button>
            </div>
        </>
    )
}

export default CallToAction
