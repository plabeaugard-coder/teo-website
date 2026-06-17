import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Camera, 
  ShieldAlert, 
  Layers, 
  Box, 
  Users, 
  Link as LinkIcon, 
  Zap,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const services = [
    {
      title: "Rapid Onsite Response",
      icon: Clock,
      desc: "TEO mobilizes quickly after death notification to secure the unit and prevent unauthorized access. This rapid response minimizes vacancy loss."
    },
    {
      title: "Photographic Inventory and Documentation",
      icon: Camera,
      desc: "A comprehensive, room-by-room photographic inventory protects landlords from liability and provides families with transparency."
    },
    {
      title: "Asset Identification and Safeguarding",
      icon: ShieldAlert,
      desc: "We locate and secure legal documents, financial records, and valuables, transferring them according to authorized instructions."
    },
    {
      title: "Sorting and Categorization",
      icon: Layers,
      desc: "Belongings are sorted into clear categories for storage, donation, disposal, or family transfer, ensuring nothing is overlooked."
    },
    {
      title: "Professional Packing and Preparation",
      icon: Box,
      desc: "Items are carefully boxed and labeled using professional organizing standards for offsite storage, donation, or pickup."
    },
    {
      title: "Proxy Coordination",
      icon: Users,
      desc: "TEO acts as the authorized hands-on site, coordinating logistics between next of kin, property managers, and donation partners."
    },
    {
      title: "Chain of Custody Tracking",
      icon: LinkIcon,
      desc: "Every step—from inventory to packing to transfer—is documented, protecting from disputes and ensuring care and transparency."
    },
    {
      title: "Unit Readiness Acceleration",
      icon: Zap,
      desc: "We coordinate with the landlord’s make-ready team to ensure the unit transitions quickly to cleaning, maintenance, and releasing."
    }
  ];

  const steps = [
    { title: "Death Notification and Consultation", desc: "Immediate outreach to establish needs and timeline." },
    { title: "Authorization and Planning", desc: "Securing legal authorization from the next of kin to act as proxy." },
    { title: "Inventory and Documentation", desc: "Executing a thorough photographic and written catalog." },
    { title: "Asset Protection and Organization", desc: "Securing valuables and sorting all tangible property." },
    { title: "Packing and Coordination", desc: "Professional boxing and coordinating with storage or family." },
    { title: "Transfer and Unit Readiness", desc: "Final clearance of the unit, readying it for maintenance." }
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-white text-charcoal pt-32 pb-12 px-6">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="text-accent uppercase tracking-[0.2em] font-medium text-sm mb-4">Core Operational Services</div>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-charcoal">Proxy Management and <br/>Property Transition</h1>
            <p className="max-w-2xl text-lg text-charcoal-light font-light leading-relaxed">
              Serving as a professional proxy, TEO bridges the critical gap between a tenant's passing and the unit's return to operational readiness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeInUp} 
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative"
              >
                <div className="w-12 h-12 bg-stone-100 group-hover:bg-accent transition-colors flex items-center justify-center mb-6">
                  <service.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl mb-4 pr-4">{service.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed font-light">{service.desc}</p>
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-16 bg-white p-8 border border-gray-200 text-sm text-charcoal-light max-w-3xl">
            <h4 className="font-serif text-lg text-charcoal mb-2">Service Limitations</h4>
            <p>To maintain professional boundaries and specific focus, Tangibles does not offer legal advice (probate, taxes, or benefits), appraise items, arrange or participate in estate sales, provide removal/hauling services, or conduct make-ready activities (cleaning appliances, fixtures, etc).</p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-6 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6">How It Works</h2>
            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">Our structured, systematic six-step approach ensures full legal compliance, complete documentation, and swift operational turnaround.</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeInUp}
                  className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} mb-8 md:mb-0 text-center md:text-left`}>
                    <div className="bg-white p-8 border border-gray-100 shadow-sm relative group hover:border-accent/30 transition-colors">
                      <div className="text-accent font-mono text-sm mb-2 font-bold tracking-widest uppercase">Step 0{idx + 1}</div>
                      <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
                      <p className="text-charcoal-light text-sm font-light">{step.desc}</p>
                    </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-2 border-accent rounded-full items-center justify-center z-10 shadow-[0_0_0_6px_white]">
                    <div className="w-2 h-2 bg-charcoal rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div {...fadeInUp} className="mt-24 text-center">
             <Link to="/contact" className="bg-charcoal hover:bg-black text-white px-8 py-4 font-medium uppercase tracking-wide text-sm transition-colors inline-block">
                Schedule Free Consultation
              </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
