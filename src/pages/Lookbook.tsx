import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Heart } from 'lucide-react';
import model1 from '@/assets/model-1.jpg';
import model2 from '@/assets/model-2.jpg';
import model3 from '@/assets/model-3.jpg';

const Lookbook = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const photoshoots = [
    {
      id: 1,
      title: "Royal Heritage Collection",
      category: "heritage",
      image: model1,
      description: "Timeless pieces reflecting our legacy since 1881",
      year: "2024"
    },
    {
      id: 2,
      title: "Bridal Elegance",
      category: "wedding",
      image: model2,
      description: "Perfect for your special day",
      year: "2024"
    },
    {
      id: 3,
      title: "Contemporary Classics",
      category: "modern",
      image: model3,
      description: "Modern designs with traditional craftsmanship",
      year: "2024"
    },
    {
      id: 4,
      title: "Festive Grandeur",
      category: "festive",
      image: model1,
      description: "Celebrate with our exquisite collection",
      year: "2024"
    },
    {
      id: 5,
      title: "Heritage Necklaces",
      category: "heritage",
      image: model2,
      description: "Generational trust in every piece",
      year: "2024"
    },
    {
      id: 6,
      title: "Diamond Dreams",
      category: "modern",
      image: model3,
      description: "Sparkling memories to last forever",
      year: "2024"
    }
  ];

  const seasonalCollections = [
    {
      title: "Wedding Season",
      image: model1,
      description: "Bridal jewelry for your perfect day",
      items: "24 pieces"
    },
    {
      title: "Festive Collection",
      image: model2, 
      description: "Traditional designs for celebrations",
      items: "18 pieces"
    },
    {
      title: "Contemporary Elegance",
      image: model3,
      description: "Modern styles for everyday luxury",
      items: "32 pieces"
    },
    {
      title: "Heritage Revival",
      image: model1,
      description: "Classic designs from our archives",
      items: "15 pieces"
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'heritage', name: 'Heritage' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'festive', name: 'Festive' },
    { id: 'modern', name: 'Modern' }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photoshoots 
    : photoshoots.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-luxury text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in">
            Lookbook & Inspirations
          </h1>
          <p className="text-xl md:text-2xl font-inter mb-8 text-white/90 animate-fade-in animation-delay-200">
            Discover timeless elegance through our curated collections
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-semibold animate-fade-in animation-delay-400"
          >
            Explore Collections
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Heritage Showcase */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
              Heritage Since 1881
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
              Over 140 years of craftsmanship, trust, and timeless elegance. Each piece reflects 
              our commitment to generational excellence and artistic mastery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-playfair font-bold text-accent mb-4">140+</div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Years of Legacy</h3>
              <p className="text-muted-foreground font-inter">Crafting excellence since 1881</p>
            </div>
            <div className="text-center animate-fade-in animation-delay-200">
              <div className="text-4xl font-playfair font-bold text-accent mb-4">5000+</div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Happy Families</h3>
              <p className="text-muted-foreground font-inter">Trusted by generations</p>
            </div>
            <div className="text-center animate-fade-in animation-delay-400">
              <div className="text-4xl font-playfair font-bold text-accent mb-4">∞</div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Timeless Beauty</h3>
              <p className="text-muted-foreground font-inter">Designs that never fade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Styled Photoshoots */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
              Styled Photoshoots
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Immerse yourself in the beauty of our jewelry through artistic photography
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 p-2 bg-secondary/20 rounded-full">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-inter font-medium transition-elegant ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-elegant'
                      : 'text-muted-foreground hover:text-primary hover:bg-background'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredPhotos.map((photo, index) => (
              <div 
                key={photo.id}
                className="break-inside-avoid bg-card rounded-lg overflow-hidden shadow-luxury hover:shadow-elegant transition-luxury group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{photo.year}</span>
                    </div>
                    <h3 className="font-playfair font-semibold text-lg mb-1">{photo.title}</h3>
                    <p className="text-sm text-white/90">{photo.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair font-semibold text-lg mb-2 text-primary">{photo.title}</h3>
                  <p className="text-muted-foreground font-inter text-sm mb-4">{photo.description}</p>
                  <Button variant="ghost" size="sm" className="group/btn">
                    View Gallery
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Inspirations */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
              Seasonal Inspirations
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Discover our collections designed for every season and celebration
            </p>
          </div>

          {/* Horizontal Scroll */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
              {seasonalCollections.map((collection, index) => (
                <div 
                  key={index}
                  className="flex-none w-80 bg-card rounded-lg overflow-hidden shadow-luxury hover:shadow-elegant transition-luxury group snap-start animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={collection.image} 
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30 text-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair font-semibold text-xl mb-2 text-primary">{collection.title}</h3>
                    <p className="text-muted-foreground font-inter mb-4">{collection.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-accent font-inter font-medium">{collection.items}</span>
                      <Button variant="outline" size="sm">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lookbook;