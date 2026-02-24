import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function HomeAbout() {
  const t = useTranslations('HomeAbout');
  return (
    <section className="py-24 bg-[#FFFDF9] font-sans">
      <div className="container-custom mx-auto px-6 max-w-[1200px] flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-5/12 w-full max-w-sm relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl mx-auto order-2 md:order-1">
          <Image 
            src="/Tours/Dolphin.jpg" 
            alt="Couple on Beach" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="md:w-7/12 w-full text-center md:text-left order-1 md:order-2">
          <p className="text-[#1B5E20] font-bold text-sm tracking-widest uppercase mb-4">{t('subtitle')}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0A3013] leading-tight mb-8">
            {t('title')}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            {t('description')}
          </p>
          
          <ul className="text-left space-y-4 mb-8 relative border-l-2 border-[#1B5E20] pl-6 ml-2 text-[15px] font-medium text-[#222]">
             <li className="relative">
                <span className="absolute -left-[35px] top-[4px] w-[18px] h-[18px] bg-[#1B5E20] text-white rounded-full flex items-center justify-center text-[10px]">✓</span>
                {t('bullet_1')}
             </li>
             <li className="relative">
                <span className="absolute -left-[35px] top-[4px] w-[18px] h-[18px] bg-[#1B5E20] text-white rounded-full flex items-center justify-center text-[10px]">✓</span>
                {t('bullet_2')}
             </li>
             <li className="relative">
                <span className="absolute -left-[35px] top-[4px] w-[18px] h-[18px] bg-[#1B5E20] text-white rounded-full flex items-center justify-center text-[10px]">✓</span>
                {t('bullet_3')}
             </li>
          </ul>
          
          <div className="flex justify-center md:justify-start">
            <Link href="/custom-tours" className="bg-[#0A3013] text-white font-bold py-4 px-10 rounded-sm hover:bg-[#1B5E20] transition-colors text-sm tracking-wide uppercase shadow-md">
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
