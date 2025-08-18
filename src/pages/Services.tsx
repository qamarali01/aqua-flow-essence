import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Droplets, Waves, Globe, Shield, FileText, ChevronDown, CheckCircle2, Users, Zap, Target } from "lucide-react";
import { useState } from "react";
import waterIcon from "@/assets/water-icon.png";

const Services = () => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  const businessAreas = [
    {
      title: "Integrated Water Resources Management",
      icon: <Droplets className="w-8 h-8" />,
      description: "Holistic approach to sustainable water resource planning and management",
      services: [
        "Water resource assessment and planning",
        "Watershed management strategies",
        "Water allocation optimization",
        "Stakeholder engagement and coordination"
      ],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Water Infrastructure", 
      icon: <Waves className="w-8 h-8" />,
      description: "End-to-end infrastructure development and management solutions",
      services: [
        "Engineering, procurement, and supervision of water infrastructure",
        "Infrastructure asset management",
        "Smart water system integration",
        "Maintenance and operation planning"
      ],
      color: "from-sage-medium/20 to-sage-light/20"
    },
    {
      title: "Transboundary Waters",
      icon: <Globe className="w-8 h-8" />,
      description: "Cross-border water cooperation and diplomatic solutions",
      services: [
        "International water law advisory",
        "Bilateral and multilateral negotiations",
        "Conflict resolution and mediation",
        "Regional cooperation frameworks"
      ],
      color: "from-accent/20 to-blue-400/20"
    },
    {
      title: "Water Sufficiency",
      icon: <Shield className="w-8 h-8" />,
      description: "Ensuring reliable water supply for all stakeholders",
      services: [
        "Water security assessments",
        "Demand forecasting and management",
        "Alternative water source development",
        "Emergency preparedness planning"
      ],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Climate Finance",
      icon: <FileText className="w-8 h-8" />,
      description: "Financing solutions for climate-resilient water projects",
      services: [
        "Climate impact assessments",
        "Green bond structuring",
        "Carbon credit development",
        "Adaptation funding strategies"
      ],
      color: "from-purple-500/20 to-indigo-500/20"
    }
  ];

  const additionalServices = [
    {
      category: "Technical Excellence",
      icon: <Zap className="w-6 h-6" />,
      items: [
        "Techno-Economic assessments and studies",
        "Environmental, Social, Health and Safety (ESHS) assessments",
        "Feasibility studies and due diligence"
      ]
    },
    {
      category: "Strategic Advisory",
      icon: <Target className="w-6 h-6" />,
      items: [
        "Policy and regulatory advisory services",
        "Capacity development and training",
        "Institutional strengthening"
      ]
    }
  ];

  const toggleSection = (index: number) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-sage-light via-sage-medium to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px] opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-[--shadow-soft] border border-white/30">
              <img src={waterIcon} alt="Water Services" className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Water Services
          </h1>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive water consulting solutions integrating sustainability, innovation, 
            and collaboration to ensure meaningful and responsible impact across all projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-[--shadow-elevated]"
            >
              Explore Our Solutions
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
            >
              Download Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Business Areas Section with Expandable Cards */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-sage-light/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-primary mb-8">Our Business Areas</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dive deep into our specialized expertise across key water management domains
            </p>
          </div>
          
          <div className="space-y-6">
            {businessAreas.map((area, index) => (
              <Collapsible 
                key={index}
                open={openSections[index]}
                onOpenChange={() => toggleSection(index)}
              >
                <div className={`bg-gradient-to-r ${area.color} rounded-2xl border border-white/20 shadow-[--shadow-soft] overflow-hidden transition-all duration-300 hover:shadow-[--shadow-elevated]`}>
                  <CollapsibleTrigger className="w-full p-8 text-left hover:bg-white/10 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                          <div className="text-primary">
                            {area.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            {area.title}
                          </h3>
                          <p className="text-muted-foreground text-lg">
                            {area.description}
                          </p>
                        </div>
                      </div>
                      <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${openSections[index] ? 'rotate-180' : ''}`} />
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="px-8 pb-8">
                      <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h4 className="text-lg font-semibold text-primary mb-4">Key Services:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {area.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Additional Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supporting services that enhance our core water management offerings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-[--shadow-soft] hover:shadow-[--shadow-elevated] transition-all duration-300 hover:-translate-y-2 border border-primary/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {service.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-sage-dark to-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-white/80">Countries Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-sage-light via-accent/20 to-sage-medium">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-primary mb-8">Ready to Start Your Water Project?</h2>
          <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
            Let's collaborate to create sustainable, impactful solutions for your water challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-sage-dark text-white px-10 py-6 text-xl font-semibold shadow-[--shadow-elevated]"
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-6 text-xl font-semibold"
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