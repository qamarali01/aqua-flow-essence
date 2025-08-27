import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Zap, Building2, Globe, Battery, Leaf, DollarSign } from "lucide-react";

const businessAreas = [
  {
    title: "Renewables & Hydrogen",
    icon: <Leaf className="w-8 h-8" />,
    description: "Sustainable energy solutions for the future",
    details: "Comprehensive renewable energy development including solar, wind, and emerging hydrogen technologies."
  },
  {
    title: "Transmission & Distribution", 
    icon: <Zap className="w-8 h-8" />,
    description: "Power grid infrastructure and optimization",
    details: "Design and implementation of efficient power transmission and distribution networks."
  },
  {
    title: "Power Markets",
    icon: <Building2 className="w-8 h-8" />,
    description: "Energy market analysis and strategy",
    details: "Market intelligence and strategic advisory for energy trading and power markets."
  },
  {
    title: "Just Energy Transition",
    icon: <Globe className="w-8 h-8" />,
    description: "Equitable transformation to clean energy",
    details: "Supporting communities and industries in transitioning to sustainable energy systems."
  },
  {
    title: "Energy Sufficiency",
    icon: <Battery className="w-8 h-8" />,
    description: "Optimal energy use and efficiency",
    details: "Strategies for energy optimization and demand-side management solutions."
  },
  {
    title: "Climate Finance",
    icon: <DollarSign className="w-8 h-8" />,
    description: "Funding mechanisms for climate projects",
    details: "Financial structuring and investment strategies for climate and energy initiatives."
  }
];

const services = [
  "Engineering, procurement, and supervision of renewable energy plants, transmission systems, and distribution networks",
  "Project preparatory consulting services",
  "Techno-economic assessments and feasibility studies", 
  "Environmental, social, and health and safety (ESHS) assessments",
  "Policy and regulatory advisory services",
  "Development of strategic frameworks and roadmaps",
  "Power utility management services",
  "Capacity development and training"
];

const Energy = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-sage-light to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sage-medium rounded-full"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-accent rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-sage-dark rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Zap className="w-12 h-12 text-sage-dark" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-primary mb-6">Energy Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leading the transition to sustainable energy systems through innovative solutions in renewables, 
              grid modernization, and market transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Our Energy Business Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessAreas.map((area, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:shadow-[--shadow-soft] hover:-translate-y-2 ${
                  expandedCard === index ? 'ring-2 ring-accent' : ''
                } bg-gradient-to-br from-sage-light/30 to-white border-sage-medium/20`}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="p-4 bg-sage-medium/20 rounded-full inline-flex mb-4">
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
                    <div className="mt-6 pt-6 border-t border-sage-medium/20">
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
      <section className="py-20 px-6 bg-gradient-to-br from-accent/5 to-sage-light/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Energy Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive energy solutions from planning to implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-lg border border-sage-medium/20 hover:shadow-[--shadow-soft] transition-all duration-300"
              >
                <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-sage-medium/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">MW Renewable Capacity</div>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Energy Projects</div>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-sage-medium to-sage-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with us to develop sustainable energy solutions that drive both environmental and economic value.
          </p>
          <Button size="lg" className="bg-white text-sage-dark hover:bg-white/90 px-8 py-6 text-lg">
            Discuss Your Energy Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Energy;