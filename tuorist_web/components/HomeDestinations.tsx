import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function HomeDestinations() {
  const t = useTranslations('HomeDestinations');
  
  const destinations = [
    { img: "/Tours/sigiriya/sigiriya4.jpg", name: t('dest_0') },
    { img: "/Tours/Arches.jpg", name: t('dest_1') },
    { img: "/images/bg_img1.jpg", name: t('dest_2') },
    { img: "/Tours/galle.jpg", name: t('dest_3') },
    { img: "/Tours/saffari.jpg", name: t('dest_4') },
  ];

  return (
    <section className="py-20 bg-white font-sans text-center">
      <div className="container-custom mx-auto px-6 max-w-[1400px]">
        <p className="text-[#1B5E20] font-bold text-sm tracking-widest uppercase mb-3">{t('subtitle')}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A3013] mb-12">
          {t('title')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {destinations.map((dest, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm shadow-md mb-4 group">
                <Image 
                  src={dest.img} 
                  alt={dest.name.replace('\n', ' ')} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-[#0A3013] font-bold text-sm whitespace-pre-line leading-tight text-center">
                {dest.name}
              </h3>
            </div>
          ))}
        </div>
        
        <Link href="/destinations" className="inline-block bg-[#0A3013] text-white font-bold py-4 px-10 rounded-sm hover:bg-[#1B5E20] transition-colors text-sm tracking-wide uppercase shadow-md">
          {t('view_all')}
        </Link>
      </div>
    </section>
  );
}
