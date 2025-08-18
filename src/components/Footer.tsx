export const Footer = () => {
  return (
    <footer className="bg-sage-light py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage-medium to-sage-dark flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="8" r="2" fill="white"/>
                  <path d="M12 14v6" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">GreenTech</h3>
                <p className="text-lg text-sage-dark">Consulting GmbH</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Expert guidance on sustainable water and energy solutions, driving meaningful 
              impact across energy, water, and climate domains.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a></li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                Email: info@greentech-consulting.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sage-medium pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 GreenTech Consulting GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};