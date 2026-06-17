import { motion } from 'motion/react';
import { ArrowRight, Shield, Award, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="w-full bg-white">
      {/* Header section with split layout */}
      <section className="pt-32 pb-20 px-6">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <div className="text-accent uppercase tracking-[0.2em] font-medium text-sm mb-6 flex items-center gap-3">
              <span className="w-12 h-px bg-accent"></span>
              Our Mission
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-charcoal mb-8">
              A Better Way to Navigate Property Transition After Loss
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed font-light mb-6">
              Tangibles Estate Organizer (TEO) was founded to solve a massive, overlooked challenge in the rental housing industry: the costly and emotional delay between a tenant's death and the lawful clearance of their personal belongings.
            </p>
            <p className="text-lg text-charcoal-light leading-relaxed font-light">
              By serving as an authorized, neutral, professional third-party proxy, we eliminate the 30-50 days of vacancy loss traditionally forced upon landlords, while simultaneously relieving grieving, out-of-state families from the logistical nightmare of sorting an estate.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="relative">
            <div className="aspect-[3/4] bg-white border border-gray-100 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1542621323-9c8e888ad9ab?q=80&w=2670&auto=format&fit=crop" 
                alt="Sophisticated office environment" 
                className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-charcoal text-white p-8 max-w-[280px]">
              <div className="font-serif text-3xl mb-2">"Time Matters"</div>
              <p className="text-sm font-light text-gray-300">We compress timeline from weeks to days.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values / Focus */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif text-charcoal mb-4">The Pillars of Our Service</h2>
            <p className="text-charcoal-light max-w-2xl mx-auto">Our work operates strictly through these unwavering commitments.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Trust and Neutrality", icon: Shield, desc: "We act as an objective third-party, ensuring belongings are processed without bias or personal conflict." },
              { title: "Compliance", icon: Scale, desc: "Operating strictly within legal frameworks and providing chain-of-custody tracking to protect property managers." },
              { title: "Compassion", icon: Award, desc: "Treating every unit with dignity, understanding the weight of the situation for grieving families." },
              { title: "Efficiency", icon: ArrowRight, desc: "Swift mobilization and structured categorization so landlords can reclaim their units quickly." }
            ].map((value, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }} className="bg-white p-8 shadow-sm">
                <value.icon className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-3 text-charcoal">{value.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin / Local Commitment */}
      <section className="py-24 px-6 bg-charcoal text-white">
        <div className="w-full max-w-7xl mx-auto text-center max-w-3xl">
          <motion.div {...fadeInUp}>
            <div className="text-accent-light uppercase tracking-widest text-sm font-medium mb-6">Operating in Omaha, NE</div>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">
              Proudly serving the metropolitan area with a specialized, first-of-its-kind property transition model.
            </h2>
            <p className="text-gray-300 font-light leading-relaxed mb-10">
              Unlike estate liquidators, elderly movers, junk haulers, or general organizers, TEO is uniquely designed specifically for decedent property transition in rental environments. We do not appraise, we do not haul trash, and we do not sell items. We secure, organize, and accelerate readiness.
            </p>
            <Link to="/contact" className="inline-block border border-accent text-accent hover:bg-accent hover:text-white transition-colors px-10 py-4 uppercase tracking-widest text-sm font-medium">
              Work With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
