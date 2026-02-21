import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import ContactSection from "../../components/ContactSection";
import * as motion from "framer-motion/client";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <PageHeader title="WHO ARE WE?" />
      
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom flex flex-col md:flex-row items-center gap-16">
           {/* Illustration placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative h-80 w-full bg-[#e0f2fe] rounded-sm overflow-hidden border-8 border-white shadow-lg transform -rotate-1"
          >
             <div className="absolute inset-0 bg-[#a3b8d6] opacity-30"></div>
             {/* Simple mountain shape */}
             <div className="absolute bottom-0 w-full h-2/3 bg-[#5d8aa8] clip-path-polygon-[0_100,50_0,100_100]"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#222] uppercase tracking-widest">OUR MISSION</h2>
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>
                    Hello, my name is Tyler Moore and with the help of many people I made this template. I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do.
                </p>
                <p>
                    I wish you the best of luck with your business, enjoy the adventure.
                </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
