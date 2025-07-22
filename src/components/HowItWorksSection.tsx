import { Calculator, Search, TrendingDown } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Calculator,
      title: "1. Συμπλήρωσε την κατανάλωσή σου",
      description: "Βάλε τα στοιχεία της τελευταίας σου χρέωσης ή την κατανάλωσή σου σε kWh."
    },
    {
      icon: Search,
      title: "2. Δες τις προσφορές",
      description: "Βλέπεις αμέσως όλες τις διαθέσιμες προσφορές με το πραγματικό κόστος."
    },
    {
      icon: TrendingDown,
      title: "3. Εξοικονόμησε άμεσα",
      description: "Επίλεξε την καλύτερη προσφορά και ξεκίνα να γλιτώνεις χρήματα αμέσως."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Πώς Λειτουργεί;
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Απλά 3 βήματα για να εξοικονομήσεις στο λογαριασμό του ρεύματός σου
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-gradient-primary p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-energy group-hover:scale-110 transition-all duration-300">
                <step.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;