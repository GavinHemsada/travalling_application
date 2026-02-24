import Image from 'next/image';
import { toursData } from '@/data/tours';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function HomeTours() {
  const t = useTranslations('HomeTours');
  const topTourSlugs = ["sigiriya-dambulla-day-trip", "ella-scenic-wonders", "whale-dolphin-watching", "galle-full-day-journey"];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="container-custom mx-auto px-6 max-w-[1400px]">
        <p className="text-[#1B5E20] font-bold text-sm tracking-widest uppercase mb-3 text-center">{t('subtitle')}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A3013] mb-16 text-center tracking-tight">
          {t('title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {topTourSlugs.map((slug, index) => {
            const tour = toursData[slug];
            if (!tour) return null;

            const hasDiscount = index === 0 || index === 3;

            return (
              <div key={slug} className="bg-[#0A3013] text-white rounded-sm overflow-hidden flex flex-col shadow-lg relative group">
                {hasDiscount && (
                  <div className="absolute top-4 left-4 bg-[#3B82F6] text-white font-bold text-xs py-1 px-3 z-10 
                                  [clip-path:polygon(100%_0,100%_100%,50%_75%,0_100%,0_0)] h-[40px] shadow-sm">
                    {t('discount')}
                  </div>
                )}
                
                <div className="relative h-[280px] w-full overflow-hidden">
                  <Image 
                    src={tour.images[0]} 
                    alt={tour.slug} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg mb-4 text-[#FFFDF9] truncate">
                    {tour.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </h3>
                  
                  <div className="flex items-center gap-6 mt-auto pt-4 border-t border-white/20">
                    <div className="flex flex-col">
                      <span className="text-xs text-green-300 font-bold tracking-wider mb-1">{t('days_nights_label')}</span>
                      <span className="text-sm">01 / 01</span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/20"></div>
                     <div className="flex flex-col">
                      <span className="text-xs text-green-300 font-bold tracking-wider mb-1">{t('rating_label')}</span>
                      <div className="flex text-yellow-500">
                        {"★★★★★".split('').map((star, i) => (
                           <span key={i} className="text-sm leading-none">{star}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Link href={`/tours/${slug}`} className="bg-[#114B20] text-center w-full py-4 text-sm font-bold tracking-wider hover:bg-[#1B5E20] transition-colors border-t border-white/10 uppercase">
                  {t('explore_button')}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
