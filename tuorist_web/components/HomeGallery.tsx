import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const galleryImages = [
  "/Tours/sigiri.jpg", "/images/bg_img.jpg", "/images/bg_img1.jpg", 
  "/Tours/tea.jpg", "/Tours/saffari.jpg", "/images/bg_img2.jpg", 
  "/Tours/history.jpg", "/images/bg_img3.jpg", "/Tours/Arches.jpg"
];

export default function HomeGallery() {
  const t = useTranslations('HomeGallery');
  return (
    <section className="py-24 bg-[#FFFDF9] font-sans text-center">
      <div className="container-custom mx-auto px-6 max-w-[1200px]">
        <p className="text-[#1B5E20] font-bold text-sm tracking-widest uppercase mb-3 text-center">{t('subtitle')}</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A3013] mb-12 text-center tracking-tight">
          {t('title')}
        </h2>
        
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-16 mx-auto w-full max-w-[900px]">
          {galleryImages.map((src, idx) => (
            <div key={idx} className="relative aspect-square w-full overflow-hidden shadow-sm group">
              <Image 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link href="/destinations" className="inline-block bg-[#0A3013] text-white font-bold py-4 px-10 rounded-sm hover:bg-[#1B5E20] transition-colors text-sm tracking-wide uppercase shadow-md">
            {t('view_gallery')}
          </Link>
        </div>
      </div>
    </section>
  );
}
