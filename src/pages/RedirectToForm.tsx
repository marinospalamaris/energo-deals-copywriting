import { useEffect, useState } from 'react';
import { Zap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RedirectToForm = () => {
  const [showManualLink, setShowManualLink] = useState(false);
  const targetUrl = 'https://bestenergydeals.gr/?ff_landing=6&utm_source=comparison&utm_medium=redirect';

  useEffect(() => {
    // Try automatic redirect after a brief moment
    const timer = setTimeout(() => {
      try {
        window.open(targetUrl, '_self');
      } catch (error) {
        console.error('Redirect failed:', error);
        setShowManualLink(true);
      }
    }, 1000);

    // Show manual link as fallback after 3 seconds
    const fallbackTimer = setTimeout(() => {
      setShowManualLink(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, [targetUrl]);

  const handleManualRedirect = () => {
    try {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      // Final fallback - direct navigation
      window.location.href = targetUrl;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-energy">
      <div className="text-center text-primary-foreground">
        <div className="bg-white/20 p-4 rounded-full shadow-glow w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <Zap className="w-8 h-8 text-accent animate-pulse" />
        </div>
        <h1 className="text-2xl font-bold mb-4">
          {showManualLink ? 'Συνέχεια στη Φόρμα' : 'Μεταφορά στη Φόρμα...'}
        </h1>
        <p className="text-lg opacity-90 mb-6">
          {showManualLink ? 'Κάντε κλικ παρακάτω για να συνεχίσετε' : 'Παρακαλώ περιμένετε...'}
        </p>
        
        {!showManualLink && (
          <div className="mt-6">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
        )}

        {showManualLink && (
          <Button 
            onClick={handleManualRedirect}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-3 rounded-xl shadow-glow transition-all duration-300 hover:scale-105"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Συνέχεια στη Σύγκριση
          </Button>
        )}
      </div>
    </div>
  );
};

export default RedirectToForm;