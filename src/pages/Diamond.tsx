import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gem, Heart, Star, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import diamondSolitaire1 from '@/assets/diamond-solitaire-1.jpg';
import diamondTennisNecklace1 from '@/assets/diamond-tennis-necklace-1.jpg';
import diamondStuds1 from '@/assets/diamond-studs-1.jpg';
import diamondEternity1 from '@/assets/diamond-eternity-1.jpg';
import diamondPendant1 from '@/assets/diamond-pendant-1.jpg';
import diamondCocktail1 from '@/assets/diamond-cocktail-1.jpg';

const diamondProducts = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    price: "₹1,25,000",
    image: diamondSolitaire1,
    description: "Brilliant cut diamond solitaire in platinum setting"
  },
  {
    id: 2,
    name: "Diamond Tennis Necklace",
    price: "₹2,50,000",
    image: diamondTennisNecklace1,
    description: "Stunning tennis necklace with perfectly matched diamonds"
  },
  {
    id: 3,
    name: "Diamond Stud Earrings",
    price: "₹85,000",
    image: diamondStuds1,
    description: "Classic diamond studs in white gold"
  },
  {
    id: 4,
    name: "Diamond Eternity Band",
    price: "₹1,15,000",
    image: diamondEternity1,
    description: "Elegant eternity band with brilliant diamonds"
  },
  {
    id: 5,
    name: "Diamond Pendant Set",
    price: "₹95,000",
    image: diamondPendant1,
    description: "Exquisite pendant set with matching earrings"
  },
  {
    id: 6,
    name: "Diamond Cocktail Ring",
    price: "₹1,75,000",
    image: diamondCocktail1,
    description: "Statement cocktail ring with multiple diamonds"
  }
];

const Diamond = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
              <div className="p-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600">
                <Gem className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-6">
              Diamond Collection
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Experience the brilliance of our diamond collection. Each stone is carefully selected 
              for its exceptional cut, clarity, color, and carat weight to create truly magnificent pieces.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="p-3 rounded-full bg-blue-100 w-fit mx-auto mb-4">
                <Gem className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Certified Diamonds</h3>
              <p className="text-muted-foreground font-inter text-sm">GIA & IGI certified</p>
            </div>
            <div className="text-center">
              <div className="p-3 rounded-full bg-blue-100 w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Exceptional Cut</h3>
              <p className="text-muted-foreground font-inter text-sm">Maximum brilliance</p>
            </div>
            <div className="text-center">
              <div className="p-3 rounded-full bg-blue-100 w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-primary mb-2">Lifetime Value</h3>
              <p className="text-muted-foreground font-inter text-sm">Investment grade quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-4">
              Our Diamond Masterpieces
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Brilliance and beauty in every facet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {diamondProducts.map((product) => (
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
                      className="bg-gradient-to-r from-blue-400 to-indigo-600 hover:from-blue-500 hover:to-indigo-700 text-white"
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

export default Diamond;