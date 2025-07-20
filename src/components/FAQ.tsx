import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What types of electronics do you accept?",
      answer: "We accept all types of electronics including computers, laptops, tablets, smartphones, servers, networking equipment, printers, and more. Contact us for a complete list of accepted items."
    },
    {
      question: "Do you pay for old electronics?",
      answer: "No, Communicycle does not pay for old electronics. We don't make money unless you do. Instead of lowballing you like a reseller, we partner with you to refurbish and resell your tech. When it sells, you get paid, and we take a cut — simple, transparent, and aligned."
    },
    {
      question: "How secure is your data destruction process?",
      answer: "We follow strict data destruction protocols including physical destruction of hard drives and certified data wiping. All processes are documented and we provide certificates of destruction for compliance purposes."
    },
    {
      question: "Do you provide pickup services?",
      answer: "Yes, we offer convenient pickup services for businesses and individuals with large quantities of electronics. Contact us to schedule a pickup and get a quote."
    },
    {
      question: "How quickly can you process my electronics?",
      answer: "Our recycling processing time is 7 days from received to recycled. Our ITAD asset recovery services typically take anywhere from 7 days to multiple weeks depending on the project and quantity."
    },
    {
      question: "How much do I typically get paid?",
      answer: "Payment amounts vary significantly based on the type, condition, age, and market demand for your electronics. We evaluate each item's refurbishment potential and current market value. You'll receive a detailed assessment and profit-sharing proposal before we proceed with any work."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our electronic recycling and ITAD services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};