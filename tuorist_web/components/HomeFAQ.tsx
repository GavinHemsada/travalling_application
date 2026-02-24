'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function HomeFAQ() {
  const t = useTranslations('HomeFAQ');
  
  const faqs = [
    {
      q: t('q0'),
      a: t('a0')
    },
    {
      q: t('q1'),
      a: t('a1')
    },
    {
      q: t('q2'),
      a: t('a2')
    },
    {
      q: t('q3'),
      a: t('a3')
    },
    {
      q: t('q4'),
      a: t('a4')
    },
    {
      q: t('q5'),
      a: t('a5')
    },
    {
      q: t('q6'),
      a: t('a6')
    },
    {
      q: t('q7'),
      a: t('a7')
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-24 bg-[#FFFDF9] font-sans text-center">
      <div className="container-custom mx-auto px-6 max-w-[1000px]">
        <p className="text-[#1B5E20] font-bold text-sm tracking-widest uppercase mb-3">{t('subtitle')}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A3013] mb-16 tracking-tight">
          {t('title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left items-start">
          {faqs.map((faq, idx) => (
             <div 
                key={idx} 
                className={`bg-white border ${openIndex === idx ? 'border-[#1B5E20] ring-1 ring-[#1B5E20] shadow-md' : 'border-[#E5E7EB] shadow-sm'} rounded-sm cursor-pointer hover:bg-gray-50 transition-all duration-300 overflow-hidden`}
                onClick={() => toggleFAQ(idx)}
             >
               <div className="p-5 flex justify-between items-center bg-white">
                 <span className={`font-bold text-[15px] ${openIndex === idx ? 'text-[#1B5E20]' : 'text-[#0A3013]'}`}>{faq.q}</span>
                 <svg 
                   xmlns="http://www.w3.org/2000/svg" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   strokeWidth={2.5} 
                   stroke="currentColor" 
                   className={`w-4 h-4 ml-4 flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'text-[#1B5E20] rotate-180' : 'text-[#1B5E20]'}`}
                 >
                   <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                 </svg>
               </div>
               
               {openIndex === idx && (
                 <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed bg-white">
                   <div className="border-t border-gray-100 pt-3">
                     {faq.a}
                   </div>
                 </div>
               )}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
