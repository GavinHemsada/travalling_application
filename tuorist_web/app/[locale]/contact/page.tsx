import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import * as motion from "framer-motion/client";
import { getTranslations } from "next-intl/server";

const image = "/images/contact_bg.jpg";

export default async function ContactPage() {
  const t = await getTranslations('Contact');

  return (
    <main className="min-h-screen relative">
      <Navbar />
      <PageHeader title={t('title')} bgImage={image} />
      
      <section className="bg-white py-16">
        <div className="container-custom flex flex-col md:flex-row gap-16">
          {/* Get In Touch Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 p-8 shadow-2xl rounded-sm"
          >
             <h2 className="text-2xl font-bold mb-8 text-[#222]">{t('get_in_touch')}</h2>
             <form className="space-y-6">
                 <div>
                     <input type="text" placeholder={t('your_name')} className="w-full bg-gray-50 p-4 rounded-sm border-none focus:ring-2 focus:ring-[#7dae54] outline-none text-sm" />
                 </div>
                 <div>
                     <input type="tel" placeholder={t('phone_number_placeholder')} className="w-full bg-gray-50 p-4 rounded-sm border-none focus:ring-2 focus:ring-[#7dae54] outline-none text-sm" />
                 </div>
                 <div>
                     <input type="email" placeholder={t('email_placeholder')} className="w-full bg-gray-50 p-4 rounded-sm border-none focus:ring-2 focus:ring-[#7dae54] outline-none text-sm" />
                 </div>
                 <div>
                     <textarea rows={5} placeholder={t('message')} className="w-full bg-gray-50 p-4 rounded-sm border-none focus:ring-2 focus:ring-[#7dae54] outline-none text-sm"></textarea>
                 </div>
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   type="submit" 
                   className="btn-primary w-full md:w-auto"
                 >
                     {t('send_now')}
                 </motion.button>
             </form>
          </motion.div>
          
          {/* Talk To Us Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 pt-8"
          >
            <h2 className="text-2xl font-bold mb-8 text-[#222]">{t('talk_to_us')}</h2>
            
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full border border-green-700 text-green-700">
                      {/* Mail Icon SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{t('email_label')}</p>
                        <p className="text-lg text-[#2e4c23] font-medium">something@tyler.com</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full border border-green-700 text-green-700">
                      {/* Phone Icon SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{t('phone_label')}</p>
                        <p className="text-lg text-[#2e4c23] font-medium">0718721716</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full border border-green-700 text-green-700">
                      {/* Map Pin Icon SVG */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{t('address_label')}</p>
                        <p className="text-lg text-[#2e4c23] font-medium">2727 Ocean Road,<br/>Hikkaduwa, Sri Lanka</p>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <p className="text-sm font-bold text-[#222] mb-4">{t('follow_us')}</p>
                <div className="flex space-x-2 text-[#7dae54]">
                     {/* Social Icons Placeholders */}
                     <span className="h-8 w-8 bg-[#7dae54] rounded-full text-white flex items-center justify-center font-bold text-xs">f</span>
                     <span className="h-8 w-8 bg-[#7dae54] rounded-full text-white flex items-center justify-center font-bold text-xs">t</span>
                     <span className="h-8 w-8 bg-[#7dae54] rounded-full text-white flex items-center justify-center font-bold text-xs">in</span>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
