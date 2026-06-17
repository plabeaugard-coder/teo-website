import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    status: 'idle', // idle, submitting, success
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'submitting' });
    // Simulate API call
    setTimeout(() => {
      setFormState({ status: 'success' });
    }, 1500);
  };

  return (
    <div className="w-full bg-white">
      <section className="pt-32 pb-20 px-6 bg-charcoal text-white">
         <div className="w-full max-w-7xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-5xl font-serif mb-6">Contact and Consultation</h1>
              <p className="text-gray-300 font-light max-w-2xl mx-auto">Get in touch to request assistance or discuss ongoing partnership opportunities.</p>
            </motion.div>
         </div>
      </section>

      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
          
          {/* Contact Info */}
          <motion.div {...fadeInUp} className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="font-serif text-2xl text-charcoal mb-8">Contact Information</h3>
              <div className="space-y-6 text-charcoal-light flex flex-col">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <strong className="block text-charcoal font-medium mb-1">Omaha, NE</strong>
                    Providing onsite proxy and property transition services across the greater metropolitan area.
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span>1-800-555-0199</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8">
              <h4 className="font-serif text-lg text-charcoal mb-4">Emergency Turnaround</h4>
              <p className="text-sm text-charcoal-light leading-relaxed mb-4">We offer our preferred partners access to 24-48 hour accelerated onsite response to minimize extreme vacancy loss.</p>
              <div className="text-accent uppercase text-xs font-medium tracking-wide">Inquire for details</div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeInUp} className="lg:col-span-3 bg-white border border-gray-100 shadow-sm p-8 md:p-12">
            {formState.status === 'success' ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-serif text-charcoal">Request Received</h3>
                <p className="text-charcoal-light">Our coordination team will contact you shortly to confirm the details and mobilization timeline.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-2xl text-charcoal mb-8 border-b border-gray-100 pb-4">Contact Form</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-charcoal-light font-medium">Name</label>
                    <input required name="name" type="text" className="w-full border-b border-gray-300 py-2 focus:border-accent focus:outline-none transition-colors bg-transparent" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-charcoal-light font-medium">Email</label>
                    <input required name="email" type="email" className="w-full border-b border-gray-300 py-2 focus:border-accent focus:outline-none transition-colors bg-transparent" placeholder="you@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-charcoal-light font-medium">Subject</label>
                  <input required name="subject" type="text" className="w-full border-b border-gray-300 py-2 focus:border-accent focus:outline-none transition-colors bg-transparent" placeholder="Project inquiry, partnership, or service question" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-charcoal-light font-medium">Message</label>
                  <textarea required name="message" rows={6} className="w-full border-b border-gray-300 py-2 focus:border-accent focus:outline-none transition-colors bg-transparent resize-none" placeholder="Please share your request, property details, or any timeline considerations..." />
                </div>

                <button
                  type="submit"
                  disabled={formState.status === 'submitting'}
                  className="w-full bg-charcoal hover:bg-black text-white py-4 uppercase tracking-widest text-sm font-medium transition-colors disabled:opacity-70 mt-4"
                >
                  {formState.status === 'submitting' ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
