import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import heroBg from '../assets/images/townhomes_close_up_1780685085579.png';
import { 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  HeartHandshake,
  CheckCircle2,
  Building,
  Users,
  FileCheck2,
  PackageCheck
} from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Modern apartment building exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 mix-blend-screen"></div>
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 relative z-10 pt-20 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="text-accent uppercase tracking-[0.2em] font-medium text-sm mb-6 flex items-center gap-3">
              <span className="w-12 h-px bg-accent"></span>
              Professional Proxy Services
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-[1.1]">
              When a Tenant Dies, <span className="font-serif opacity-90 text-charcoal">We Are a Trusted Proxy.</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal-light mb-10 leading-relaxed max-w-2xl font-light">
              Tangibles Estate Organizer steps in immediately to secure, inventory, and systematically pack up a decedent's personal belongings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link to="/contact" className="bg-accent hover:bg-accent-light text-white px-8 py-4 font-medium uppercase tracking-wide text-sm transition-colors text-center border border-accent hover:border-accent-light">
                Schedule a Consultation
              </Link>
              <Link to="/partners" className="bg-white/80 hover:bg-white backdrop-blur-sm border border-charcoal/20 text-charcoal px-8 py-4 font-medium uppercase tracking-wide text-sm transition-colors text-center">
                Become a Referral Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION SECTION */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="w-full max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">The Gap Between Loss and Re-Occupancy</h2>
            <p className="text-lg text-charcoal-light leading-relaxed">
              When a resident passes away, families are grieving, landlords face vacancy loss, and staff members are left navigating complicated property transition challenges. TEO serves as the authorized onsite proxy, coordinating the documentation, organization, packing, and transition of personal belongings so rental units can move toward readiness in days instead of weeks.
            </p>
          </motion.div>

          {/* Infographic Flow */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 items-start"
          >
            {[
              { icon: Clock, title: 'Notification' },
              { icon: FileCheck2, title: 'Inventory' },
              { icon: ShieldCheck, title: 'Protection' },
              { icon: PackageCheck, title: 'Packing' },
              { icon: ArrowRight, title: 'Transfer' },
              { icon: Building, title: 'Readiness' }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full border border-accent/30 bg-white flex items-center justify-center mb-4 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <step.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-serif text-lg text-charcoal">{step.title}</h4>
                {idx < 5 && (
                  <div className="hidden lg:block absolute w-full h-px bg-accent/20 top-8 left-[50%] -z-10" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY TEO - 3 COLUMNS */}
      <section className="py-24 bg-white text-charcoal border-t border-gray-100">
        <div className="w-full max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <div className="text-accent uppercase tracking-[0.2em] font-medium text-sm mb-4">Our Commitment</div>
            <h2 className="text-4xl md:text-5xl text-charcoal">Protecting Assets. <br/><span className="text-charcoal-light italic">Preserving Peace of Mind.</span></h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-12 lg:gap-16"
          >
            {[
              { icon: Building, title: "Reduce Vacancy Loss", desc: "Accelerate the path to make-ready operations and re-occupancy." },
              { icon: ShieldCheck, title: "Maintain Compliance", desc: "Operate within legal requirements and documented chain-of-custody procedures." },
              { icon: HeartHandshake, title: "Support Families", desc: "Provide a trusted local representative when loved ones cannot be present." }
            ].map((col, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="border-t border-gray-200 pt-8">
                <col.icon className="w-10 h-10 text-accent mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl mb-4">{col.title}</h3>
                <p className="text-charcoal-light leading-relaxed font-light">{col.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* UNIQUE VALUE PROPOSITION */}
      <section className="py-24 bg-white">
        <div className="w-full max-w-4xl mx-auto px-6">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl leading-[1.1] mb-8">
              The only service designed specifically for decedent property transition in rental environments
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Specialized focus", "Neutral third-party representation",
                "Professional documentation", "Asset protection",
                "Rapid response", "Family-centered approach",
                "Landlord-focused efficiency", "Transparent reporting"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-charcoal-light">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link to="/about" className="inline-flex items-center gap-2 text-accent font-medium uppercase tracking-widest text-sm hover:text-charcoal transition-colors group">
                Learn our story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TARGET CLIENTS */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-6 text-center">
           <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Who We Serve</h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">Bridging the operational needs of businesses and the emotional needs of families.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              "Property Management Companies",
              "Senior Living Communities",
              "Assisted Living Facilities",
              "Skilled Nursing Facilities",
              "Mobile Home Communities",
              "Executors and Personal Representatives",
              "Out-of-State Family Members",
              "Funeral Homes and Referral Partners"
            ].map((client, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white p-8 border border-gray-100 flex items-center justify-center text-center min-h-[120px]">
                <h4 className="font-serif text-lg leading-tight text-charcoal">{client}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
