import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { CartItem } from "@/types/product";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Leaf, Award, Quote, Sparkles, Minus } from "lucide-react";

const About = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in building a community of individuals who value comfort, quality, and conscious living.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every piece is crafted with care and attention to detail, ensuring you feel the love in every stitch.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Leaf,
      title: "Sustainable Choice",
      description: "We're committed to sustainable practices, using eco-friendly materials and ethical manufacturing.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We never compromise on quality, sourcing only the finest materials for lasting comfort and durability.",
      color: "from-yellow-500 to-yellow-600"
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

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header 
        cartItemsCount={totalCartItems} 
        onCartOpen={() => setIsCartOpen(true)} 
      />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Hero Section */}
        <section className="relative text-center mb-20 fade-in-section">
          {/* Background gradient and texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl -z-10"></div>
          <div className="absolute inset-0 opacity-50 -z-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23004225%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          
          <div className="relative z-10 py-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-heading">
                About Solacewear
              </h1>
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-primary">
              Born from a simple belief that comfort shouldn't compromise style, 
              Solacewear creates premium clothing for the modern lifestyle.
            </p>
          </div>
        </section>

        {/* Enhanced Story Section */}
        <section className="mb-20 fade-in-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-heading text-primary font-heading">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="font-primary">
                  Founded in 2020, Solacewear emerged from a personal quest to find clothing 
                  that seamlessly blended comfort with contemporary style. Our founders, 
                  frustrated with the false choice between looking good and feeling comfortable, 
                  set out to create something better.
                </p>
                
                {/* Pull quote */}
                <blockquote className="relative pl-8 border-l-4 border-primary/30 italic text-xl text-primary/80 font-medium">
                  <Quote className="absolute -left-2 top-0 w-4 h-4 text-primary" />
                  "We believe that what you wear should make you feel confident, comfortable, and connected to your values."
                </blockquote>
                
                <p className="font-primary">
                  Today, we're proud to offer a carefully curated collection of premium 
                  comfort wear that doesn't sacrifice style for softness. Every piece is 
                  designed with the modern individual in mind – someone who values quality, 
                  comfort, and conscious consumption.
                </p>
                
                <p className="font-primary">
                  From our sustainable sourcing practices to our commitment to fair labor, 
                  Solacewear is more than just a clothing brand. We're a community of 
                  like-minded individuals who believe that what we wear should make us 
                  feel confident, comfortable, and connected to our values.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105">
                <img
                  src="https://i.ibb.co/n8fGZsCB/swaraj.jpg"
                  alt="Solacewear Story"
                  className="w-full h-[600px] object-cover"
                />
                {/* Color overlay to match brand palette */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
            </div>
          </div>
        </section>

        {/* Enhanced Values Section */}
        <section className="mb-20 fade-in-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6 font-heading">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground font-primary max-w-3xl mx-auto leading-relaxed">
              These core principles guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group text-center p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm fade-in-section opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>



        {/* Enhanced Team Section */}
        <section className="fade-in-section">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6 font-heading">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The passionate individuals behind Solacewear's vision and mission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & Creative Director",
                image: "/src/assets/sarah.jpeg",
                description: "Passionate about creating clothing that makes people feel confident and comfortable. Sarah brings over 10 years of fashion industry experience to Solacewear."
              },
              {
                name: "Mike Chen",
                role: "Head of Sustainability",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
                description: "Dedicated to building a more sustainable and ethical fashion industry. Mike ensures every decision aligns with our environmental values."
              },
              {
                name: "Emily Rodriguez",
                role: "Design Lead",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
                description: "Bringing creativity and innovation to every piece we create. Emily's eye for detail and passion for design drives our collections forward."
              }
            ].map((member, index) => (
              <Card 
                key={index} 
                className="group text-center overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm fade-in-section opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2 font-heading">
                    {member.name}
                  </h3>
                  <p className="text-primary/80 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
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