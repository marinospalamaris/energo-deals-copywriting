import { Zap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RedirectToForm = () => {
  const targetUrl = 'https://bestenergydeals.gr/?ff_landing=6&utm_source=comparison&utm_medium=redirect';

  const handleRedirect = () => {
    // Direct navigation - most reliable method
    window.location.href = targetUrl;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-energy">
      <div className="text-center text-primary-foreground max-w-md mx-auto px-6">
        <div className="bg-white/20 p-4 rounded-full shadow-glow w-20 h-20 mx-auto mb-8 flex items-center justify-center">
          <Zap className="w-10 h-10 text-accent" />
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Σύγκριση Ρεύματος</h1>
        <p className="text-lg opacity-90 mb-8">
          Πατήστε παρακάτω για να ξεκινήσετε τη σύγκριση προσφορών ρεύματος
        </p>
        
        <Button 
          onClick={handleRedirect}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-10 py-4 rounded-xl shadow-glow transition-all duration-300 hover:scale-105 mb-4"
        >
          <ExternalLink className="w-6 h-6 mr-3" />
          Ξεκινήστε τη Σύγκριση
        </Button>
        
        <p className="text-sm opacity-75 mt-6">
          ⚡ Άμεση σύγκριση • 🔒 100% ασφαλής • ✅ Χωρίς κρυφά κόστη
        </p>
      </div>
    </div>
  );
};

export default RedirectToForm;