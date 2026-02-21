import Image from 'next/image';
import * as motion from "framer-motion/client";

interface ServiceCardProps {
  title: string;
  description: string;
  bgColor: string; // Placeholder for image style
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServiceCard({ title, description, bgColor }: ServiceCardProps) {
  return (
    <motion.div 
      variants={cardVariants}
      className="flex flex-col text-left"
    >
      <div className={`w-full aspect-[4/5] ${bgColor} mb-6 relative overflow-hidden rounded-sm`}>
        {/* Placeholder for the illustration */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>
      <h3 className="text-xl font-bold text-[#222] mb-3">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{description}</p>
    </motion.div>
  );
}
