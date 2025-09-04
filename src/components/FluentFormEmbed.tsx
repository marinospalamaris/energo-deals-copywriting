import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface FluentFormEmbedProps {
  className?: string;
}

const FluentFormEmbed = ({ className = "" }: FluentFormEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  
  const formUrl = "https://bestenergydeals.gr/?ff_landing=6&embedded=1&utm_source=comparison&utm_medium=embed";

  // Deadman timer - fallback if iframe doesn't load within 2 seconds
  useEffect(() => {
    console.log('FluentForm: Component mounted, starting deadman timer');
    const timer = setTimeout(() => {
      if (isLoading) {
        console.log('FluentForm: Deadman timer activated - iframe took too long to load');
        console.log('FluentForm: Likely blocked by X-Frame-Options or CSP headers');
        setIsLoading(false);
        setShowFallback(true);
      }
    }, 1500); // Reduced to 1.5 seconds for faster fallback

    return () => clearTimeout(timer);
  }, [isLoading]);

  const handleIframeLoad = () => {
    console.log('FluentForm: Iframe loaded successfully');
    setIsLoading(false);
  };

  const handleIframeError = () => {
    console.log('FluentForm: Iframe failed to load - onError triggered');
    setIsLoading(false);
    setHasError(true);
  };

  const openInNewTab = () => {
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`relative ${className}`}>      
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden">
        {/* Loading Skeleton */}
        {isLoading && (
          <div className="absolute inset-6 z-10 space-y-4">
            <Skeleton className="h-8 w-3/4 bg-white/20" />
            <Skeleton className="h-4 w-full bg-white/20" />
            <Skeleton className="h-4 w-5/6 bg-white/20" />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Skeleton className="h-12 bg-white/20" />
              <Skeleton className="h-12 bg-white/20" />
            </div>
            <Skeleton className="h-12 w-full bg-white/20" />
            <div className="flex justify-center mt-8">
              <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          </div>
        )}

        {/* Error State or Fallback */}
        {(hasError || showFallback) && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center bg-white/95 backdrop-blur-sm rounded-xl">
            <div className="max-w-md mx-auto p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Συνέχεια στη Φόρμα
                </h3>
                <p className="text-muted-foreground mb-6">
                  Για την ασφάλειά σας, η φόρμα ανοίγει σε νέα καρτέλα. 
                  Κάντε κλικ παρακάτω για να συνεχίσετε τη σύγκριση.
                </p>
              </div>
              <Button 
                onClick={openInNewTab}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Ξεκινήστε τη Σύγκριση
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                🔒 Ασφαλής σύνδεση • ⚡ Αποτελέσματα σε 30 δευτερόλεπτα
              </p>
            </div>
          </div>
        )}

        {/* Iframe */}
        <iframe
          src={formUrl}
          width="100%"
          height="600"
          style={{
            border: 'none',
            borderRadius: '8px',
            backgroundColor: 'white',
            minHeight: '600px'
          }}
          title="Φόρμα Σύγκρισης Ρεύματος"
          loading="lazy"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          allow="forms payment"
        />

        {/* Trust indicators and fallback */}
        <div className="mt-4 text-center">
          <p className="text-primary-foreground/70 text-sm mb-2">
            🔒 Ασφαλής σύνδεση • 🚀 Αποτελέσματα σε 30 δευτερόλεπτα • ✅ Χωρίς κρυφά κόστη
          </p>
          <p className="text-primary-foreground text-sm">
            Εάν δεν βλέπετε τη φόρμα,{" "}
            <button 
              onClick={openInNewTab}
              className="text-accent hover:text-accent/80 underline transition-colors"
            >
              κάντε κλικ εδώ
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FluentFormEmbed;