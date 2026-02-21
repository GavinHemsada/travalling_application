import * as motion from "framer-motion/client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-[#e0f2fe] to-[#f0f9ff]">
       {/* Decorative Background Elements (Simple CSS representation of the illustration) */}
       <div className="absolute bottom-0 w-full h-1/3 bg-[#64748b] opacity-20 transform skew-y-3 origin-bottom-left"></div>
       <div className="absolute bottom-0 w-full h-1/4 bg-[#475569] opacity-30 transform -skew-y-2 origin-bottom-right"></div>
       
      <div className="z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold text-[#4a7c29] mb-2 tracking-widest uppercase"
        >
          Earth
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-[#555] tracking-[0.3em] font-light mb-12 uppercase"
        >
          Endless Potential
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="btn-primary rounded-none"
        >
          EXPLORE
        </motion.button>
      </div>

       {/* Foreground "Trees" placeholder */}
       <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-[#2f5d26] to-transparent opacity-60"></div>
    </section>
  );
}
