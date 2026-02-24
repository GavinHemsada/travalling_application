import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function HomeWelcome() {
  const t = useTranslations('HomeWelcome');
  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="container-custom mx-auto px-6 max-w-[1200px] flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-5/12 w-full max-w-sm relative aspect-[3/4] overflow-hidden rounded-sm shadow-xl mx-auto">
          <Image 
            src="/Tours/sigiri.jpg" 
            alt="Sigiriya Rock" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="md:w-7/12 w-full text-center md:text-left">
          <p className="text-[#1B5E20] font-bold text-sm tracking-widest uppercase mb-4">{t('subtitle')}</p>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold text-[#0A3013] leading-tight mb-8">
            {t('title')}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-[15px] whitespace-pre-line">
            {t('description')}
          </p>
          
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
