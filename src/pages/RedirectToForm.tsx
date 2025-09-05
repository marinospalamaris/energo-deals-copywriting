import { useEffect, useState } from 'react';
import { Zap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RedirectToForm = () => {
  const [countdown, setCountdown] = useState(3);
  const [redirecting, setRedirecting] = useState(false);
  const targetUrl = 'https://bestenergydeals.gr/?ff_landing=6&utm_source=comparison&utm_medium=redirect';

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setRedirecting(true);
      // Use window.location for better compatibility
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500);
    }
  }, [countdown, targetUrl]);

  const handleManualRedirect = () => {
    window.location.href = targetUrl;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-energy">
      <div className="text-center text-primary-foreground max-w-md mx-auto px-6">
        <div className="bg-white/20 p-4 rounded-full shadow-glow w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <Zap className="w-8 h-8 text-accent animate-pulse" />
        </div>
        
        {!redirecting ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Προετοιμασία Φόρμας</h1>
            <p className="text-lg opacity-90 mb-6">
              Μεταφορά σε {countdown} δευτερόλεπτα...
            </p>
            <div className="text-6xl font-bold text-accent mb-6">
              {countdown}
            </div>
            <Button 
              onClick={handleManualRedirect}
              variant="outline"
              className="text-primary-foreground border-primary-foreground/30 hover:bg-white/10"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Συνέχεια Τώρα
            </Button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">Μεταφορά...</h1>
            <p className="text-lg opacity-90 mb-6">Παρακαλώ περιμένετε</p>
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-6" />
            <Button 
              onClick={handleManualRedirect}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Εναλλακτική Μετάβαση
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default RedirectToForm;