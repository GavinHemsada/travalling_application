'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HomeReviews() {
  const t = useTranslations('HomeReviews');
  
  const reviews = [
    { text: t('review_0_text'), name: t('review_0_name'), src: "/users/user1.jpeg" },
    { text: t('review_1_text'), name: t('review_1_name'), src: "/users/user2.jpeg" },
    { text: t('review_2_text'), name: t('review_2_name'), src: "/users/user3.jpg" },
  ];

  return (
    <section className="py-24 bg-white font-sans text-center">
      <div className="container-custom mx-auto px-6 max-w-[1200px]">
        <p className="text-[#1B5E20] font-bold text-sm tracking-widest uppercase mb-3">{t('subtitle')}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A3013] mb-16 tracking-tight">
          {t('title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {reviews.map((rev, idx) => (
             <div key={idx} className="flex flex-col items-center">
               <div className="flex text-[#1B5E20] mb-6">
                 {"★★★★★".split('').map((star, i) => (
                    <span key={i} className="text-xl leading-none">{star}</span>
                 ))}
               </div>
               <p className="text-[#222] font-medium text-[16px] leading-relaxed mb-8 italic">
                 "{rev.text}"
               </p>
               <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-sm border border-gray-200">
                  <Image 
                    src={rev.src} 
                    alt={rev.name} 
                    fill 
                    className="object-cover"
                  />
               </div>
               <span className="mt-4 font-bold text-sm text-[#0A3013] uppercase tracking-wide">{rev.name}</span>
             </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center border-t border-gray-200 pt-16 mt-8 mx-auto w-full max-w-[800px]">
          <h3 className="text-xl font-extrabold text-[#0A3013] mb-6 tracking-wide">
            {t('ta_title')}
          </h3>
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">
            {t('ta_desc')}
          </p>
          <div className="flex text-[#1B5E20] text-3xl mb-8">
              {/* Tripadvisor logo placeholder */}
              <Image src="/tripadvisor.jpg" alt="Tripadvisor" width={150} height={150} />
          </div>
          <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#0A3013] text-white font-bold py-3 px-8 rounded-sm hover:bg-[#1B5E20] transition-colors text-sm tracking-wide shadow-md">
            {t('ta_button')}
          </a>
        </div>
      </div>
    </section>
  );
}
