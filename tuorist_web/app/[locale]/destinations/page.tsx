'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { allDestinations } from "@/data/destinationsData";
import { useTranslations } from "next-intl";

const filters = ["All", "Beach", "Mountain", "City", "Cultural", "Adventure"];
const POSTS_PER_PAGE = 10;

export default function DestinationsPage() {
  const t = useTranslations("DestinationsPage");
  const c = useTranslations("Categories");
  const d = useTranslations("DestinationDetails");

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter functionality
  const filteredDestinations = useMemo(() => {
    return allDestinations.filter(dest => {
      const translatedTitle = d(`${dest.slug}.title`);
      const translatedSubtitle = d(`${dest.slug}.subtitle`);

      const matchesSearch = translatedTitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            translatedSubtitle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || dest.categories.includes(activeCategory);
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, d]);

  // Reset to page 1 if query or category changes
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);

  // Pagination functionality
  const totalPages = Math.ceil(filteredDestinations.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentDestinations = filteredDestinations.slice(indexOfFirstPost, indexOfLastPost);

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="min-h-screen relative font-sans bg-[#FFFDF9]">
      
        <Navbar />

      {/* Hero Section */}
      <div className="relative h-[55vh] md:h-[65vh] w-full flex flex-col justify-center items-start text-left overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(/Tours/tea.jpg)' }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="z-10 container mx-auto px-6 max-w-7xl mt-12 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] max-w-2xl">
              {t('hero_title')}
            </h1>
          </motion.div>
        </div>
      </div>
      
      {/* Body Section */}
      <section className="py-24 bg-[#FFFDF9]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          {/* Header Text */}
          <div className="text-center mb-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#FF6B6B] font-medium text-sm md:text-base tracking-wider block mb-3"
            >
              {t('explore_tours')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-[40px] font-extrabold text-[#0A3013]"
            >
              {t('top_attractions')}
            </motion.h2>
          </div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-10 relative"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input 
              type="text" 
              placeholder={t('search_placeholder')} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-[18px] pl-[52px] pr-6 rounded-full border border-gray-200 focus:outline-none focus:border-[#0A3013] focus:ring-1 focus:ring-[#0A3013] text-gray-700 bg-white shadow-sm transition-all"
            />
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-6"
          >
            {filters.map((filter) => (
              <button 
                key={filter} 
                onClick={() => setActiveCategory(filter)}
                className={`px-7 py-2.5 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === filter 
                  ? 'bg-[#0A3013] text-white border-[#0A3013] shadow-md' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {c(filter as any)}
              </button>
            ))}
          </motion.div>

          {/* Result count */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="text-center text-gray-500 text-[13px] mb-14"
          >
            {filteredDestinations.length === 1 
              ? t('showing_one_result', { count: filteredDestinations.length }) 
              : t('showing_results', { count: filteredDestinations.length })}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-20 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {currentDestinations.length > 0 ? (
                currentDestinations.map((dest, idx) => (
                  <motion.div 
                    key={dest.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: (idx % 5) * 0.05 }}
                    className="group relative aspect-[4/5] rounded-[1.25rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow bg-gray-100"
                  >
                    <Link href={`/destinations/${dest.slug}`} className="block w-full h-full relative">
                      <Image 
                        src={dest.image}
                        alt={dest.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 w-full p-6 text-center transition-transform duration-300 group-hover:-translate-y-4">
                        <h3 className="text-white font-extrabold text-[15px] md:text-base leading-snug mb-1.5">{d(`${dest.slug}.title`)}</h3>
                        <p className="text-gray-300 text-[13px] font-medium">{d(`${dest.slug}.subtitle`)}</p>
                      </div>
                      
                      {/* Hover Overlay with Explore Now */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-10 backdrop-blur-[2px]">
                         <div className="mt-16 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                           <span className="bg-[#1B5E20] hover:bg-[#0A3013] text-white px-7 py-3 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl border border-white/20 transition-colors">
                             {t('explore_now')}
                           </span>
                         </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-20 text-center text-gray-500"
                >
                  <p className="text-xl mb-2">{t('no_destinations')}</p>
                  <p>{t('try_adjusting')}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-2"
            >
              <button 
                onClick={prevPage}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-sm border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                // Simple pagination logic, showing a few pages
                if (
                  pageNumber === 1 ||
                  pageNumber === totalPages ||
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <button 
                      key={pageNumber}
                      onClick={() => goToPage(pageNumber)}
                      className={`w-10 h-10 flex items-center justify-center rounded-sm transition-colors ${
                        currentPage === pageNumber
                        ? 'bg-[#0A3013] text-white font-medium shadow-sm'
                        : 'border border-gray-200 bg-white text-[#0A3013] font-medium hover:bg-gray-50'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  pageNumber === currentPage - 2 ||
                  pageNumber === currentPage + 2
                ) {
                  return (
                    <span key={pageNumber} className="w-10 h-10 flex items-center justify-center text-gray-400 font-medium tracking-widest">
                      ...
                    </span>
                  );
                }
                return null;
              })}

              <button 
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-sm border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </motion.div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
