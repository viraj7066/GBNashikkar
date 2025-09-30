import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Circle, Heart, Star, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import silverNecklace1 from '@/assets/silver-necklace-1.jpg';
import silverEarrings1 from '@/assets/silver-earrings-1.jpg';
import silverBangles1 from '@/assets/silver-bangles-1.jpg';
import silverRing1 from '@/assets/silver-ring-1.jpg';
import silverChain1 from '@/assets/silver-chain-1.jpg';
import silverPendant1 from '@/assets/silver-pendant-1.jpg';

const silverProducts = [
  {
    id: 1,
    name: "Modern Silver Necklace",
    price: "₹25,000",
    image: silverNecklace1,
    description: "Contemporary silver necklace with minimalist design"
  },
  {
    id: 2,
    name: "Silver Drop Earrings",
    price: "₹15,000",
    image: silverEarrings1,
    description: "Elegant drop earrings in pure silver"
  },
  {
    id: 3,
    name: "Silver Cuff Bracelet",
    price: "₹18,000",
    image: silverBangles1,
    description: "Bold cuff bracelet with contemporary styling"
  },
  {
    id: 4,
    name: "Silver Statement Ring",
    price: "₹12,000",
    image: silverRing1,
    description: "Modern ring design in sterling silver"
  },
  {
    id: 5,
    name: "Silver Chain Set",
    price: "₹22,000",
    image: silverChain1,
    description: "Layered chain set for modern styling"
  },
  {
    id: 6,
    name: "Silver Pendant Collection",
    price: "₹16,000",
    image: silverPendant1,
    description: "Versatile pendant collection in silver"
  }
];

const Silver = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-8 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-gray-400 to-gray-600">
                <Circle className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Silver Collection
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Embrace modern sophistication with our sterling silver collection. 
              Each piece combines contemporary design with traditional craftsmanship for the modern connoisseur.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="p-3 rounded-full bg-gray-100 w-fit mx-auto mb-4">
                <Circle className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Sterling Silver</h3>
              <p className="text-muted-foreground font-inter text-sm">925 certified silver</p>
            </div>
            <div className="text-center">
              <div className="p-3 rounded-full bg-gray-100 w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Modern Design</h3>
              <p className="text-muted-foreground font-inter text-sm">Contemporary aesthetics</p>
            </div>
            <div className="text-center">
              <div className="p-3 rounded-full bg-gray-100 w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Versatile</h3>
              <p className="text-muted-foreground font-inter text-sm">Perfect for any occasion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
              Our Silver Masterpieces
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Modern elegance meets timeless sophistication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {silverProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-accent/20 hover:border-accent/40 transition-all duration-300 hover-scale">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground font-inter text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-playfair font-bold text-accent">
                      {product.price}
                    </span>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Silver;