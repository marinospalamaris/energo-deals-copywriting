import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-energy overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center text-primary-foreground relative z-10">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 p-4 rounded-full shadow-glow">
            <Zap className="w-12 h-12 text-accent" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Βρες το <span className="text-accent">Φθηνότερο</span><br />
          Ρεύμα σε 30 Δευτερόλεπτα
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Σύγκρινε όλες τις προσφορές ρεύματος στην Ελλάδα. 
          100% αντικειμενική σύγκριση με το πραγματικό κόστος.
        </p>
        
        <div className="mt-8">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg shadow-glow"
            onClick={() => window.open('https://bestenergydeals.gr/form-page/?source=lovable', '_blank', 'noopener,noreferrer')}
          >
            Ξεκίνα τη Σύγκριση Τώρα
          </Button>
        </div>
        
        <p className="text-sm mt-4 opacity-75">
          ✓ Χωρίς κρυφά κόστη  ✓ Αμεροληπτη σύγκριση  ✓ Εξοικονόμηση άμεσα
        </p>
      </div>
    </section>
  );
};

export default HeroSection;