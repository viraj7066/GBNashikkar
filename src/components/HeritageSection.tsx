import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Award, Users, Heart } from 'lucide-react';

const HeritageSection = () => {
  const milestones = [
    {
      year: '1881',
      title: 'Founded',
      description: 'G. B. Nashikkar established as a trusted name in fine jewellery',
      icon: Crown
    },
    {
      year: '1920',
      title: 'Royal Recognition',
      description: 'Became official jeweller to royal families across India',
      icon: Award
    },
    {
      year: '1975',
      title: 'Three Generations',
      description: 'Celebrating nearly a century of family craftsmanship',
      icon: Users
    },
    {
      year: '2024',
      title: 'Legacy Continues',
      description: 'Over 140 years of creating timeless memories',
      icon: Heart
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            A Legacy of Excellence
          </h2>
          <p className="text-xl text-muted-foreground font-inter leading-relaxed">
            For over 140 years, G. B. Nashikkar has been synonymous with exceptional craftsmanship, 
            uncompromising quality, and timeless elegance. Our story spans generations of master 
            artisans who have dedicated their lives to creating jewelry that celebrates life's most precious moments.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <Card 
              key={milestone.year}
              className="text-center bg-card border-0 shadow-elegant hover-lift"
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-primary-soft">
                    <milestone.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-playfair font-bold text-primary mb-2">
                  {milestone.year}
                </h3>
                <h4 className="text-xl font-playfair font-semibold text-foreground mb-4">
                  {milestone.title}
                </h4>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {milestone.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-gradient-elegant rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Our Heritage Values
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-playfair font-semibold text-foreground mb-2">
                    Master Craftsmanship
                  </h4>
                  <p className="text-muted-foreground font-inter">
                    Every piece is meticulously handcrafted by our skilled artisans using traditional techniques passed down through generations.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-playfair font-semibold text-foreground mb-2">
                    Finest Materials
                  </h4>
                  <p className="text-muted-foreground font-inter">
                    We source only the highest quality diamonds, precious stones, and metals to ensure exceptional brilliance and durability.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-playfair font-semibold text-foreground mb-2">
                    Timeless Design
                  </h4>
                  <p className="text-muted-foreground font-inter">
                    Our designs blend classical elegance with contemporary sophistication, creating pieces that transcend time and trends.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="inline-block p-8 rounded-full bg-accent-soft mb-6">
                <Crown className="h-16 w-16 text-accent" />
              </div>
              <h4 className="text-2xl font-playfair font-semibold text-primary mb-4">
                "Crafting memories that last forever"
              </h4>
              <p className="text-muted-foreground font-inter mb-8">
                This has been our guiding principle since 1881, and continues to inspire every piece we create today.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-royal hover:opacity-90 text-white font-inter font-medium px-8 py-4 rounded-lg shadow-luxury hover-lift"
              >
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;