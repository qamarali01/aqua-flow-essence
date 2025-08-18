import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="py-6 px-6 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage-medium to-sage-dark flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="8" r="2" fill="white"/>
              <path d="M12 14v6" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-primary">GreenTech</h1>
            <p className="text-sm text-muted-foreground">Consulting GmbH</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#" className="text-primary font-medium">Services</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <Button variant="outline" className="border-sage-medium text-sage-dark hover:bg-sage-light">
          Get in Touch
        </Button>
      </div>
    </header>
  );
};