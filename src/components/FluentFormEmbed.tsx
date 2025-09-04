import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface FluentFormEmbedProps {
  className?: string;
}

const FluentFormEmbed = ({ className = "" }: FluentFormEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const formUrl = "https://bestenergydeals.gr/?ff_landing=6&embedded=1";

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const openInNewTab = () => {
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`relative ${className}`}>
      {/* Preconnect for faster loading */}
      <link rel="preconnect" href="https://bestenergydeals.gr" />
      <link rel="dns-prefetch" href="https://bestenergydeals.gr" />
      
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

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-6 z-10 flex flex-col items-center justify-center text-center">
            <div className="bg-white/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-foreground mb-4">
                Πρόβλημα φόρτωσης φόρμας
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Η φόρμα δεν μπόρεσε να φορτωθεί στη σελίδα. Κάντε κλικ παρακάτω για να τη δείτε σε νέα καρτέλα.
              </p>
              <Button 
                onClick={openInNewTab}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ανοίξτε τη Φόρμα
              </Button>
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
          sandbox="allow-forms allow-scripts allow-same-origin"
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