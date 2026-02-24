import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import * as motion from "framer-motion/client";
import DiscountBadge from "@/components/DiscountBadge";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface ServiceRowProps {
  title: string;
  description: string;
  imageOnLeft?: boolean;
  image: string;
  discount?: number;
  peopleCount?: string;
  durationDays?: string;
  href: string;
}

function ServiceRow({ title, description, imageOnLeft = false, image, discount, peopleCount, durationDays, href }: ServiceRowProps) {
  const t = useTranslations('Other');
  return (
    <div className={`flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 py-16 container-custom overflow-hidden`}>
      <motion.div 
        initial={{ opacity: 0, x: imageOnLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 aspect-video rounded-sm relative overflow-hidden shadow-sm"
      >
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
        {discount && (
          <div className="absolute top-4 left-4 z-10">
            <DiscountBadge percentage={discount} />
          </div>
        )}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: imageOnLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <h3 className="text-2xl font-bold mb-4 text-[#222]">{title}</h3>
        <p className="text-gray-500 mb-6 leading-relaxed text-sm">
          {description}
        </p>

        {/* Display Metrics if Provided */}
        {(peopleCount || durationDays) && (
          <div className="flex items-center gap-8 mb-8">
            {peopleCount && (
              <div className="flex items-center gap-2 text-[#0A3013] font-medium text-[16px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                {peopleCount} {t('people')}
              </div>
            )}
            
            {durationDays && (
              <div className="flex items-center gap-2 text-[#0A3013] font-medium text-[16px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {durationDays} {t('days')}
              </div>
            )}
          </div>
        )}

        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-fit"
        >
          <Link href={href} className="btn-primary rounded-none shadow-sm text-xs px-6 py-2 block">
            {t('explore')}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  const t = useTranslations('Tours');
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <PageHeader title={t('main_title')} bgImage="/images/service_bg.jpg"/>
      
      <section className="bg-white py-12">
        <ServiceRow 
          title={t('title1')}
          description={t('description1')}
          imageOnLeft={false}
          image="/Tours/saffari.jpg"
          discount={20}
          peopleCount="50"
          durationDays="01"
          href="/tours/yala-national-park-safari"
        />
        <ServiceRow 
          title={t('title2')}
          description={t('description2')}
          imageOnLeft={true}
          image="/Tours/sigiri.jpg"
          peopleCount="50"
          durationDays="05"
          href="/tours/sigiriya-dambulla-day-trip"
        />
        <ServiceRow 
          title={t('title3')}
          description={t('description3')}
          imageOnLeft={false}
          image="/Tours/tea.jpg"
          peopleCount="50"
          durationDays="02"
          href="/tours/tea-plantation-tour"
        />

        <ServiceRow 
          title={t('title4')}
          description={t('description4')}
          imageOnLeft={true}
          image="/Tours/Dolphin.jpg"
          discount={20}
          peopleCount="50"
          durationDays="02"
          href="/tours/whale-dolphin-watching"
        />

        <ServiceRow 
          title={t('title5')}
          description={t('description5')}
          imageOnLeft={false}
          image="/Tours/galle.jpg"
          peopleCount="50"
          durationDays="01"
          href="/tours/galle-full-day-journey"
        />

        <ServiceRow 
          title={t('title6')}
          description={t('description6')}
          imageOnLeft={true}
          image="/Tours/history.jpg"
          peopleCount="50"
          durationDays="02"
          href="/tours/cultural-triangle-history"
        />

        <ServiceRow 
          title={t('title7')}
          description={t('description7')}
          imageOnLeft={false}
          image="/Tours/Arches.jpg"
          peopleCount="20"
          durationDays="01"
          href="/tours/ella-scenic-wonders"
        />
      </section>
      <Footer />
    </main>
  );
}
