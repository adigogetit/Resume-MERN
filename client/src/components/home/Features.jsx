import React from 'react'
import Title from './Title';
import { Zap } from 'lucide-react';

const Features = () => {
    const featuresData = [
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-violet-600"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" /><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" /></svg>),
            title: "Real-Time Analytics",
            description: "Get instant insights into your finances with live dashboards.",
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-violet-600"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>),
            title: "Bank-Grade Security",
            description: "End-to-end encryption, 2FA, compliance with GDPR standards.",
        },
        {
            icon: (<svg className="size-6 stroke-violet-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>),
            title: "Customizable Reports",
            description: "Export professional, audit-ready financial reports for internal review.",
        }
    ];
    return (
        <>
            <div id='features' className='flex flex-col items-center my-10 scroll-mt-12 mt-30'>
                <div className="flex items-center gap-2 text-m text-violet-600 bg-violet-400/10 rounded-full mb-3 px-7 py-3.5">
                    <Zap width={18} />
                    <span>Simple Process</span>
                </div>
                <Title title='Build your resume' description='Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features.' />

                <div class="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 mb-20 px-6">
                    {featuresData.map((feature, index) => (
                        <div key={index} className={`hover:-translate-y-0.5 transition duration-300 ${index === 1 ? 'p-px rounded-[13px] bg-linear-to-br from-[#9544FF] to-[#223B60]' : ''}`}>
                            <div className="p-6 rounded-xl space-y-4 border border-slate-800 bg-slate-950 max-w-80 w-full">
                                {feature.icon}
                                <h3 className="text-base font-medium text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 line-clamp-2 pb-4">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Features
