import * as motion from "framer-motion/client";

export default function ContactSection() {
  return (
    <section className="relative py-32 bg-[#eaf6fa] text-center overflow-hidden">
       {/* Background decorations matching the footer area design */}
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#5d8aa8] opacity-20 transform -skew-y-2 origin-bottom-left"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container-custom"
      >
        <h2 className="text-3xl font-bold mb-4 text-[#2e4c23] uppercase tracking-widest">Talk to Us</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm">
          Have any questions? We are always open to talk about your business, new projects, creative opportunities and how we can help you.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary rounded-none shadow-lg"
        >
          GET IN TOUCH
        </motion.button>
      </motion.div>
    </section>
  );
}
