import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div className="flex space-x-6 mb-4 md:mb-0 font-medium">
            <Link href="#" className="hover:text-gray-800">Home</Link>
            <Link href="#" className="hover:text-gray-800">About</Link>
            <Link href="#" className="hover:text-gray-800">Services</Link>
            <Link href="#" className="hover:text-gray-800">Contact</Link>
        </div>
        
        <div className="font-bold text-lg text-[#222] tracking-widest uppercase mb-4 md:mb-0">
          Earth
        </div>

        <div>
          &copy; 2022 Earth. All right reserved.
        </div>
      </div>
    </footer>
  );
}
