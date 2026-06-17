import { motion } from 'motion/react';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partners() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-white pt-32 pb-20 px-6 border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div {...fadeInUp} className="w-full md:w-3/5">
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-charcoal">Partner With Tangibles</h1>
            <p className="text-lg text-charcoal-light leading-relaxed font-light max-w-2xl">
              We cultivate strong professional relationships across the multi-family housing and death care industries. By partnering with us, you offer families a seamless, fully-managed solution to one of their most difficult operational and emotional challenges.
            </p>
          </motion.div>
          <motion.div {...fadeInUp} className="w-full md:w-2/5 flex justify-end">
             <div className="bg-white p-8 shadow-sm border border-gray-100 max-w-sm w-full">
              <h3 className="font-serif text-2xl mb-4 text-charcoal">Quick Referral</h3>
              <p className="text-sm text-charcoal-light mb-6">Have an immediate need? Download our referral form or submit online.</p>
              <button className="w-full bg-accent hover:bg-accent-light text-white transition-colors py-3 px-4 font-medium uppercase tracking-wider text-xs mb-3 flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> Download PDF Form
              </button>
              <Link to="/contact" className="w-full border border-charcoal/20 hover:border-charcoal text-charcoal transition-colors py-3 px-4 font-medium uppercase tracking-wider text-xs flex items-center justify-center">
                Submit Online Request
              </Link>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Target Sectors */}
      <section className="py-24 px-6 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif text-charcoal">Who We Partner With</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Property Managers",
                desc: "Mitigate thousands of dollars in vacancy loss by turning 50-day waiting periods into a few days of swift organization.",
                points: ["Reduce liability", "Gain photographic inventory", "Accelerate make-ready"]
              },
              {
                title: "Senior Living Facilities",
                desc: "Relieve burdened staff from managing resident belongings while ensuring families feel supported during transitions.",
                points: ["Protect facility reputation", "Neutral third-party proxy", "Seamless room clearance"]
              },
              {
                title: "Estate Attorneys and Executors",
                desc: "Outsource the physical labor and operational chaos of clearing a rental property so you can focus on legal settlement.",
                points: ["Asset identification", "Chain of custody", "Organized boxing and labeling"]
              }
            ].map((partner, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }} className="border border-gray-200 p-8 hover:border-accent transition-colors flex flex-col h-full">
                <h3 className="font-serif text-2xl mb-4 text-charcoal">{partner.title}</h3>
                <p className="text-charcoal-light text-sm font-light leading-relaxed mb-8 flex-grow">{partner.desc}</p>
                <div className="space-y-3 mt-auto">
                  {partner.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-charcoal">
                      <CheckCircle2 className="w-4 h-4 text-accent/70" />
                      {pt}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-charcoal text-center text-white">
         <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
           <h2 className="text-3xl font-serif mb-6">Become a Preferred Partner</h2>
           <p className="text-gray-300 font-light mb-10">We establish preferred vendor agreements to ensure prioritized emergency response times (24-48 hours) for our trusted network.</p>
           <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light px-8 py-4 uppercase tracking-widest text-sm font-medium transition-colors">
              Discuss Partnership <ArrowRight className="w-4 h-4" />
           </Link>
         </motion.div>
      </section>
    </div>
  );
}
