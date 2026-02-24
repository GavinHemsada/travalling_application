import { Link } from '@/i18n/routing';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

import Image from 'next/image';
import { toursData } from '@/data/tours';
import { allDestinations } from '@/data/destinationsData';
import { useTranslations } from 'next-intl';

const footerImages = [
  '/Footer/footer_img1.jpg',
  '/Footer/footer_img2.jpg',
  '/Footer/footer_img3.jpg',
  '/Footer/footer_img4.jpg',
  '/Footer/footer_img5.jpg',
];

export default function Footer() {
  const t = useTranslations('Footer');
  const d = useTranslations('DestinationDetails');
  const tTours = useTranslations('Tours');

  return (
    <footer className={`bg-[#F9F9F9] border-t border-gray-200 ${montserrat.className}`}>
      {/* Top Footer Image Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 w-full bg-white mb-16">
        {footerImages.map((img, index) => (
          <div key={index} className="relative w-full aspect-square md:aspect-auto md:h-64 overflow-hidden">
            <Image 
              src={img} 
              alt={`Sri Lanka Travel Highlight ${index + 1}`} 
              fill 
              className="object-cover hover:scale-110 transition-transform duration-700 hover:opacity-90"
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-7xl pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1: Tours */}
          <div>
            <h3 className="text-xl font-bold text-[#0A3013] mb-6">{t('tours')}</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              {Object.keys(toursData).slice(0, 8).map(slug => (
                <li key={slug}>
                  <Link href={`/tours/${slug}`} className="hover:text-green-700 transition-colors">
                    {tTours(slug as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Destinations */}
          <div>
            <h3 className="text-xl font-bold text-[#0A3013] mb-6">{t('destinations')}</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              {allDestinations.slice(0, 8).map(dest => (
                <li key={dest.slug}>
                  <Link href={`/destinations/${dest.slug}`} className="hover:text-green-700 transition-colors">
                    {d(`${dest.slug}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sitemap */}
          <div>
            <h3 className="text-xl font-bold text-[#0A3013] mb-6">{t('sitemap')}</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li><Link href="/" className="hover:text-green-700 transition-colors">{t('home')}</Link></li>
              <li><Link href="/destinations" className="hover:text-green-700 transition-colors">{t('menu_destinations')}</Link></li>
              <li><Link href="/tours" className="hover:text-green-700 transition-colors">{t('menu_tours')}</Link></li>
              <li><Link href="/custom-tours" className="hover:text-green-700 transition-colors">{t('custom_tours')}</Link></li>
              <li><Link href="/contact" className="hover:text-green-700 transition-colors">{t('contact_us')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Office & Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-[#0A3013] mb-6">{t('office')}</h3>
            <div className="flex items-start gap-3 text-gray-600 text-sm mb-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mt-0.5 text-[#0A3013] shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>{t('address')}</span>
            </div>

            <h3 className="text-xl font-bold text-[#0A3013] mb-6">{t('newsletter')}</h3>
            <div className="flex flex-col space-y-3">
              <div className="relative border-b border-gray-300 pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <input 
                  type="email" 
                  placeholder={t('email_placeholder')} 
                  className="w-full bg-transparent pl-7 pr-2 text-sm text-gray-700 outline-none"
                />
              </div>
              <button className="bg-[#0A3013] text-white py-3 rounded-sm text-sm font-semibold tracking-wide hover:bg-green-900 transition-colors">
                {t('subscribe')}
              </button>
            </div>
          </div>

          {/* Column 5: Tours Inquiry & Social */}
          <div>
            <h3 className="text-xl font-bold text-[#0A3013] mb-6">{t('tours_inquiry')}</h3>
            <ul className="space-y-4 text-gray-600 text-sm mb-10">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:gavinhemsada@gmail.com" className="hover:text-green-700">gavinhemsada@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="tel:+94775842299" className="hover:text-green-700">+94718721716</a>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5h7.5m-7.5 3h7.5" />
                </svg>
                <a href="tel:+94775842299" className="hover:text-green-700">+94718721716</a>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#0A3013] mb-4">{t('social')}</h3>
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A3013] text-white hover:bg-green-800 transition-colors">
                <span className="text-xs font-bold">f</span>
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A3013] text-white hover:bg-green-800 transition-colors">
                <span className="text-xs font-bold">Trip</span>
              </a>
              <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A3013] text-white hover:bg-green-800 transition-colors">
                <span className="text-xs font-bold">IG</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
