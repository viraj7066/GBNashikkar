import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Award, Users } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Store',
      description: 'Agra Road, Navnath Nager',
      details: 'Dhule, Maharashtra, India'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '+91 123 456 7890',
      details: 'Mon - Sat: 10:00 AM - 8:00 PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'info@gbnashikkar.com',
      details: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Monday - Saturday: 10:00 AM - 8:00 PM',
      details: 'Sunday: 11:00 AM - 6:00 PM'
    }
  ];

  const features = [
    {
      icon: Award,
      title: 'Expert Consultation',
      description: 'Get personalized advice from our master jewelers'
    },
    {
      icon: Users,
      title: 'Family Heritage',
      description: 'Four generations of trusted craftsmanship'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-royal text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                Visit G. B. Nashikkar
              </h1>
              <p className="text-xl font-inter leading-relaxed">
                A Legacy Since 1881 - Experience our heritage of excellence in person
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-0 shadow-elegant hover-lift text-center">
                  <CardContent className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 rounded-full bg-primary-soft">
                        <info.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-inter font-medium mb-2">
                      {info.description}
                    </p>
                    <p className="text-muted-foreground font-inter text-sm">
                      {info.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-card border-0 shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground font-inter mb-8 leading-relaxed">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-inter font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <Input 
                          placeholder="Enter your first name"
                          className="border-border focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-inter font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <Input 
                          placeholder="Enter your last name"
                          className="border-border focus:ring-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-inter font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email"
                        placeholder="Enter your email address"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-inter font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-inter font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell us about your requirements..."
                        rows={6}
                        className="border-border focus:ring-primary resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-royal hover:opacity-90 text-white font-inter font-medium py-3 rounded-lg shadow-luxury hover-lift"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map and Store Info */}
              <div className="space-y-8">
                {/* Google Maps */}
                <Card className="bg-card border-0 shadow-elegant overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4183.4241308388455!2d74.77426621128038!3d20.903182280634486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec57edea159bb%3A0x6f8b3148731f597b!2sG%20B%20Nashikkar%20Jewellers!5e1!3m2!1sen!2sin!4v1759132803354!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-64 md:h-80"
                  />
                  <div className="p-4 bg-card">
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                      Visit Our Store
                    </h3>
                    <p className="text-muted-foreground font-inter">
                      Agra Road, Navnath Nager, Dhule, Maharashtra
                    </p>
                  </div>
                </Card>

                {/* Store Features */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <Card key={index} className="bg-card border-0 shadow-elegant">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 p-3 rounded-full bg-accent-soft">
                            <feature.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h4 className="text-lg font-playfair font-semibold text-primary mb-2">
                              {feature.title}
                            </h4>
                            <p className="text-muted-foreground font-inter">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Visit Store CTA */}
                <Card className="bg-gradient-elegant border-0">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-4">
                      Visit Our Heritage Store
                    </h3>
                    <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                      Experience our collection in person and discover why families have trusted us for generations.
                    </p>
                    <Button 
                      size="lg"
                      className="bg-gradient-royal hover:opacity-90 text-white font-inter font-medium px-8 py-4 rounded-lg shadow-luxury hover-lift"
                    >
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;