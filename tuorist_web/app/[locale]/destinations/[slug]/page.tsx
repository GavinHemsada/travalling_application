import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { allDestinations } from "@/data/destinationsData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const destData = allDestinations.find(d => d.slug === resolvedParams.slug);

  if (!destData) {
    return {};
  }

  const t = await getTranslations('DestinationDetails');
  const title = t(`${resolvedParams.slug}.title`);
  const description = t(`${resolvedParams.slug}.description_1`);

  return {
    title: `${title} | Travel Vista`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: ``,
      siteName: 'Travel Vista',
      images: [
        {
          url: destData.image,
          width: 1200,
          height: 630,
        },
      ],
      locale: resolvedParams.locale,
      type: 'article',
    },
    alternates: {
      languages: {
        'en': `/en/destinations/${resolvedParams.slug}`,
        'si': `/si/destinations/${resolvedParams.slug}`,
      },
    }
  };
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const resolvedParams = await params;
  const destData = allDestinations.find(d => d.slug === resolvedParams.slug);
  
  if (!destData) {
    notFound();
  }

  const t = await getTranslations('DestinationDetails');
  const tUI = await getTranslations('DestinationDetailsUI');

  const content = {
    title: t(`${resolvedParams.slug}.title`),
    description_1: t(`${resolvedParams.slug}.description_1`),
    description_2: t(`${resolvedParams.slug}.description_2`),
    highlight_1: t(`${resolvedParams.slug}.highlight_1`),
    highlight_2: t(`${resolvedParams.slug}.highlight_2`),
    highlight_3: t(`${resolvedParams.slug}.highlight_3`),
    highlight_4: t(`${resolvedParams.slug}.highlight_4`),
    best_time: t(`${resolvedParams.slug}.best_time`),
    dress_code: t(`${resolvedParams.slug}.dress_code`),
    why_choose: t(`${resolvedParams.slug}.why_choose`),
  };

  // Load topic-by-topic gallery images specific to the destination
  const galleryImages = destData.gallery || [
    destData.image,
    "/Tours/Arches.jpg",
    "/Tours/tea.jpg",
    "/images/bg_img1.jpg",
    "/images/bg_img2.jpg",
    "/images/bg_img4.jpg"
  ];

  return (
    <main className="min-h-screen relative font-sans bg-white pb-20">
      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Banner Section */}
      <div className="relative h-[60vh] w-full flex items-end overflow-hidden pt-32">
        <Image 
          src={destData.image} 
          alt={content.title} 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="container-custom relative z-10 mx-auto px-6 w-full pb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white leading-tight max-w-4xl tracking-tight">
            {destData.title}
          </h1>
        </div>
      </div>

      {/* Main Body */}
      <div className="container-custom mx-auto px-6 max-w-[1300px] mt-20">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column - Content */}
          <div className="w-full lg:w-8/12">
            <h2 className="text-3xl font-extrabold text-[#0A3013] mb-8 leading-snug">
              {content.title}
            </h2>
            
            <p className="text-gray-600 mb-10 leading-[1.8] text-[15px]">
              {content.description_1}
            </p>

            {/* 2 Image Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-sm">
                <Image src={galleryImages[0]} fill className="object-cover" alt="Gallery 1" />
              </div>
              <div className="relative aspect-square md:aspect-[4/3] rounded-sm overflow-hidden shadow-sm">
                <Image src={galleryImages[1]} fill className="object-cover" alt="Gallery 2" />
              </div>
            </div>

            <p className="text-gray-600 mb-10 leading-[1.8] text-[15px]">
              {content.description_2}
            </p>

            {/* Highlights Array */}
            <ul className="space-y-4 mb-16">
              {[content.highlight_1, content.highlight_2, content.highlight_3, content.highlight_4].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-green-600/30 flex items-center justify-center mt-0.5 group-hover:bg-[#1B5E20] group-hover:border-[#1B5E20] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 text-green-600 group-hover:text-white transition-colors">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Important Info Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-extrabold text-[#0A3013] mb-6">{tUI('important_info')}</h3>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 space-y-6 shadow-sm">
                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0 border border-blue-100 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-bold text-[#0A3013] mb-1">{tUI('best_time')}</span>
                    <span className="text-gray-500 text-sm">{content.best_time}</span>
                  </div>
                </div>
                
                <div className="w-full h-px bg-gray-200"></div>

                <div className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center flex-shrink-0 border border-purple-100 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-bold text-[#0A3013] mb-1">{tUI('dress_code')}</span>
                    <span className="text-gray-500 text-sm">{content.dress_code}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Gallery 5 Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden md:col-span-2">
                <Image src={galleryImages[2]} fill className="object-cover" alt="Gallery 3" />
              </div>
              <div className="relative aspect-[4/3] md:aspect-auto rounded-sm overflow-hidden">
                <Image src={galleryImages[3]} fill className="object-cover" alt="Gallery 4" />
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src={galleryImages[4]} fill className="object-cover" alt="Gallery 5" />
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden md:col-span-2">
                <Image src={galleryImages[5]} fill className="object-cover" alt="Gallery 6" />
              </div>
            </div>

            {/* Why Choose This Tour */}
            <div>
              <h3 className="text-2xl font-extrabold text-[#0A3013] mb-4">{tUI('why_choose')}</h3>
              <p className="text-gray-600 leading-[1.8] text-[15px]">{content.why_choose}</p>
            </div>

          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="w-full lg:w-4/12 relative">
            <div className="sticky top-32">
              
              {/* Inquiry Card */}
              <div className="bg-[#EAF3FD] rounded-xl p-8 text-center text-[#0A3013] border border-blue-50 shadow-md">
                <h3 className="text-[#0FB973] font-black text-xl mb-6 tracking-wider uppercase leading-snug">
                  {tUI('speak_specialist')}
                </h3>
                <p className="text-[13px] text-gray-700 mb-8 font-medium">
                  {tUI('specialist_desc')}
                </p>
                
                <div className="flex items-center justify-center gap-2 text-[#0FB973] font-bold mb-8 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
                  <span>{tUI('whatsapp')}</span>
                </div>
                
                <Link href="/contact" className="block w-full bg-[#1EB554] text-white py-[18px] rounded-sm font-bold uppercase tracking-wider hover:bg-[#128E3F] transition-colors shadow-sm">
                  {tUI('make_inquiry')}
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-10 mb-8 px-4">
                <h4 className="font-extrabold text-[#0A3013] text-lg mb-5">{tUI('social_links')}</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0A3013] hover:border-[#0A3013] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0A3013] hover:border-[#0A3013] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0A3013] hover:border-[#0A3013] transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                  </a>
                </div>
              </div>

              <div className="mt-8 flex justify-center w-full">
                <Link href="/destinations" className="text-gray-500 hover:text-green-600 font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                  {tUI('back_to_destinations')}
                </Link>
              </div>

            </div>
          </div>
          
        </div>
      </div>

      <div className="mt-20">
         <Footer />
      </div>

    </main>
  );
}
