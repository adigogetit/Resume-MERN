import { BookUserIcon } from 'lucide-react'
import React from 'react'
import Title from './Title'

const Testimonial = () => {

    const testimonials = [
        { id: 1, description: "This resume builder helped me create a professional resume in minutes. The AI suggestions made my experience sound much stronger.", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", name: "Lucci cutta", company: "GLA" },
        { id: 2, description: "I struggled with formatting my resume before. With this tool, everything looks clean, modern, and ATS-friendly.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", name: "Priya Verma", company: "Infosys" },
        { id: 3, description: "The AI suggestions saved me hours of writing. I received interview calls within a week.", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200", name: "Aman Gupta", company: "Flipkart" },
        { id: 4, description: "Creating multiple resume versions has never been easier.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100", name: "Sneha Iyer", company: "Wipro" },
        { id: 5, description: "The templates are beautiful and easy to customize.", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200", name: "Arjun Mehta", company: "Microsoft" },
        { id: 6, description: "As a fresher, this builder guided me step-by-step.", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", name: "Neha Kapoor", company: "Amazon" },
        { id: 7, description: "AI improved my project descriptions.", image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png", name: "Rohit Patel", company: "Deloitte" },
        { id: 8, description: "Within 10 minutes I had a professional resume ready.", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", name: "Karan Singh", company: "Google" },
        { id: 9, description: "Helped me highlight my skills clearly.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", name: "Ananya Reddy", company: "Adobe" }
    ];

    const columns = [
        { start: 0, end: 3, className: "animate-scroll-up-1" },
        { start: 3, end: 6, className: "hidden md:block animate-scroll-up-2" },
        { start: 6, end: 9, className: "hidden lg:block animate-scroll-up-3" }
    ]

    const renderCard = (testimonial, index) => (
        <div key={`${testimonial.id}-${index}`} className="bg-gray-100 border border-gray-300 rounded-xl p-6 mb-4 hover:border-gray-400 transition-all duration-300 shadow-sm">

            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                {testimonial.description}
            </p>

            <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="size-9 rounded-full border border-gray-300" />
                <div>
                    <p className="text-sm text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <style>
                {`
                    @keyframes scroll-up {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-50%); }
                    }
                    .animate-scroll-up-1 { animation: scroll-up 25s linear infinite; }
                    .animate-scroll-up-2 { animation: scroll-up 30s linear infinite; }
                    .animate-scroll-up-3 { animation: scroll-up 20s linear infinite; }
                `}
            </style>

            <div id='testimonials' className='bg-gray-100 flex flex-col items-center my-10 scroll-mt-12 mt-25'>

                <div className="flex items-center gap-2 text-m text-violet-600 bg-violet-100 rounded-full mb-3 px-7 py-3.5">
                    <BookUserIcon className='size-5 stroke-violet-700' />
                    <span>Testimonial</span>
                </div>

                <Title 
                    title="Don't just take our words" 
                    description="Hear what our users say about us. We're always looking for ways to improve." 
                />

                <div className="relative w-full max-w-6xl overflow-hidden mt-10 mb-5">

                    {/* fade overlays */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent z-10 pointer-events-none"></div>

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
            </div>
        </>
    )
}

export default Testimonial