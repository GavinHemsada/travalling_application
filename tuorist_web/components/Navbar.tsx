import Link from 'next/link';
import * as motion from "framer-motion/client";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full z-10 flex flex-col md:flex-row justify-between items-center p-6 md:px-12 bg-transparent text-[#333]"
    >
      <div className="font-bold text-xl tracking-widest uppercase mb-4 md:mb-0">
        Earth
      </div>
      <div className="flex space-x-6 md:space-x-8 text-sm font-medium tracking-wide">
        <Link href="/" className="hover:text-gray-600 transition-colors">HOME</Link>
        <Link href="/about" className="hover:text-gray-600 transition-colors">ABOUT</Link>
        <Link href="/services" className="hover:text-gray-600 transition-colors">SERVICES</Link>
        <Link href="/contact" className="hover:text-gray-600 transition-colors">CONTACT</Link>
      </div>
    </motion.nav>
  );
}
