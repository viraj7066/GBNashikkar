import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Bride",
      text: "The craftsmanship is absolutely stunning. My wedding jewelry from G. B. Nashikkar became the centerpiece of my special day.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b787?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rajesh Patel",
      role: "Businessman", 
      text: "Exceptional quality and heritage. I've been a loyal customer for over 15 years and they never disappoint.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anita Singh",
      role: "Designer",
      text: "The attention to detail and traditional techniques make every piece a work of art. Truly a legacy brand.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Vikram Joshi",
      role: "Collector",
      text: "G. B. Nashikkar represents the finest in Indian jewelry craftsmanship. Each piece tells a story of excellence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Meera Gupta",
      role: "Fashion Enthusiast",
      text: "The heritage and modern elegance blend perfectly in their collections. Simply extraordinary jewelry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Arjun Kapoor",
      role: "Entrepreneur",
      text: "Outstanding service and timeless designs. G. B. Nashikkar is my go-to for special occasions.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Kavya Reddy",
      role: "Jewelry Lover",
      text: "Every piece I own from G. B. Nashikkar has become a treasured heirloom. Unmatched quality and beauty.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Amit Verma",
      role: "Groom",
      text: "The wedding collection exceeded all expectations. Perfect craftsmanship for our special day.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Deepika Jain",
      role: "Architect",
      text: "The intricate designs and flawless execution showcase true artistry. G. B. Nashikkar is exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rohit Kumar",
      role: "Investment Banker",
      text: "Investment-grade jewelry with timeless appeal. Every purchase has been a wise decision.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sunita Agarwal",
      role: "Teacher",
      text: "The family tradition continues with G. B. Nashikkar. Three generations of beautiful jewelry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Karan Malhotra",
      role: "Doctor",
      text: "Precision and perfection in every detail. G. B. Nashikkar sets the standard for luxury jewelry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Split testimonials into three columns (4 testimonials each)
  const column1 = testimonials.slice(0, 4);
  const column2 = testimonials.slice(4, 8);
  const column3 = testimonials.slice(8, 12);

  const TestimonialCard = ({ testimonial, index }: { testimonial: any, index: number }) => (
    <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-elegant hover-lift flex-shrink-0 mb-4 md:mb-6 mx-2 w-full max-w-sm md:max-w-none md:mx-2">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center space-x-1 mb-3 md:mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-accent text-accent" />
          ))}
        </div>
        <p className="text-muted-foreground font-inter leading-relaxed mb-4 md:mb-6 text-sm md:text-sm">
          "{testimonial.text}"
        </p>
        <div className="flex items-center space-x-3">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-accent/20"
          />
          <div>
            <h4 className="font-playfair font-semibold text-primary text-sm">
              {testimonial.name}
            </h4>
            <p className="text-xs text-muted-foreground font-inter">
              {testimonial.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground font-inter leading-relaxed">
            Discover why families have trusted G. B. Nashikkar for generations
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Top blur overlay */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Bottom blur overlay */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none"></div>

          {/* Mobile Single Column Layout */}
          <div className="block md:hidden">
            <div className="relative h-[500px] overflow-hidden">
              <div className="animate-scroll-up-mobile">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <TestimonialCard key={`mobile-${index}`} testimonial={testimonial} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Three Columns Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] overflow-hidden">
            
            {/* Column 1 - Slides Up */}
            <div className="relative h-full overflow-hidden">
              <div className="animate-scroll-up">
                {[...column1, ...column1, ...column1].map((testimonial, index) => (
                  <TestimonialCard key={`col1-${index}`} testimonial={testimonial} index={index} />
                ))}
              </div>
            </div>

            {/* Column 2 - Slides Down */}
            <div className="relative h-full overflow-hidden">
              <div className="animate-scroll-down">
                {[...column2, ...column2, ...column2].map((testimonial, index) => (
                  <TestimonialCard key={`col2-${index}`} testimonial={testimonial} index={index} />
                ))}
              </div>
            </div>

            {/* Column 3 - Slides Up (with delay) - Hidden on medium screens, visible on large */}
            <div className="relative h-full overflow-hidden hidden lg:block">
              <div className="animate-scroll-up-delayed">
                {[...column3, ...column3, ...column3].map((testimonial, index) => (
                  <TestimonialCard key={`col3-${index}`} testimonial={testimonial} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-33.333%);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes scroll-up-mobile {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-up {
          animation: scroll-up 30s linear infinite;
          display: flex;
          flex-direction: column;
        }

        .animate-scroll-down {
          animation: scroll-down 35s linear infinite;
          display: flex;
          flex-direction: column;
        }

        .animate-scroll-up-delayed {
          animation: scroll-up 32s linear infinite;
          animation-delay: -8s;
          display: flex;
          flex-direction: column;
        }

        .animate-scroll-up-mobile {
          animation: scroll-up-mobile 25s linear infinite;
          display: flex;
          flex-direction: column;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          transition: transform 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;