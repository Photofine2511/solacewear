import { useState } from "react";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { CartItem } from "@/types/product";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Leaf, Award } from "lucide-react";

const About = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in building a community of individuals who value comfort, quality, and conscious living."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every piece is crafted with care and attention to detail, ensuring you feel the love in every stitch."
    },
    {
      icon: Leaf,
      title: "Sustainable Choice",
      description: "We're committed to sustainable practices, using eco-friendly materials and ethical manufacturing."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We never compromise on quality, sourcing only the finest materials for lasting comfort and durability."
    }
  ];

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      return;
    }
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={totalCartItems} 
        onCartOpen={() => setIsCartOpen(true)} 
      />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Solacewear
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a simple belief that comfort shouldn't compromise style, 
            Solacewear creates premium clothing for the modern lifestyle.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, Solacewear emerged from a personal quest to find clothing 
                  that seamlessly blended comfort with contemporary style. Our founders, 
                  frustrated with the false choice between looking good and feeling comfortable, 
                  set out to create something better.
                </p>
                <p>
                  Today, we're proud to offer a carefully curated collection of premium 
                  comfort wear that doesn't sacrifice style for softness. Every piece is 
                  designed with the modern individual in mind – someone who values quality, 
                  comfort, and conscious consumption.
                </p>
                <p>
                  From our sustainable sourcing practices to our commitment to fair labor, 
                  Solacewear is more than just a clothing brand. We're a community of 
                  like-minded individuals who believe that what we wear should make us 
                  feel confident, comfortable, and connected to our values.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-full h-full">
              <img
                src="/src/assets/swaraj.jpg"
                alt="Solacewear Story"
                className="rounded-lg shadow-card max-w-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 transition-all duration-300 hover:shadow-card-hover animate-fade-in">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-muted rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To create thoughtfully designed, premium comfort wear that empowers 
              individuals to feel confident and comfortable in their daily lives, 
              while building a more sustainable and ethical fashion industry.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Solacewear's vision and mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & Creative Director",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b3c5?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Mike Chen",
                role: "Head of Sustainability",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Emily Rodriguez",
                role: "Design Lead",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center overflow-hidden transition-all duration-300 hover:shadow-card-hover animate-fade-in">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
      
      <CartDrawer
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
};

export default About;