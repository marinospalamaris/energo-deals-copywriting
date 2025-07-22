import { Shield, Calculator, Zap } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Αμεροληψία",
      description: "Δεν παίρνουμε προμήθειες από παρόχους. Η σύγκρισή μας είναι πλήρως αντικειμενική και βασίζεται μόνο στο δικό σου συμφέρον."
    },
    {
      icon: Calculator,
      title: "Πραγματικό Συνολικό Κόστος",
      description: "Υπολογίζουμε όλες τις χρεώσεις: πάγια, εκπτώσεις συνέπειας, κρατικές επιδοτήσεις. Βλέπεις το τελικό ποσό που θα πληρώσεις."
    },
    {
      icon: Zap,
      title: "Απλή Διαδικασία",
      description: "Η αλλαγή παρόχου είναι πιο εύκολη από ποτέ. Σε βοηθάμε να κάνεις τη μετάβαση γρήγορα και χωρίς ταλαιπωρία."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Γιατί να μας επιλέξεις;
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Είμαστε ο μόνος φυσικός σύμβουλος που χρειάζεσαι για την ενέργεια
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center lg:text-left group"
            >
              <div className="bg-gradient-secondary p-4 rounded-lg w-16 h-16 mx-auto lg:mx-0 mb-6 flex items-center justify-center shadow-energy group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;