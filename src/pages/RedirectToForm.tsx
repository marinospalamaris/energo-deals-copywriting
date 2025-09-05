import { useEffect } from 'react';
import { Zap } from 'lucide-react';

const RedirectToForm = () => {
  useEffect(() => {
    // Redirect after a brief moment to show loading
    const timer = setTimeout(() => {
      window.location.href = 'https://bestenergydeals.gr/?ff_landing=6&utm_source=comparison&utm_medium=redirect';
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-energy">
      <div className="text-center text-primary-foreground">
        <div className="bg-white/20 p-4 rounded-full shadow-glow w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <Zap className="w-8 h-8 text-accent animate-pulse" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Μεταφορά στη Φόρμα...</h1>
        <p className="text-lg opacity-90">Παρακαλώ περιμένετε...</p>
        <div className="mt-6">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default RedirectToForm;