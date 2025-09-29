import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import image1 from '@/assets/1.png';
import image2 from '@/assets/2.png';
import image3 from '@/assets/3.png';
import image4 from '@/assets/4.png';
import image5 from '@/assets/5.png';
import image6 from '@/assets/6.png';

const InstagramFeed = () => {
  // Sample Instagram-style posts for the jewelry store
  const instagramPosts = [
    {
      id: 1,
      image: image1,
      caption: 'Timeless elegance in every piece ✨',
      likes: 145
    },
    {
      id: 2,
      image: image2,
      caption: 'Heritage craftsmanship since 1881 👑',
      likes: 189
    },
    {
      id: 3,
      image: image3,
      caption: 'Bridal collection perfection 💎',
      likes: 267
    },
    {
      id: 4,
      image: image4,
      caption: 'Traditional meets contemporary 🌟',
      likes: 156
    },
    {
      id: 5,
      image: image5,
      caption: 'Handcrafted with love and precision ❤️',
      likes: 203
    },
    {
      id: 6,
      image: image6,
      caption: 'Royal jewelry for special moments 👑',
      likes: 178
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-inter leading-relaxed mb-6">
            Stay connected with G. B. Nashikkar and discover our latest collections, behind-the-scenes craftsmanship, and customer stories.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-royal hover:opacity-90 text-white font-inter font-medium px-8 py-4 rounded-lg shadow-luxury hover-lift"
            onClick={() => window.open('https://www.instagram.com/gbnashikkar5', '_blank')}
          >
            @gbnashikkar5
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {instagramPosts.map((post) => (
            <div 
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onClick={() => window.open('https://www.instagram.com/gbnashikkar5', '_blank')}
            >
              <img 
                src={post.image} 
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-elegant flex items-center justify-center">
                <div className="text-white text-center">
                  <Instagram className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-inter">View Post</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground font-inter mb-4">
            Follow us on Instagram for daily inspiration and exclusive content
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-inter font-medium px-8 py-4 rounded-lg"
            onClick={() => window.open('https://www.instagram.com/gbnashikkar5', '_blank')}
          >
            Visit Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;