import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { toursData } from '@/data/tours';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default async function TourSetupPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = toursData[slug];

  if (!tour) {
    notFound();
  }

  const t = await getTranslations(`TourDetails.${slug}`);
  const tShared = await getTranslations('TourDetailsShared');

  return (
    <main className="min-h-screen bg-[#FFFDF9] font-sans">
        <Navbar />
      {/* Header Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[40vh] md:h-[50vh]">
        {tour.images.map((img, idx) => (
          <div key={idx} className="relative w-full h-full overflow-hidden">
            <Image 
              src={img} 
              alt={`${t('title')} ${idx + 1}`} 
              fill 
              className="object-cover hover:scale-110 transition-transform duration-700" 
            />
          </div>
        ))}
      </div>

      <div className="container-custom py-12">
        {/* Title Section */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A3013] mb-3 tracking-tight">
            {t('title')}
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <div className="flex text-[#0A3013]">
              {[1, 2, 3, 4, 5].map(star => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <span>{tShared('reviews', { count: tour.reviews })}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-8">
            
            {/* Description */}
            <h2 className="text-xl font-bold text-[#222] mb-4">{t('subtitle')}</h2>
            <div className="text-gray-600 leading-relaxed text-[15px] space-y-4 mb-10 whitespace-pre-line">
              {t('description')}
            </div>

            {/* Included / Excluded Box */}
            <div className="border border-[#E5E7EB] rounded-sm p-8 mb-12 bg-white flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="font-bold text-[#222] mb-4 text-sm flex items-center gap-2 uppercase tracking-wide">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {tShared('tour_included')}
                </h3>
                <ul className="space-y-3">
                  {(t.raw('includes') as string[]).map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-[14px] text-gray-600">
                      <span className="text-green-600 font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 border-t md:border-t-0 md:border-l border-[#E5E7EB] pt-6 md:pt-0 md:pl-8">
                <h3 className="font-bold text-[#222] mb-4 text-sm flex items-center gap-2 uppercase tracking-wide">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  {tShared('tour_excluded')}
                </h3>
                <ul className="space-y-3">
                  {(t.raw('excludes') as string[]).map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-[14px] text-gray-600">
                      <span className="text-red-500 font-bold">✗</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tour Plan */}
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-[#0A3013] mb-4">{tShared('tour_plan')}</h2>
              <p className="text-gray-500 text-sm mb-8">
                {tShared('tour_plan_subtitle')}
              </p>
              
              <div className="space-y-6 relative border-l-2 border-[#1B5E20] ml-4 pl-8 py-2">
                {(t.raw('plan') as {day: string, title: string, activities: string[]}[]).map((day, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle Indicator */}
                    <div className="absolute -left-[45px] top-0.5 w-[26px] h-[26px] bg-white border-2 border-[#1B5E20] rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#1B5E20]">{day.day}</span>
                    </div>
                    
                    <h4 className="font-bold text-[#222] text-lg mb-3">{day.title}</h4>
                    <ul className="space-y-2">
                      {day.activities.map((act, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-600">
                          <span className="text-[#1B5E20] mt-0.5">✓</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Best Views / Gallery */}
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-[#0A3013] mb-4">{t('title').split(' ')[0]} - {tShared('best_ancient_views')}</h2>
              <p className="text-gray-500 text-sm mb-6">{tShared('best_ancient_views_subtitle')}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {tour.gallery.map((img, idx) => (
                  <div key={idx} className={`relative w-full ${idx === 0 || idx === 3 ? 'aspect-[3/4]' : 'aspect-square'} overflow-hidden rounded-sm cursor-zoom-in`}>
                    <Image 
                      src={img} 
                      alt={`Gallery view ${idx + 1}`} 
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map */}
            <div className="mb-14">
              <h2 className="text-2xl font-bold text-[#0A3013] mb-6">{tShared('location')}</h2>
              <div className="w-full aspect-[21/9] bg-gray-200 rounded-sm overflow-hidden">
                <iframe 
                  src={tour.locationSrc}
                  className="w-full h-full border-0" 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 border border-[#E5E7EB] bg-white rounded-sm p-8 shadow-sm">
              <h4 className="text-center text-[#1B5E20] font-extrabold text-lg mb-4 uppercase tracking-wider">
                {tShared('speak_specialist')}<br/> {tShared('specialist')}
              </h4>
              <p className="text-center text-gray-500 text-sm mb-8 leading-relaxed">
                {tShared('speak_specialist_subtitle')}
              </p>
              
              <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#e8f5e9] text-[#1B5E20] font-bold px-6 py-4 rounded-sm hover:bg-[#c8e6c9] transition-colors mb-4 w-full border border-[#c8e6c9]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                {tShared('whatsapp')}
              </a>

              <a href="/custom-tours" className="block text-center bg-[#0A3013] text-white font-bold px-6 py-4 rounded-sm hover:bg-[#1B5E20] transition-colors w-full uppercase tracking-wider text-sm">
                {tShared('make_inquiry')}
              </a>
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </main>
  );
}
