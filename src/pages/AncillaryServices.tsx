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
    keyServices: [
      "Market assessments and studies",
      "Market entry facilitation and B2B advisory services",
      "Business matchmaking events",
      "Partnership development"
    ]
  },
  {
    title: "Contract & Claim Management", 
    icon: <FileText className="w-8 h-8" />,
    description: "Professional contract administration",
    keyServices: [
      "FIDIC Contract management",
      "Claims assessment and resolution",
      "Risk management strategies",
      "Dispute resolution support"
    ]
  },
  {
    title: "Environment/Social/Governance (ESG)",
    icon: <Shield className="w-8 h-8" />,
    description: "Sustainable business practices",
    keyServices: [
      "ESG strategy development",
      "Sustainability reporting",
      "Environmental compliance",
      "Social impact assessments"
    ]
  },
  {
    title: "HR / Recruitments",
    icon: <Users className="w-8 h-8" />,
    description: "Human capital solutions",
    keyServices: [
      "Executive recruitment",
      "HR process optimization",
      "Cultural training programs",
      "Performance management systems"
    ]
  }
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
                      <h4 className="font-semibold text-primary mb-4">Key Services:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {area.keyServices.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Capabilities */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Additional Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Supporting services that enhance our core business management offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary/5 to-white p-8 rounded-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Business Excellence</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Market assessments and feasibility studies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Due diligence and risk assessments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Process optimization and efficiency</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-accent/5 to-white p-8 rounded-lg border border-accent/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Strategic Development</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Organizational development and change management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Leadership development and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Strategic planning and implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-8">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/90">Projects Completed</div>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-white/90">Countries Served</div>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/90">Client Satisfaction</div>
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