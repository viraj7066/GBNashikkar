import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, ShoppingCart, Eye, Filter, Grid, List, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import necklaceImage from '@/assets/necklace-featured.jpg';
import ringsImage from '@/assets/rings-featured.jpg';
import earringsImage from '@/assets/earrings-featured.jpg';

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: "Heritage Diamond Necklace",
      category: "necklaces",
      price: 250000,
      originalPrice: 300000,
      priceDisplay: "₹2,50,000",
      originalPriceDisplay: "₹3,00,000",
      image: necklaceImage,
      badge: "Heritage",
      rating: 4.9,
      reviews: 45,
      material: "gold",
      collection: "heritage"
    },
    {
      id: 2,
      name: "Royal Emerald Ring",
      category: "rings", 
      price: 120000,
      priceDisplay: "₹1,20,000",
      image: ringsImage,
      badge: "New",
      rating: 4.8,
      reviews: 32,
      material: "gold",
      collection: "royal"
    },
    {
      id: 3,
      name: "Classic Pearl Earrings",
      category: "earrings",
      price: 45000,
      originalPrice: 55000,
      priceDisplay: "₹45,000",
      originalPriceDisplay: "₹55,000",
      image: earringsImage,
      badge: "Sale",
      rating: 4.7,
      reviews: 67,
      material: "silver",
      collection: "classic"
    },
    {
      id: 4,
      name: "Vintage Gold Bracelet",
      category: "bracelets",
      price: 85000,
      priceDisplay: "₹85,000",
      image: "/api/placeholder/400/400",
      badge: "Limited",
      rating: 4.9,
      reviews: 23,
      material: "gold",
      collection: "vintage"
    },
    {
      id: 5,
      name: "Contemporary Diamond Ring",
      category: "rings",
      price: 350000,
      priceDisplay: "₹3,50,000",
      image: ringsImage,
      badge: "Exclusive",
      rating: 5.0,
      reviews: 12,
      material: "platinum",
      collection: "contemporary"
    },
    {
      id: 6,
      name: "Traditional Gold Necklace",
      category: "necklaces",
      price: 175000,
      originalPrice: 200000,
      priceDisplay: "₹1,75,000",
      originalPriceDisplay: "₹2,00,000",
      image: necklaceImage,
      badge: "Heritage",
      rating: 4.8,
      reviews: 89,
      material: "gold",
      collection: "traditional"
    },
    {
      id: 7,
      name: "Sapphire Tennis Bracelet",
      category: "bracelets",
      price: 180000,
      priceDisplay: "₹1,80,000",
      image: "/api/placeholder/400/400",
      badge: "New",
      rating: 4.9,
      reviews: 15,
      material: "white-gold",
      collection: "contemporary"
    },
    {
      id: 8,
      name: "Antique Ruby Earrings",
      category: "earrings",
      price: 95000,
      priceDisplay: "₹95,000",
      image: earringsImage,
      badge: "Heritage",
      rating: 4.8,
      reviews: 34,
      material: "gold",
      collection: "antique"
    },
    {
      id: 9,
      name: "Diamond Statement Necklace",
      category: "necklaces",
      price: 450000,
      priceDisplay: "₹4,50,000",
      image: necklaceImage,
      badge: "Exclusive",
      rating: 5.0,
      reviews: 8,
      material: "platinum",
      collection: "luxury"
    },
    {
      id: 10,
      name: "Gold Charm Bracelet",
      category: "bracelets",
      price: 65000,
      priceDisplay: "₹65,000",
      image: "/api/placeholder/400/400",
      badge: "New",
      rating: 4.7,
      reviews: 28,
      material: "gold",
      collection: "contemporary"
    },
    {
      id: 11,
      name: "Emerald Drop Earrings",
      category: "earrings",
      price: 125000,
      originalPrice: 145000,
      priceDisplay: "₹1,25,000",
      originalPriceDisplay: "₹1,45,000",
      image: earringsImage,
      badge: "Sale",
      rating: 4.9,
      reviews: 19,
      material: "white-gold",
      collection: "classic"
    },
    {
      id: 12,
      name: "Vintage Pearl Ring",
      category: "rings",
      price: 78000,
      priceDisplay: "₹78,000",
      image: ringsImage,
      badge: "Heritage",
      rating: 4.6,
      reviews: 41,
      material: "gold",
      collection: "vintage"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Collections', count: products.length },
    { id: 'necklaces', name: 'Necklaces', count: products.filter(p => p.category === 'necklaces').length },
    { id: 'rings', name: 'Rings', count: products.filter(p => p.category === 'rings').length },
    { id: 'earrings', name: 'Earrings', count: products.filter(p => p.category === 'earrings').length },
    { id: 'bracelets', name: 'Bracelets', count: products.filter(p => p.category === 'bracelets').length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under-50k', name: 'Under ₹50,000' },
    { id: '50k-100k', name: '₹50,000 - ₹1,00,000' },
    { id: '100k-200k', name: '₹1,00,000 - ₹2,00,000' },
    { id: 'above-200k', name: 'Above ₹2,00,000' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'newest', name: 'Newest First' }
  ];

  // Filter products
  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }

    // Price range filter
    if (priceRange !== 'all') {
      const price = product.price;
      switch (priceRange) {
        case 'under-50k':
          if (price >= 50000) return false;
          break;
        case '50k-100k':
          if (price < 50000 || price >= 100000) return false;
          break;
        case '100k-200k':
          if (price < 100000 || price >= 200000) return false;
          break;
        case 'above-200k':
          if (price < 200000) return false;
          break;
      }
    }

    // Search filter
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-elegant">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 animate-fade-in">
                Our Collections
              </h1>
              <p className="text-lg text-muted-foreground font-inter leading-relaxed animate-fade-in animation-delay-200">
                Discover our exquisite range of handcrafted jewelry, each piece representing 
                the finest in traditional craftsmanship and contemporary design.
              </p>
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter and Search Bar */}
            <div className="flex flex-col lg:flex-row gap-6 mb-12 p-6 bg-secondary/30 rounded-lg animate-fade-in">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search jewelry..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 font-inter"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-2">
                <h3 className="font-playfair font-semibold mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      className="font-inter transition-elegant"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name} ({category.count})
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Price and Sort Controls */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <label className="text-sm font-medium font-inter mb-2 block">Price Range</label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger className="w-full sm:w-48 font-inter">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {priceRanges.map((range) => (
                        <SelectItem key={range.id} value={range.id} className="font-inter">
                          {range.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium font-inter mb-2 block">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full sm:w-48 font-inter">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.id} value={option.id} className="font-inter">
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium font-inter mb-2 block">View</label>
                  <div className="flex gap-2">
                    <Button 
                      variant={viewMode === 'grid' ? "default" : "outline"} 
                      size="icon"
                      onClick={() => setViewMode('grid')}
                      className="transition-elegant"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant={viewMode === 'list' ? "default" : "outline"} 
                      size="icon"
                      onClick={() => setViewMode('list')}
                      className="transition-elegant"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-muted-foreground font-inter">
                Showing {sortedProducts.length} of {products.length} products
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product, index) => (
                <Card 
                  key={product.id}
                  className={`group overflow-hidden hover:shadow-elegant transition-luxury animate-fade-in ${
                    viewMode === 'list' ? 'flex flex-row' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'
                  }`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                          <Eye className="h-4 w-4 mr-1" />
                          Quick View
                        </Button>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge 
                        className={`${
                          product.badge === 'Heritage' ? 'bg-accent' :
                          product.badge === 'New' ? 'bg-green-500' :
                          product.badge === 'Sale' ? 'bg-red-500' :
                          'bg-primary'
                        } text-white`}
                      >
                        {product.badge}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <CardContent className={`${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''} p-6`}>
                    <div>
                      <h3 className="font-playfair font-semibold text-lg mb-2 text-primary group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground font-inter">({product.reviews})</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-semibold text-primary font-inter">{product.priceDisplay}</span>
                          {product.originalPriceDisplay && (
                            <span className="text-sm text-muted-foreground line-through font-inter">{product.originalPriceDisplay}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-inter transition-elegant">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">No products found</h3>
                <p className="text-muted-foreground font-inter mb-6">
                  Try adjusting your filters or search terms
                </p>
                <Button onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange('all');
                  setSearchQuery('');
                }}>
                  Clear All Filters
                </Button>
              </div>
            )}
            
            {/* Load More */}
            {sortedProducts.length > 0 && (
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="font-inter font-medium transition-elegant">
                  Load More Products ({products.length - sortedProducts.length} more)
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-elegant">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
                Stay Updated
              </h2>
              <p className="text-lg text-muted-foreground font-inter mb-8 leading-relaxed">
                Be the first to know about new collections, exclusive designs, and special events.
              </p>
              <Button 
                size="lg"
                className="bg-gradient-royal hover:opacity-90 text-white font-inter font-medium px-8 py-4 rounded-lg shadow-luxury hover-lift"
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;