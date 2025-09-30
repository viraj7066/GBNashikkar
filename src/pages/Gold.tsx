import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Heart, Star, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import goldNecklace1 from '@/assets/gold-necklace-1.jpg';
import goldEarrings1 from '@/assets/gold-earrings-1.jpg';
import goldBangles1 from '@/assets/gold-bangles-1.jpg';
import goldRing1 from '@/assets/gold-ring-1.jpg';
import goldChain1 from '@/assets/gold-chain-1.jpg';
import goldPendant1 from '@/assets/gold-pendant-1.jpg';

const goldProducts = [
  {
    id: 1,
    name: "Royal Gold Necklace",
    price: "₹85,000",
    image: goldNecklace1,
    description: "Exquisite 22K gold necklace with traditional craftsmanship"
  },
  {
    id: 2,
    name: "Golden Elegance Earrings",
    price: "₹45,000",
    image: goldEarrings1,
    description: "Delicate gold earrings perfect for special occasions"
  },
  {
    id: 3,
    name: "Heritage Gold Bangles",
    price: "₹75,000",
    image: goldBangles1,
    description: "Traditional gold bangles with intricate patterns"
  },
  {
    id: 4,
    name: "Gold Statement Ring",
    price: "₹35,000",
    image: goldRing1,
    description: "Bold gold ring with contemporary design"
  },
  {
    id: 5,
    name: "Classic Gold Chain",
    price: "₹65,000",
    image: goldChain1,
    description: "Timeless gold chain for everyday elegance"
  },
  {
    id: 6,
    name: "Gold Pendant Set",
    price: "₹55,000",
    image: goldPendant1,
    description: "Beautiful pendant set in pure gold"
  }
];

const Gold = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-50">
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
              <div className="p-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600">
                <Crown className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Gold Collection
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Discover our exquisite range of gold jewellery, crafted with the finest 22K and 18K gold. 
              Each piece reflects our 140+ years of heritage in creating timeless treasures.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="p-3 rounded-full bg-yellow-100 w-fit mx-auto mb-4">
                <Crown className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Pure Gold</h3>
              <p className="text-muted-foreground font-inter text-sm">22K & 18K certified gold</p>
            </div>
            <div className="text-center">
              <div className="p-3 rounded-full bg-yellow-100 w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Handcrafted</h3>
              <p className="text-muted-foreground font-inter text-sm">Traditional craftsmanship</p>
            </div>
            <div className="text-center">
              <div className="p-3 rounded-full bg-yellow-100 w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Lifetime</h3>
              <p className="text-muted-foreground font-inter text-sm">Quality guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
              Our Gold Masterpieces
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Each piece tells a story of elegance and timeless beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {goldProducts.map((product) => (
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
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white"
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

export default Gold;