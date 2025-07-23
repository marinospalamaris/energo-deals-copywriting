import { Zap, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Revma Prosfores Online</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Η πρώτη αμερόληπτη πλατφόρμα σύγκρισης τιμών ρεύματος στην Ελλάδα. 
              Βοηθάμε χιλιάδες νοικοκυριά να εξοικονομούν στο ρεύμα κάθε μήνα.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@revmaprosfores.online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>217.000.3200</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Υπηρεσίες</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Σύγκριση Ρεύματος</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Σύγκριση Φυσικού Αερίου</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Συμβουλές Εξοικονόμησης</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Εταιρεία</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Για Εμάς</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Επικοινωνία</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Προστασία Δεδομένων</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Όροι Χρήσης</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 EnergoDeals.gr - Όλα τα δικαιώματα διατηρούνται</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;