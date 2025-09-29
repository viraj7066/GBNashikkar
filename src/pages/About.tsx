import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Award, Heart, Users, Gem, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Crown,
      title: 'Heritage Craftsmanship',
      description: 'Over 140 years of traditional jewelry making techniques passed down through generations of master artisans.'
    },
    {
      icon: Gem,
      title: 'Finest Materials',
      description: 'We source only the highest quality diamonds, precious stones, and metals from trusted suppliers worldwide.'
    },
    {
      icon: Heart,
      title: 'Emotional Connection',
      description: 'Every piece is crafted to celebrate life\'s most precious moments and create lasting memories.'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Our reputation built on honest practices, transparent pricing, and exceptional customer service.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to perfection in every detail, from design concept to final craftsmanship.'
    },
    {
      icon: Users,
      title: 'Family Legacy',
      description: 'A family business that values personal relationships and treats every customer as part of our extended family.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-elegant">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
                Since 1881
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-inter leading-relaxed mb-8">
                A Legacy of Craftsmanship and Timeless Elegance
              </p>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed max-w-3xl mx-auto">
                For over four generations, G. B. Nashikkar has been synonymous with exceptional quality, 
                exquisite design, and unparalleled craftsmanship in the world of fine jewelry. Our story 
                is one of passion, dedication, and an unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Our Heritage Story
              </h2>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                A journey through time, showcasing the milestones that have shaped our legacy of excellence.
              </p>
            </div>

            {/* Horizontal Timeline */}
            <div className="relative max-w-6xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-royal transform -translate-y-1/2 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* Timeline Item 1 */}
                <div className="group">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 bg-gradient-royal rounded-full flex items-center justify-center mb-6 transform transition-luxury group-hover:scale-110 z-10">
                      <span className="text-lg font-playfair font-bold text-white">1881</span>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-elegant border-2 border-transparent group-hover:border-primary transition-luxury">
                      <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                        The Beginning
                      </h3>
                      <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                        G. B. Nashikkar founded the company with a vision to create jewelry that would stand the test of time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="group">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mb-6 transform transition-luxury group-hover:scale-110 z-10">
                      <span className="text-lg font-playfair font-bold text-white">1920</span>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-elegant border-2 border-transparent group-hover:border-accent transition-luxury">
                      <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                        Royal Recognition
                      </h3>
                      <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                        Our exceptional craftsmanship caught the attention of Indian royalty, cementing our reputation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="group">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 bg-gradient-royal rounded-full flex items-center justify-center mb-6 transform transition-luxury group-hover:scale-110 z-10">
                      <span className="text-lg font-playfair font-bold text-white">1975</span>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-elegant border-2 border-transparent group-hover:border-primary transition-luxury">
                      <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                        Three Generations
                      </h3>
                      <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                        The third generation brought fresh perspectives while maintaining traditional craftsmanship.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="group">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mb-6 transform transition-luxury group-hover:scale-110 z-10">
                      <span className="text-lg font-playfair font-bold text-white">2024</span>
                    </div>
                    <div className="bg-card p-6 rounded-lg shadow-elegant border-2 border-transparent group-hover:border-accent transition-luxury">
                      <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                        Legacy Continues
                      </h3>
                      <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                        Today, we continue to honor our heritage while embracing innovation and modern design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-elegant">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Our Values & Commitment
              </h2>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                The principles that guide every decision we make and every piece we create.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-card border-0 shadow-elegant hover-lift">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-full bg-primary-soft">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Be Part of Our Story
              </h2>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-8">
                We invite you to become part of our continuing legacy. Let us create a piece that will be treasured 
                for generations to come, carrying forward the tradition of excellence that has defined G. B. Nashikkar since 1881.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-royal hover:opacity-90 text-white font-inter font-medium px-8 py-4 rounded-lg shadow-luxury hover-lift"
                >
                  Explore Collections
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium px-8 py-4 rounded-lg"
                >
                  Visit Our Store
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;