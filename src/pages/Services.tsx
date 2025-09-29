import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Gem, Wrench, Search, Palette, Shield, Clock, Star, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Custom Design",
      description: "Create unique pieces that reflect your personal style and vision",
      features: ["Personal consultation", "3D design preview", "Unlimited revisions", "Expert craftsmanship"],
      price: "Starting from ₹25,000",
      duration: "2-4 weeks",
      highlight: "Most Popular"
    },
    {
      icon: Gem,
      title: "Jewelry Appraisal",
      description: "Professional valuation services for insurance and resale purposes",
      features: ["Certified appraisal", "Market value assessment", "Insurance documentation", "Expert analysis"],
      price: "₹2,500 per piece",
      duration: "3-5 days",
      highlight: ""
    },
    {
      icon: Wrench,
      title: "Repair & Restoration",
      description: "Restore your precious jewelry to its original beauty",
      features: ["Free assessment", "Original techniques", "Quality guarantee", "Heritage preservation"],
      price: "Quote on assessment",
      duration: "1-3 weeks",
      highlight: "Heritage Specialist"
    },
    {
      icon: Search,
      title: "Engraving Services",
      description: "Personalize your jewelry with custom engravings",
      features: ["Hand engraving", "Laser precision", "Multiple fonts", "Symbol options"],
      price: "₹500 - ₹5,000",
      duration: "Same day",
      highlight: ""
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We discuss your vision, requirements, and preferences in detail"
    },
    {
      step: "02", 
      title: "Design",
      description: "Our artisans create detailed sketches and 3D models for your approval"
    },
    {
      step: "03",
      title: "Crafting",
      description: "Master craftsmen bring your design to life using traditional techniques"
    },
    {
      step: "04",
      title: "Quality Check",
      description: "Every piece undergoes rigorous quality control and final polishing"
    },
    {
      step: "05",
      title: "Delivery",
      description: "Your finished jewelry is presented in our signature packaging"
    }
  ];

  const warranties = [
    {
      question: "What does the lifetime warranty cover?",
      answer: "Our lifetime warranty covers manufacturing defects, structural integrity, and craftsmanship issues. This includes repairs for setting looseness, prong retipping, and rhodium replating for white gold pieces."
    },
    {
      question: "How long does custom design take?",
      answer: "Custom design typically takes 2-4 weeks depending on complexity. This includes consultation, design approval, crafting, and quality control. Rush orders are available for an additional fee."
    },
    {
      question: "Do you work with my existing jewelry?",
      answer: "Yes, we can redesign, restore, or repurpose your existing jewelry. Whether it's a family heirloom or a piece you want to update, our craftsmen can transform it while preserving its sentimental value."
    },
    {
      question: "What are your payment options?",
      answer: "We accept cash, cards, and offer flexible payment plans for larger purchases. For custom designs, we typically require 50% advance with the remainder due upon completion."
    },
    {
      question: "Can I see my design before it's made?",
      answer: "Absolutely! We provide detailed sketches and 3D renderings for approval before beginning the crafting process. You can request modifications until you're completely satisfied."
    }
  ];

  const careSteps = [
    {
      icon: Shield,
      title: "Storage",
      description: "Store jewelry in soft pouches or lined boxes to prevent scratching"
    },
    {
      icon: Clock,
      title: "Cleaning",
      description: "Clean gently with warm soapy water and a soft brush monthly"
    },
    {
      icon: Star,
      title: "Professional Care",
      description: "Bring for professional cleaning and inspection every 6 months"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in">
            Expert Jewelry Services
          </h1>
          <p className="text-xl md:text-2xl font-inter mb-8 text-primary-foreground/90 animate-fade-in animation-delay-200">
            From custom design to restoration - craftsmanship you can trust since 1881
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="font-inter font-semibold animate-fade-in animation-delay-400"
          >
            Schedule Consultation
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
              Experience unparalleled craftsmanship and personalized service that has made us 
              a trusted name for over 140 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-luxury border-2 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="relative">
                  {service.highlight && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      {service.highlight}
                    </Badge>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-playfair text-xl">{service.title}</CardTitle>
                      <CardDescription className="font-inter">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm font-inter">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <div>
                        <p className="font-semibold text-primary">{service.price}</p>
                        <p className="text-sm text-muted-foreground">{service.duration}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
              Our Crafting Process
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Every piece undergoes our meticulous 5-step process, ensuring excellence at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-playfair font-bold text-lg mx-auto mb-4 shadow-elegant">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20"></div>
                  )}
                </div>
                <h3 className="font-playfair font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground font-inter text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jewelry Care */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
              Jewelry Care Guide
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Preserve the beauty and longevity of your precious jewelry with proper care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {careSteps.map((step, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-elegant transition-luxury animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-playfair text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-inter">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Download Full Care Guide
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground font-inter">
                Everything you need to know about our services and warranty
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {warranties.map((item, index) => (
                <AccordionItem 
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg px-6 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="font-playfair font-semibold text-left hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-inter text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-xl mb-8 text-white/90 font-inter">
              Let our master craftsmen bring your vision to life with 140+ years of expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-inter font-semibold">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-inter font-semibold">
                Call Now: +91 123 456 7890
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;