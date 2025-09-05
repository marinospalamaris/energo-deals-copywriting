import { Zap } from 'lucide-react';

const RedirectToForm = () => {
  const formUrl = 'https://bestenergydeals.gr/?ff_landing=6&utm_source=comparison&utm_medium=redirect';

  return (
    <div className="min-h-screen bg-gradient-energy">
      {/* Header */}
      <div className="text-center text-primary-foreground py-8">
        <div className="bg-white/20 p-4 rounded-full shadow-glow w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          <Zap className="w-10 h-10 text-accent" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Σύγκριση Ρεύματος</h1>
        <p className="text-lg opacity-90 mb-6">
          Συμπληρώστε τη φόρμα παρακάτω για να ξεκινήσετε τη σύγκριση
        </p>
      </div>

      {/* Embedded Form */}
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <iframe
            src={formUrl}
            title="Φόρμα Σύγκρισης Ρεύματος"
            width="100%"
            height="800"
            frameBorder="0"
            className="w-full min-h-[800px]"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default RedirectToForm;