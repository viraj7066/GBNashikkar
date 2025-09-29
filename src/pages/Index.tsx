import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedCollections from '@/components/FeaturedCollections';
import HeritageSection from '@/components/HeritageSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCollections />
        <HeritageSection />
        <TestimonialsSection />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
