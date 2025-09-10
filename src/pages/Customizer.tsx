import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Clock, Palette, Sparkles } from 'lucide-react';

const Customizer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={0} onCartOpen={() => {}} />
      
      <main className="flex items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Coming Soon Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-6">
              <Palette className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 font-heading">
            Coming Soon
          </h1>
          
          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4 font-primary">
            Stay Tuned!
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-manrope">
            We're working hard to bring you an amazing customization experience. 
            Soon you'll be able to design and personalize your perfect shirt with our advanced customizer.
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-primary">Custom Colors</h3>
              <p className="text-sm text-muted-foreground text-center font-manrope">
                Choose from a wide range of colors and patterns
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-primary">Personalization</h3>
              <p className="text-sm text-muted-foreground text-center font-manrope">
                Add your own designs and personal touches
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-primary">Real-time Preview</h3>
              <p className="text-sm text-muted-foreground text-center font-manrope">
                See your changes instantly as you design
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/shop')}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold font-primary"
            >
              Browse Our Shop
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
              className="px-8 py-3 font-semibold font-primary"
            >
              Back to Home
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 p-8 bg-card rounded-xl shadow-sm max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4 font-primary">
              Get Notified
            </h3>
            <p className="text-sm text-muted-foreground mb-4 font-manrope">
              Be the first to know when our customizer launches!
            </p>
            <Button 
              onClick={() => navigate('/#newsletter')}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold font-primary"
            >
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Customizer;