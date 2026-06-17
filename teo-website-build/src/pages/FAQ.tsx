import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const emptyAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What exactly does Tangibles Estate Organizer do?",
    answer: "We step in immediately after a tenant's passing to secure, inventory, and systematically pack up their personal belongings. We act as a trusted proxy to manage the logistics of clearing the property for landlords, property managers, and grieving families."
  },
  {
    question: "Who do you typically work with?",
    answer: "We partner with property managers, multi-family housing operators, senior living facilities, as well as estate attorneys, executors, and family members who need professional assistance with clearing a decedent's property."
  },
  {
    question: "How quickly can your team respond?",
    answer: "We understand that time is of the essence in these situations. We offer a rapid onsite response to secure the unit, begin the inventory process, and ensure the property is protected immediately after authorization."
  },
  {
    question: "What happens to the tenant's belongings?",
    answer: "Every item is carefully documented, photographed, and systematically packed. We maintain a strict chain of custody and coordinate with the family, executor, or property management for the respectful transfer of all personal property. Tangibles doesn't remove the belongings offsite."
  },
  {
    question: "How do you handle legal authorization and compliance?",
    answer: "We work closely with property management and legal representatives to ensure all actions are fully authorized by the next of kin or estate executor before proceeding. We follow strict protocols to protect all parties from liability."
  },
  {
    question: "Do you clean or prepare the unit for the next tenant?",
    answer: "Our primary focus is the respectful and secure transition of personal property. By completely clearing and packing the belongings, we accelerate the unit's readiness, allowing either the tenant's authorized person or the landlord's make-ready crew to begin their turnover work immediately."
  }
];

function FAQItem({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
      >
        <h3 className="text-xl font-serif text-charcoal pr-8">{faq.question}</h3>
        <span className="flex-shrink-0 text-accent">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <p className="pt-4 text-charcoal-light leading-relaxed font-light text-lg">
          {faq.answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <section className="bg-white pt-32 pb-20 px-6 border-b border-gray-200">
        <div className="w-full max-w-4xl mx-auto align-center text-center">
          <motion.div {...emptyAnimation}>
            <div className="text-accent uppercase tracking-[0.2em] font-medium text-sm mb-6 flex items-center justify-center gap-3">
              <span className="w-12 h-px bg-accent"></span>
              Knowledge Base
              <span className="w-12 h-px bg-accent"></span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 text-charcoal">Frequently Asked Questions</h1>
            <p className="text-lg text-charcoal-light leading-relaxed font-light max-w-2xl mx-auto">
              Find answers to common questions about our proxy management services, property transition process, and how we support our partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-20 px-6">
        <div className="w-full max-w-3xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={emptyAnimation}>
                <FAQItem faq={faq} index={idx} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
