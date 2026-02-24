import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function DestinationsMegaMenu() {
  const t = useTranslations('DestMegaMenu');

  const popularDestinations = [
    { name: t('d1_name'), image: '/Tours/Dolphin.jpg', badge: t('d1_badge'), badgeColor: 'bg-red-500' },
    { name: t('d2_name'), image: '/Destination/temple.jpg', badge: t('d2_badge'), badgeColor: 'bg-purple-500' },
    { name: t('d3_name'), image: '/Tours/galle.jpg', badge: t('d3_badge'), badgeColor: 'bg-orange-500' },
    { name: t('d4_name'), image: '/Destination/yala.jpg', badge: t('d4_badge'), badgeColor: 'bg-green-500' },
    { name: t('d5_name'), image: '/Destination/Ella-Rock.jpg', badge: t('d5_badge'), badgeColor: 'bg-blue-500' },
    { name: t('d6_name'), image: '/Destination/mirissa.jpg', badge: t('d6_badge'), badgeColor: 'bg-pink-500' },
  ];

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-7 w-[1000px] max-h-[85vh] bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 flex flex-col cursor-default font-sans text-left z-50 overflow-y-auto overflow-x-hidden custom-scrollbar">
      
      {/* Invisible bridge so hover doesn't break */}
      <div className="absolute top-[-28px] left-0 w-full h-[28px] bg-transparent"></div>

      <div className="p-8 pb-6">
        <h3 className="text-[#0f4422] text-xl font-extrabold uppercase tracking-wide mb-6">{t('popular_destinations')}</h3>
        
        <div className="grid grid-cols-3 gap-6">
          {popularDestinations.map((dest, idx) => (
            <Link href={`/destinations`} key={idx} className="group/item flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-32 w-full overflow-hidden">
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  fill 
                  className="object-cover group-hover/item:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-2 left-2 text-[10px] font-bold text-white px-2 py-1 rounded-full uppercase tracking-wider ${dest.badgeColor}`}>
                  {dest.badge}
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-gray-900 font-bold text-sm tracking-wide group-hover/item:text-[#0f4422] transition-colors">{dest.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 border-t border-gray-100 flex justify-between items-center">
        <div>
          <h4 className="text-gray-900 font-extrabold text-base uppercase">{t('cant_decide')}</h4>
          <p className="text-gray-500 text-sm tracking-wide uppercase mt-1">{t('personalized_itinerary')}</p>
        </div>
        <div className="flex space-x-4">
          <Link href="/destinations" className="px-6 py-3 border border-gray-800 text-gray-800 font-bold text-xs uppercase tracking-widest rounded-md hover:bg-gray-50 transition-colors">
            {t('view_all')}
          </Link>
          <Link href="/custom-tours" className="px-6 py-3 bg-[#0f4422] text-white font-bold text-xs uppercase tracking-widest rounded-md hover:bg-[#0b3319] transition-colors">
            {t('plan_trip')}
          </Link>
        </div>
      </div>

    </div>
  );
}
