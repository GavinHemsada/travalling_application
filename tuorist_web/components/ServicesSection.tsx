import ServiceCard from './ServiceCard';
import * as motion from "framer-motion/client";

export default function ServicesSection() {
  const services = [
    {
      title: 'Web Design',
      description: 'Custom web design for small businesses, we help you capture new audiences and increase your sales.',
      bgColor: 'bg-[#a3b8d6]', // Muted Blue
    },
    {
      title: 'Graphic Design',
      description: 'Logos, merchandise and more. Anyone can create nice graphics. We think it’s better to create memorable ones.',
      bgColor: 'bg-[#89c4f4]', // Light Blue
    },
    {
      title: 'Content Creation',
      description: 'Want to attract people to your website? You have to have the best content in the world. That’s what we do.',
      bgColor: 'bg-[#98c972]', // Greenish
    },
  ];

  return (
    <section className="py-24 bg-white">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
        className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </motion.div>
    </section>
  );
}
