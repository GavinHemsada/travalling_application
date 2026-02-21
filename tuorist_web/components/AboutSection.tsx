import * as motion from "framer-motion/client";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#222] uppercase tracking-wide">About Us</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do. I wish you the best of luck with your business, enjoy the adventure.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 relative h-64 md:h-80 w-full bg-[#a3b8d6] rounded-sm overflow-hidden"
        >
             {/* Placeholder for the About illustration */}
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#5e8c48] opacity-80 rounded-t-[50%] transform scale-x-150 translate-y-8"></div>
             <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#4a7c29] opacity-90 rounded-t-[30%]"></div>
        </motion.div>
      </div>
    </section>
  );
}
