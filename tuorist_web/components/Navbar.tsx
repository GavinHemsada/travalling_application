"use client";

import {Link, usePathname} from '@/i18n/routing';
import Image from 'next/image';
import * as motion from "framer-motion/client";
import { Baloo_2, Montserrat } from 'next/font/google';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import DestinationsMegaMenu from './DestinationsMegaMenu';

const baloo = Baloo_2({ weight: ['600', '700', '800'], subsets: ['latin'] });
const montserrat = Montserrat({ weight: ['500', '600', '700'], subsets: ['latin'] });

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-md py-4 px-6 md:px-12' : 'bg-transparent py-6 px-6 md:px-12 text-[#333]'
      }`}
    >
      <div className="flex flex-col items-center justify-center relative mb-4 md:mb-0">
        {/* Decorative Wave SVG above Logo */}
        <svg 
          width="200" 
          height="30" 
          viewBox="0 0 200 30" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-4 w-full h-8"
        >
          <path d="M10 25 C 40 10, 80 -5, 120 15 C 150 25, 180 20, 200 10" stroke="url(#paint0_linear)" strokeWidth="8" strokeLinecap="round" fill="none" />
          <path d="M80 28 C 110 22, 140 12, 180 22" stroke="url(#paint1_linear)" strokeWidth="4" strokeLinecap="round" fill="none" />
          <defs>
            <linearGradient id="paint0_linear" x1="10" y1="10" x2="200" y2="10" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3FA2CD" />
              <stop offset="1" stopColor="#55B8ED" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="80" y1="20" x2="180" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3FA2CD" />
              <stop offset="1" stopColor="#55B8ED" />
            </linearGradient>
          </defs>
        </svg>

        {/* TravelVista Logo Text */}
        <div className={`flex flex-row items-center pt-2 ${baloo.className} tracking-tight leading-none`} style={{ fontSize: '3.0rem' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69C45E] via-[#65BF70] to-[#51AF95] drop-shadow-sm font-bold">Travel</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4EAAEF] to-[#60C9F8] drop-shadow-sm font-bold">Vista</span>
        </div>

        {/* Explore The World Tagline */}
        <div className={`flex items-center space-x-2 mt-[-4px] ${montserrat.className}`}>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white"></div>
          <span className="text-white font-bold text-[0.85rem] tracking-[0.2em] uppercase">
            Explore the world
          </span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white"></div>
        </div>
      </div>
      <div className={`flex items-center space-x-6 text-sm font-semibold tracking-wide ${baloo.className}`} style={{ fontSize: '1.2rem' }}>
        <Link href="/" className="text-white hover:text-[#55B8ED] transition-colors">{t('home')}</Link>
        <div className="relative group flex items-center h-full py-4">
          <Link href="/destinations" className="text-white group-hover:text-[#55B8ED] transition-colors">{t('destinations')}</Link>
          <DestinationsMegaMenu />
        </div>
        <Link href="/tours" className="text-white hover:text-[#55B8ED] transition-colors">{t('tours')}</Link>
        <Link href="/custom-tours" className="text-white hover:text-[#55B8ED] transition-colors">{t('custom_tours')}</Link>
        <Link href="/contact" className="text-white hover:text-[#55B8ED] transition-colors">{t('contact')}</Link>
        
        {/* Language Switcher */}
        <div className="flex space-x-2 ml-4 border-l border-white/30 pl-4 items-center" style={{ fontSize: '1rem' }}>
          <Link href={pathname} locale="en" className="text-white hover:text-[#55B8ED] transition-colors">EN</Link>
          <span className="text-white/50">|</span>
          <Link href={pathname} locale="si" className="text-white hover:text-[#55B8ED] transition-colors">සිං</Link>
        </div>
      </div>
    </motion.nav>
  );
}
