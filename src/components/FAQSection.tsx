import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Πόσο θα μου κοστίσει η υπηρεσία σας;",
      answer: "Η υπηρεσία μας είναι εντελώς δωρεάν για τους καταναλωτές. Κερδίζουμε μόνο όταν βοηθάμε εταιρείες να βελτιώσουν τις προσφορές τους, όχι από τη σύγκριση."
    },
    {
      question: "Είναι δύσκολο να αλλάξω πάροχο ρεύματος;",
      answer: "Όχι, είναι πολύ απλό! Ο νέος πάροχος αναλαμβάνει όλη τη διαδικασία. Εσύ απλά υπογράφεις το συμβόλαιο και σε 15-30 μέρες η αλλαγή ολοκληρώνεται αυτόματα, χωρίς διακοπή ρεύματος."
    },
    {
      question: "Τα στοιχεία μου είναι ασφαλή;",
      answer: "Απόλυτα. Χρησιμοποιούμε τα στοιχεία σου μόνο για τη σύγκριση και δεν τα μοιραζόμαστε με τρίτους χωρίς τη συγκατάθεσή σου. Τηρούμε όλους τους κανονισμούς προστασίας δεδομένων."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Συχνές Ερωτήσεις
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Οι απαντήσεις στις πιο συχνές ερωτήσεις μας
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
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

export default FAQSection;