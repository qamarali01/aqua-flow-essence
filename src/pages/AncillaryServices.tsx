import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Handshake, FileText, Shield, Users, TrendingUp, Building } from "lucide-react";

const businessAreas = [
  {
    title: "Business Matchmaking",
    icon: <Handshake className="w-8 h-8" />,
    description: "Connecting businesses for strategic partnerships",
    details: "Facilitating meaningful business connections and partnerships across industries and markets."
  },
  {
    title: "Contract & Claim Management", 
    icon: <FileText className="w-8 h-8" />,
    description: "Professional contract administration",
    details: "Expert management of contracts and claims using international standards like FIDIC."
  },
  {
    title: "Environment/Social/Governance (ESG)",
    icon: <Shield className="w-8 h-8" />,
    description: "Sustainable business practices",
    details: "ESG strategy development and implementation for responsible business operations."
  },
  {
    title: "HR / Recruitments",
    icon: <Users className="w-8 h-8" />,
    description: "Human capital solutions",
    details: "Comprehensive recruitment and human resources management services."
  }
];

const services = [
  "Market assessments and studies",
  "Market entry facilitation and B2B advisory services", 
  "Business matchmaking events",
  "ESG facilitation services",
  "FIDIC Contract & Claim Management",
  "Recruitment/HR services",
  "Cultural and management training to companies"
];

const AncillaryServices = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-muted/50 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full"></div>
          <div className="absolute top-40 left-20 w-20 h-20 bg-accent rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-muted rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Building className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-primary mb-6">Ancillary Business Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Supporting your business growth with comprehensive services in matchmaking, 
              governance, human resources, and strategic management.
            </p>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Our Business Service Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessAreas.map((area, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-[--shadow-soft] hover:-translate-y-2 ${
                  expandedCard === index ? 'ring-2 ring-accent' : ''
                } bg-gradient-to-br from-muted/20 to-white border-border`}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-full inline-flex mb-4">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{area.title}</h3>
                    <p className="text-muted-foreground text-sm">{area.description}</p>
                  </div>
                  
                  <div className="flex justify-center">
                    {expandedCard === index ? (
                      <ChevronUp className="w-5 h-5 text-accent" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-accent" />
                    )}
                  </div>
                  
                  {expandedCard === index && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{area.details}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Business Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive business support services tailored to your organizational needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-lg border border-border hover:shadow-[--shadow-soft] transition-all duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Why Choose Our Business Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-transparent rounded-lg">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">Growth-Focused</h3>
              <p className="text-muted-foreground">Strategic solutions designed to accelerate your business growth and market expansion.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-accent/5 to-transparent rounded-lg">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">Compliance Ready</h3>
              <p className="text-muted-foreground">Ensuring your business meets all regulatory and governance requirements.</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-sage-medium/20 to-transparent rounded-lg">
              <Users className="w-12 h-12 text-sage-dark mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">People-Centered</h3>
              <p className="text-muted-foreground">Human resources solutions that put your team and culture first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Business Partnerships</div>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Enhance Your Business Operations
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let us support your business growth with our comprehensive ancillary services and expert guidance.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
            Get Business Support
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AncillaryServices;