import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sage-light to-sage-medium">
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sage-medium to-sage-dark flex items-center justify-center mx-auto mb-8 shadow-[--shadow-soft]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
            <circle cx="12" cy="8" r="2" fill="white"/>
            <path d="M12 14v6" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        <h1 className="text-5xl font-bold mb-6 text-primary">GreenTech Consulting</h1>
        <p className="text-xl text-sage-dark mb-8 leading-relaxed">
          Expert guidance on sustainable water and energy solutions, driving meaningful 
          impact across energy, water, and climate domains.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/services">
            <Button size="lg" className="bg-primary hover:bg-sage-dark text-white px-8 py-4 text-lg shadow-[--shadow-elevated]">
              View Our Services
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-sage-dark text-sage-dark hover:bg-sage-light px-8 py-4 text-lg">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
