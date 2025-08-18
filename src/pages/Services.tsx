import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Droplets, Waves, Globe, Shield, FileText, Users } from "lucide-react";
import waterIcon from "@/assets/water-icon.png";

const Services = () => {
  const businessAreas = [
    "Integrated Water Resources Management",
    "Water Infrastructure", 
    "Transboundary Waters",
    "Water Sufficiency",
    "Climate Finance"
  ];

  const servicesList = [
    "Engineering, procurement, and supervision of water infrastructure",
    "Techno-Economic assessments and studies",
    "Environmental, Social, Health and Safety (ESHS) assessments",
    "Climate impact assessments",
    "Policy and regulatory advisory services",
    "Capacity development and training"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-sage-light to-sage-medium">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-[--shadow-soft]">
              <img src={waterIcon} alt="Water Services" className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Water Services
          </h1>
          <p className="text-xl text-sage-dark max-w-3xl mx-auto leading-relaxed">
            Comprehensive water consulting solutions integrating sustainability, innovation, 
            and collaboration to ensure meaningful and responsible impact across all projects.
          </p>
          <Button 
            size="lg" 
            className="mt-8 bg-primary hover:bg-sage-dark text-white px-8 py-4 text-lg shadow-[--shadow-elevated]"
          >
            Explore Our Solutions
          </Button>
        </div>
      </section>

      {/* Business Areas Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Business Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across key water management domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessAreas.map((area, index) => {
              const icons = [
                <Droplets className="w-8 h-8 text-accent" />,
                <Waves className="w-8 h-8 text-accent" />,
                <Globe className="w-8 h-8 text-accent" />,
                <Shield className="w-8 h-8 text-accent" />,
                <FileText className="w-8 h-8 text-accent" />
              ];
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-[--shadow-soft] hover:shadow-[--shadow-elevated] transition-all duration-300 hover:-translate-y-2 border border-sage-light"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-br from-accent/10 to-accent/5">
                      {icons[index]}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary text-center leading-tight">
                    {area}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-sage-light/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions spanning technical implementation to strategic advisory
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Technical Services"
              items={servicesList.slice(0, 3)}
              icon={<Waves className="w-12 h-12 text-accent" />}
              variant="blue"
            />
            <ServiceCard
              title="Advisory & Development"
              items={servicesList.slice(3)}
              icon={<Users className="w-12 h-12 text-sage-dark" />}
              variant="sage"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary to-sage-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Water Project?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's collaborate to create sustainable, impactful solutions for your water challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;