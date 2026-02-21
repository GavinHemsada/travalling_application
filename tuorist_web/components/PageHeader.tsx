import * as motion from "framer-motion/client";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="relative h-[60vh] w-full flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-[#e0f2fe] to-[#f0f9ff]">
       {/* Height reduced compared to Hero, but keeping the vibe */}
       
       {/* Decorative Background Elements (Simple CSS representation) */}
       <div className="absolute bottom-0 w-full h-1/2 bg-[#64748b] opacity-20 transform skew-y-2 origin-bottom-left"></div>
       <div className="absolute bottom-0 w-full h-1/3 bg-[#475569] opacity-30 transform -skew-y-1 origin-bottom-right"></div>
       
      <div className="z-10 px-4 mt-12">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-[#2e4c23] mb-2 tracking-widest uppercase"
        >
          {title}
        </motion.h1>
      </div>

       {/* Foreground "Trees" placeholder */}
       <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-[#2f5d26] to-transparent opacity-60"></div>
    </div>
  );
}
