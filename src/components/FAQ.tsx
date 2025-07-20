
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "What electronics do you accept for ITAD Asset Recovery?",
      answer: "We accept all working electronics including laptops, desktops, servers, phones, tablets, monitors, networking equipment, and gaming consoles. Devices must be functional to qualify for our asset recovery program where we refurbish and resell them, returning most profits to you."
    },
    {
      question: "How much money can I expect from ITAD Asset Recovery?",
      answer: "Payouts depend on device condition, age, and market demand. We provide free evaluations and transparent pricing. Working laptops typically range from $50-500+, phones $20-300+, and servers $100-2000+. Contact us for a personalized quote."
    },
    {
      question: "Is my data completely destroyed during the process?",
      answer: "Yes, we provide certified data destruction using industry-standard DoD 5220.22-M protocols for all devices. You receive a certificate of data destruction for compliance and peace of mind. This applies to both ITAD and recycling services."
    },
    {
      question: "What happens to electronics that can't be refurbished?",
      answer: "Non-working or obsolete electronics go through our certified recycling process. We disassemble devices, separate materials, and ensure 100% landfill diversion. All precious metals and components are recovered responsibly."
    },
    {
      question: "Do you offer pickup services for businesses?",
      answer: "Yes, we provide convenient pickup services for businesses with bulk electronics. We also offer secure shipping labels for smaller quantities. Contact us to schedule a pickup or request shipping materials."
    },
    {
      question: "Where are your drop-off locations?",
      answer: "We have drop-off bins across Canada in convenient neighborhood locations. Use our location finder to find the nearest Communicycle bin. No appointment necessary - just drop off your electronics anytime."
    },
    {
      question: "Are you certified for electronic waste recycling?",
      answer: "Yes, we maintain all required certifications including R2 (Responsible Recycling) and comply with provincial e-waste regulations. We're committed to ethical, secure, and environmentally responsible processing."
    },
    {
      question: "How long does the ITAD process take?",
      answer: "After receiving your devices, evaluation typically takes 2-3 business days. Refurbishment and resale can take 2-4 weeks depending on device complexity. Payment is processed within 48 hours of sale completion."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-2">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our ITAD asset recovery and electronic recycling services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}
