import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import goldBangleImage from '@/assets/gold-bangle.jpg';
import silverRingImage from '@/assets/silver-ring.jpg';
import diamondEarringImage from '@/assets/diamond-earring.jpg';

const categories = [
  {
    id: 'gold',
    name: 'Gold',
    image: goldBangleImage,
    gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
    description: 'Timeless elegance in pure gold',
    route: '/gold'
  },
  {
    id: 'silver',
    name: 'Silver',
    image: silverRingImage,
    gradient: 'from-gray-300 via-gray-400 to-gray-500',
    description: 'Modern sophistication in silver',
    route: '/silver'
  },
  {
    id: 'diamond',
    name: 'Diamond',
    image: diamondEarringImage,
    gradient: 'from-blue-300 via-white to-blue-100',
    description: 'Brilliant luxury in diamonds',
    route: '/diamond'
  }
];

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
            Choose Your Collection
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            Discover our exquisite range of handcrafted jewellery in precious metals and gems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {categories.map((category) => {
            return (
              <div key={category.id} className="group relative">
                <div className="relative overflow-hidden rounded-full aspect-square w-48 h-48 mx-auto cursor-pointer hover-scale"
                     onClick={() => handleCategoryClick(category.route)}>
                  {/* Jewelry Image */}
                  <img 
                    src={category.image} 
                    alt={`${category.name} jewelry`}
                    className="absolute inset-0 w-full h-full object-cover rounded-full"
                  />
                  
                  {/* Elegant Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-60 rounded-full`} />
                  
                  {/* Royal Border */}
                  <div className="absolute inset-0 rounded-full border-3 border-accent/40 group-hover:border-accent/80 transition-all duration-300" />
                  
                  {/* Inner Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-xl font-playfair font-bold text-white mb-1 drop-shadow-lg">
                      {category.name}
                    </h3>
                    <p className="text-white/95 font-inter text-xs drop-shadow-md">
                      {category.description}
                    </p>
                  </div>

                  {/* Luxury Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Category Button */}
                <div className="mt-4 text-center">
                  <Button
                    onClick={() => handleCategoryClick(category.route)}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white font-inter font-medium px-6 py-2 rounded-lg backdrop-blur-sm transition-all duration-300"
                  >
                    Explore {category.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 rounded-full bg-accent/30"></div>
            <div className="w-3 h-3 rounded-full bg-accent/50"></div>
            <div className="w-2 h-2 rounded-full bg-accent/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySelection;