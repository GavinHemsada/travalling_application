"use client";

import { useState, useEffect } from "react";
import * as motion from "framer-motion/client";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Hero() {
  const router = useRouter();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const t = useTranslations('Hero');

  const slides = [
    {
      src: "/images/bg_img5.jpg",
      title: t('slide0_title'),
      subtitle: t('slide0_subtitle')
    },
    {
      src: "/images/bg_img4.jpg",
      title: t('slide1_title'),
      subtitle: t('slide1_subtitle')
    },
    {
      src: "/images/bg_img1.jpg",
      title: t('slide2_title'),
      subtitle: t('slide2_subtitle')
    },
    {
      src: "/images/bg_img2.jpg",
      title: t('slide3_title'),
      subtitle: t('slide3_subtitle')
    },
    {
      src: "/images/bg_img.jpg",
      title: t('slide4_title'),
      subtitle: t('slide4_subtitle')
    },
    {
      src: "/images/bg_img3.jpg",
      title: t('slide5_title'),
      subtitle: t('slide5_subtitle')
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
      
      {/* Background Image Slider using Framer Motion */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.src}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.src})` }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentSlideIndex ? 1 : 0,
            scale: index === currentSlideIndex ? 1.05 : 1 // subtle zoom effect
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      ))}

      {/* Gray overlay to make text readable */}
      <div className="absolute inset-0 bg-gray-600/70 z-0"></div>
       
      <div className="z-10 px-4 mt-20 max-w-5xl mx-auto">
        <motion.h1 
          key={`title-${currentSlideIndex}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md leading-tight"
        >
          {slides[currentSlideIndex].title}
        </motion.h1>
        <motion.p 
          key={`sub-${currentSlideIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light mb-12 drop-shadow-md max-w-4xl mx-auto"
        >
          {slides[currentSlideIndex].subtitle}
        </motion.p>
        <motion.button 
          onClick={() => router.push('/custom-tours')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-[#55B8ED] hover:bg-[#3FA2CD] text-white px-8 py-3 rounded-full uppercase tracking-wider font-semibold transition-colors duration-300 shadow-lg"
        >
          {t('plan_journey')}
        </motion.button>
      </div>

    </section>
  );
}
