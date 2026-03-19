import React from 'react'
import { Link } from 'react-router-dom';

const hero = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen) };

    return ( 
        <>
            <section className='bg-black bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-net-image.png")] bg-no-repeat bg-bottom bg-size-[100%_auto] px-4 pt-5 md:pb-32'>
                <nav className="flex items-center justify-between px-2.5 md:pl-6 py-2 max-w-6xl rounded-full mx-auto w-full border border-white/20">

                    {/* logo */}
                    <svg width="120" height="40">
                        <text className='cursor-pointer' x="8" y="28" fill="#ffffff" fontSize="26" fontWeight="600">
                            resume
                        </text>
                        <circle cx="108" cy="25" r="4" fill="#7C3AED" />
                    </svg>

                    <nav id="menu" className={`max-md:fixed max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-screen ${isMenuOpen ? 'max-md:w-full bg-black/10 backdrop-blur-md z-50' : 'max-md:w-0'} transition-[width] flex-col md:flex-row flex gap-12 text-white text-m font-normal`}>
                        <a className="hover:text-white/80" href="#home">Home</a>
                        <a className="hover:text-white/80" href="#features">Features</a>
                        <a className="hover:text-white/80" href="#testimonials">Testimonials</a>
                        <a className="hover:text-white/80" href="#contact">Contact</a>

                        {/* for mobile */}
                        <Link to='/login?state=login' className="md:hidden flex bg-violet-600 text-slate-100 pr-8 pl-2 py-2 rounded-full text-base font-medium hover:bg-violet-700 transition items-center" >
                            <div className='size-9 rounded-full text-violet-600 bg-white mr-4 flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                            </div>
                            Get started
                        </Link>

                        {/* close button for mobile */}
                        <button id="closeMenu" onClick={toggleMenu} className="md:hidden text-gray-600 bg-white/10 p-1.5 rounded-md">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </nav>

                    <div className="flex items-center">
                        <Link to='/login?state=login' className="hidden md:flex bg-violet-600 text-slate-100 pr-8 pl-2 py-2 rounded-full text-balance font-medium hover:bg-violet-700 transition items-center">
                            <div className='size-9 rounded-full text-violet-600 bg-white mr-4 flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                            </div>
                            Get started
                        </Link>

                        {/* hamburg icon for mobile */}
                        <button id="openMenu" onClick={toggleMenu} className="md:hidden text-gray-600 bg-white/10 p-1.5 rounded-md">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>

                <h1 className='text-4xl md:text-[58px]/19 text-center max-w-4xl mx-auto mt-40 text-white bg-clip-text leading-tight font-medium'>
                    Land your dream job with <span className=" bg-linear-to-r from-violet-700 to-violet-600 bg-clip-text text-transparent text-nowrap">AI-powered </span> resumes.
                </h1>
                <p className="text-base mx-auto text-white/80 text-center mt-4">
                    Create, edit and download professional resumes with AI-powered assistance.
                </p>

                <div className='flex gap-3 mt-10 mb-10 justify-center'>
                    <Link to='/app' className="bg-violet-600 hover:bg-violet-700 text-slate-100 text-xm md:text-lg px-8 py-3 rounded-full transition cursor-pointer">
                        Get started
                    </Link>
                </div>

            </section>
        </>
    )
}

export default hero
