import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import necklaceImage from '@/assets/necklace-featured.jpg';
import ringsImage from '@/assets/rings-featured.jpg';
import earringsImage from '@/assets/earrings-featured.jpg';

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      name: 'Royal Necklaces',
      description: 'Exquisite necklaces crafted with finest diamonds and precious stones',
      image: necklaceImage,
      count: '25+ Designs'
    },
    {
      id: 2,
      name: 'Heritage Rings',
      description: 'Timeless rings that symbolize eternal love and commitment',
      image: ringsImage,
      count: '40+ Designs'
    },
    {
      id: 3,
      name: 'Elegant Earrings',
      description: 'Beautiful earrings that add grace to every special moment',
      image: earringsImage,
      count: '30+ Designs'
    }
  ];

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Featured Collections
          </h2>
          <p className="text-lg text-muted-foreground font-inter leading-relaxed">
            Discover our most cherished pieces, each representing decades of master craftsmanship and the finest materials sourced from around the world.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card 
              key={collection.id}
              className="group bg-card border-0 shadow-elegant hover-lift overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-80 object-cover transition-luxury group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-luxury">
                  <p className="text-sm font-inter font-medium">{collection.count}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-semibold text-primary mb-3">
                  {collection.name}
                </h3>
                <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                  {collection.description}
                </p>
                <Link to="/collections">
                  <Button 
                    variant="outline" 
                    className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-luxury"
                  >
                    View Collection
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/collections">
            <Button 
              size="lg"
              className="bg-gradient-royal hover:opacity-90 text-white font-inter font-medium px-8 py-4 rounded-lg shadow-luxury hover-lift"
            >
              View All Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;