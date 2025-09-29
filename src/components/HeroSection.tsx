import { Button } from '@/components/ui/button';
import { ArrowRight, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-jewellery.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: 'translateZ(0)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-fade-in">
          {/* Crown Icon */}
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-accent/20 backdrop-blur-sm">
              <Crown className="h-12 w-12 text-accent" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight">
            G. B. Nashikkar
            <span className="block text-2xl md:text-3xl lg:text-4xl text-accent font-light mt-2">
              Since 1881
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 font-inter font-light max-w-2xl mx-auto">
            Crafting Elegance for Generations
          </p>
          
          {/* Description */}
          <p className="text-lg text-white/80 font-inter max-w-3xl mx-auto leading-relaxed">
            Experience the legacy of exquisite craftsmanship and timeless elegance that has defined luxury jewellery for over 140 years. Each piece tells a story of heritage, artistry, and royal sophistication.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/collections">
              <Button
                size="lg"
                className="bg-gradient-royal hover:opacity-90 text-white font-inter font-medium px-8 py-4 rounded-lg shadow-luxury hover-lift group"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-purple-600 hover:bg-white hover:text-purple-700 font-inter font-medium px-8 py-4 rounded-lg backdrop-blur-sm"
              >
                Our Heritage Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;