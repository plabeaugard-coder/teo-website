import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { motion } from "motion/react";
import { Lock } from "lucide-react";

// Make sure to call loadStripe outside of a component's render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder");

function CheckoutForm({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/payment`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message || "An error occurred.");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs" as const,
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="w-full bg-charcoal hover:bg-black text-white py-4 uppercase tracking-widest text-sm font-medium transition-colors disabled:opacity-50 mt-6"
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner">Processing...</div> : `Pay $${(amount / 100).toFixed(2)}`}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message" className="text-red-500 text-sm mt-4">{message}</div>}
    </form>
  );
}

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState(25000); // Default to $250.00
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    // Check if we have Stripe env vars first
    if (!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY) {
      setError("Stripe is not fully configured. Please ensure VITE_STRIPE_PUBLISHABLE_KEY and STRIPE_SECRET_KEY are set in your environment.");
      return;
    }

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "teo-service" }], amount: amount }),
    })
      .then((res) => {
        if (!res.ok) {
           return res.json().then(err => { throw new Error(err.error?.message || "Failed to create payment intent")});
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => {
          console.error(err);
          setError(err.message || "Could not connect to payment server. Make sure STRIPE_SECRET_KEY is configured.");
      });
  }, [amount]);

  const appearance = {
    theme: 'stripe' as const,
    variables: {
        colorPrimary: '#1A1A1A', // charcoal
        colorBackground: '#ffffff',
        colorText: '#1A1A1A',
        colorDanger: '#df1b41',
        fontFamily: 'Inter, system-ui, sans-serif',
        spacingUnit: '4px',
        borderRadius: '0px',
    }
  };
  const options = {
    clientSecret,
    appearance,
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="w-full bg-white relative">
      {/* Page Header */}
      <section className="bg-charcoal text-white pt-32 pb-20 px-6">
         <div className="w-full max-w-7xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-5xl font-serif mb-6">Secure Payment Portal</h1>
              <p className="text-gray-300 font-light max-w-2xl mx-auto">Settle invoices and deposits securely online via Stripe.</p>
            </motion.div>
         </div>
      </section>

      {/* Payment Form Section */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="w-full max-w-3xl mx-auto">
            <motion.div {...fadeInUp} className="bg-white border border-gray-100 p-8 md:p-12 shadow-sm">
                 <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-6">
                    <div className="p-3 bg-gray-50 shrink-0">
                        <Lock className="w-6 h-6 text-charcoal" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif text-charcoal">Complete Your Payment</h2>
                        <p className="text-charcoal-light font-light text-sm mt-1">Payments are processed securely by Stripe.</p>
                    </div>
                 </div>

                 {error ? (
                     <div className="bg-red-50 text-red-700 p-6 border border-red-100 font-light text-sm rounded">
                         <strong className="font-medium">Configuration Error:</strong> {error}
                         <div className="mt-4 text-xs opacity-80">
                             To process payments, you must add your Stripe Secret Key to the environment variables and add it in AI Studio settings.
                         </div>
                     </div>
                 ) : clientSecret ? (
                    <Elements options={options} stripe={stripePromise}>
                       <CheckoutForm amount={amount} />
                    </Elements>
                 ) : (
                    <div className="flex justify-center items-center py-20 text-charcoal-light font-light text-sm">
                        <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin mr-3"></div>
                        Initializing secure connection...
                    </div>
                 )}
            </motion.div>
        </div>
      </section>
    </div>
  );
}
