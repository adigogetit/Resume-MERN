import { BookUserIcon } from 'lucide-react'
import React from 'react'
import Title from './Title'

const Testimonial = () => {
    const testimonials = [
        { id: 1, description: "This resume builder helped me create a professional resume in minutes. The AI suggestions made my experience sound much stronger.", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", name: "Lucci cutta", company: "GLA" },
        { id: 2, description: "I struggled with formatting my resume before. With this tool, everything looks clean, modern, and ATS-friendly.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", name: "Priya Verma", company: "Infosys" },
        { id: 3, description: "The AI suggestions for skills and descriptions saved me hours of writing. I received interview calls within a week.", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60", name: "Aman Gupta", company: "Flipkart" },
        { id: 4, description: "Creating multiple resume versions for different jobs has never been easier. The templates are clean and professional.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop", name: "Sneha Iyer", company: "Wipro" },
        { id: 5, description: "The resume templates are beautiful and easy to customize. I was able to export a polished resume instantly.", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60", name: "Arjun Mehta", company: "Microsoft" },
        { id: 6, description: "As a fresher, I didn’t know how to structure my resume. This builder guided me step-by-step and made the process simple.", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", name: "Neha Kapoor", company: "Amazon" },
        { id: 7, description: "The AI resume suggestions improved my project descriptions and highlighted the right skills for recruiters.", image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png", name: "Rohit Patel", company: "Deloitte" },
        { id: 8, description: "I love how fast and simple the interface is. Within 10 minutes I had a professional resume ready to send to recruiters.", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", name: "Karan Singh", company: "Google" },
        { id: 9, description: "The platform helped me highlight my skills clearly and build a resume that stands out in job applications.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", name: "Ananya Reddy", company: "Adobe" }
    ];

    const columns = [
        { start: 0, end: 3, className: "animate-scroll-up-1" },
        { start: 3, end: 6, className: "hidden md:block animate-scroll-up-2" },
        { start: 6, end: 9, className: "hidden lg:block animate-scroll-up-3" }
    ]

    const renderCard = (testimonial, index) => (
        <div key={`${testimonial.id}-${index}`} className="bg-linear-to-b from-[#020204] to-[#251458] border border-slate-800 rounded-xl p-6 mb-4 hover:border-slate-700 transition-all duration-300">
            <div className="mb-5">
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#fff" strokeOpacity=".7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13.056c.464 0 .91-.131 1.237-.364.329-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88C7.91 6.97 7.464 6.838 7 6.838c-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.513-.879.328-.233.773-.364 1.237-.364.232 0 .455-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.619-.181c-1.392 0-2.728.393-3.712 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.513.88.328.233.773.364 1.237.364zm9.83 0c.465 0 .91-.131 1.238-.364.328-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88-.328-.233-.773-.364-1.237-.364-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.512-.879.329-.233.774-.364 1.238-.364.232 0 .454-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.62-.181c-1.391 0-2.727.393-3.711 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.512.88.329.233.774.364 1.238.364z" /></g>
                </svg>
            </div>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                {testimonial.description}
            </p>
            <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="size-9 rounded-full border border-slate-800" />
                <div>
                    <p className="text-sm text-slate-300">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <style>
                {`
                    @keyframes scroll-up {
                        0% {
                            transform: translateY(0);
                        }
                        100% {
                            transform: translateY(-50%);
                        }
                    }
                    .animate-scroll-up-1 {
                        animation: scroll-up 25s linear infinite;
                    }
                    .animate-scroll-up-2 {
                        animation: scroll-up 30s linear infinite;
                    }
                    .animate-scroll-up-3 {
                        animation: scroll-up 20s linear infinite; 
                    }
                `}
            </style>

            <div id='testimonials' className='flex flex-col items-center my-10 scroll-mt-12 mt-25'>
                <div div className="flex items-center gap-2 text-m text-violet-600 bg-violet-400/10 rounded-full mb-3 px-7 py-3.5" >
                    <BookUserIcon className='size-5 stroke-violet-700' />
                    <span>Testimonial</span>
                </div >
                <Title title="Don't just take our words" description="Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review." />

                <div className="relative w-full max-w-6xl overflow-hidden mt-10 mb-5">
                    <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] overflow-hidden">
                        {columns.map((col, colIndex) => (
                            <div key={colIndex} className={col.className}>
                                {[...testimonials.slice(col.start, col.end), ...testimonials.slice(col.start, col.end)].map((testimonial, index) =>
                                    renderCard(testimonial, index)
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    )
}

export default Testimonial
