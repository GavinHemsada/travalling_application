import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import ContactSection from "../../components/ContactSection";
import Image from "next/image";
import * as motion from "framer-motion/client";

interface ServiceRowProps {
  title: string;
  description: string;
  imageOnLeft?: boolean;
}

function ServiceRow({ title, description, imageOnLeft = false }: ServiceRowProps) {
  return (
    <div className={`flex flex-col ${imageOnLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 py-16 container-custom overflow-hidden`}>
       {/* Placeholder Image Area */}
      <motion.div 
        initial={{ opacity: 0, x: imageOnLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 aspect-video bg-[#e0f2fe] rounded-sm relative overflow-hidden shadow-sm"
      >
         <div className="absolute inset-0 bg-[#a3b8d6] opacity-20"></div>
          {/* Decorative shapes to mimic illustration */}
         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#5d8aa8] opacity-50 clip-path-polygon-[0_100,20_40,40_100,60_20,100_100]"></div>
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
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary rounded-none shadow-sm text-xs px-6 py-2"
        >
          EXPLORE
        </motion.button>
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <PageHeader title="SERVICES" />
      
      <section className="bg-white py-12">
        <ServiceRow 
          title="Web Design"
          description="We create custom web design for small businesses, this will help you capture new audiences and increase your sales. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours."
          imageOnLeft={false}
        />
        <ServiceRow 
          title="Graphic Design"
          description="We specialize in logos, merchandise and more. Anyone can create nice graphics but it's much better to create memorable ones. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours."
          imageOnLeft={true}
        />
        <ServiceRow 
          title="Content Writing"
          description="Want to attract people to your website? You have to have the best content in the world. Our content writers will create award winning content for you. Contact us by calling, emailing or filling out our form. You will receive a free quote by email within 24 hours."
          imageOnLeft={false}
        />
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
