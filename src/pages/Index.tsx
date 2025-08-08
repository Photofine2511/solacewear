import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";
import { Product, CartItem } from "@/types/product";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Zara from "@/assets/brand-logo/zara.png";
import Hm from "@/assets/brand-logo/h&m.png";
import Prada from "@/assets/brand-logo/prada.png";
import Gucci from "@/assets/brand-logo/gucci.png";
import LouisVuitton from "@/assets/brand-logo/louis-vuitton.png";
import Dior from "@/assets/brand-logo/dior.png";
import Versace from "@/assets/brand-logo/versace.png";


const getTopCategories = (products, count = 6) => {
  const categoryCounts = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(categoryCounts)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, count)
    .map(([cat]) => cat);
};

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const topCategories = getTopCategories(products, 6);

  // Brands slider pause on hover functionality
  useEffect(() => {
    const sliderContainer = document.getElementById('brands-slider-container');
    const slider = document.getElementById('brands-slider');

    if (sliderContainer && slider) {
      const handleMouseEnter = () => {
        slider.classList.add('paused');
      };

      const handleMouseLeave = () => {
        slider.classList.remove('paused');
      };

      sliderContainer.addEventListener('mouseenter', handleMouseEnter);
      sliderContainer.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        sliderContainer.removeEventListener('mouseenter', handleMouseEnter);
        sliderContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  // Intersection Observer for fade-in animation
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

    const brandsSection = document.querySelector('.brands-section');
    if (brandsSection) {
      observer.observe(brandsSection);
    }

    return () => {
      if (brandsSection) {
        observer.unobserve(brandsSection);
      }
    };
  }, []);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        toast({
          title: "Added to cart",
          description: `${product.name} quantity updated`,
        });
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast({
          title: "Added to cart",
          description: `${product.name} has been added to your cart`,
        });
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
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
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
    });
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const heroImages = [
    {
      image: "/src/assets/hero/1.png",
      title: "Ready to Ship",
      description: "Shop our latest collection of premium comfort wear",
      buttonText: "Shop Now",
      buttonLink: "/shop"
    },
    {
      image: "/src/assets/hero/2.png",
      title: "Ready to Customise",
      description: "Customise your own piece of comfort wear",
      buttonText: "Customise Now",
      buttonLink: "/collections"
    }
  ]

  const brandLogos = [
    { name: "Zara", img: Zara },
    { name: "H&M", img: Hm },
    { name: "Prada", img: Prada },
    { name: "Gucci", img: Gucci },
    { name: "Louis Vuitton", img: LouisVuitton },
    { name: "Dior", img: Dior },
    {name : "Versace", img: Versace}
  ];

  const getInitialTimer = () => 24 * 60 * 60; // 24 hours in seconds
  const [timer, setTimer] = useState(getInitialTimer());
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={totalCartItems} 
        onCartOpen={() => setIsCartOpen(true)} 
      />

      {/* Hero Two-Column Section */}
      <section className="relative w-full py-4 md:py-6 mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Ready to SHIP Panel */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl group">
              <img 
                src={heroImages[0].image}
                alt="Ready to Ship" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Ready to SHIP
                </h2>
                <Button 
                  className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  onClick={() => navigate("/shop")}
                >
                  Shop Now
                </Button>
              </div>
            </div>

            {/* Ready to CUSTOMISE Panel */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl group">
              <img 
                src={heroImages[1].image}
                alt="Ready to Customise" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col items-end justify-center p-8 text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-right">
                  Ready to CUSTOMISE
                </h2>
                <Button 
                  className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  onClick={() => navigate("/collections")}
                >
                  Customise Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Slider Section */}
      <section className="w-full py-12 sm:py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden relative brands-section opacity-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Brands We Work With
            </h2>
            {/* Subtle gradient underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-yellow-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Brands Slider */}
          <div className="relative group" id="brands-slider-container">
            <div 
              className="flex items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 animate-brand-slider whitespace-nowrap"
              style={{ animation: 'brandSlider 25s linear infinite' }}
              id="brands-slider"
            >
              {brandLogos.map((brand, idx) => (
                <div 
                  key={brand.name + idx} 
                  className="flex-shrink-0 flex flex-col items-center mx-4 sm:mx-6 md:mx-8 group/brand"
                >
                  <div className="relative p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group-hover/brand:shadow-xl border border-gray-100">
                    <img 
                      src={brand.img} 
                      alt={brand.name} 
                      className="h-12 sm:h-16 md:h-20 w-auto object-contain filter grayscale group-hover/brand:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground mt-2 group-hover/brand:text-primary transition-colors duration-300">
                    {brand.name}
                  </span>
                </div>
              ))}
              {/* Duplicate logos for seamless loop */}
              {brandLogos.map((brand, idx) => (
                <div 
                  key={brand.name + 'repeat' + idx} 
                  className="flex-shrink-0 flex flex-col items-center mx-4 sm:mx-6 md:mx-8 group/brand"
                >
                  <div className="relative p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 group-hover/brand:shadow-xl border border-gray-100">
                    <img 
                      src={brand.img} 
                      alt={brand.name} 
                      className="h-12 sm:h-16 md:h-20 w-auto object-contain filter grayscale group-hover/brand:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground mt-2 group-hover/brand:text-primary transition-colors duration-300">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Custom CSS for animations */}
          <style>{`
            @keyframes brandSlider {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            .animate-brand-slider {
              animation: brandSlider 25s linear infinite;
            }
            
            .animate-brand-slider.paused {
              animation-play-state: paused;
            }
            
            .brands-section.animate-fade-in {
              opacity: 1;
              animation: fadeInUp 0.8s ease-out;
            }
            
            @media (max-width: 768px) {
              .animate-brand-slider {
                animation-duration: 20s;
              }
            }
            
            @media (max-width: 480px) {
              .animate-brand-slider {
                animation-duration: 15s;
              }
            }
          `}</style>
        </div>
      </section>
      
      <main>
        
        {/* Featured Products Section */}
        <section className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-4">
              Featured Collection
            </h2>
            <p className="text-base xs:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of premium comfort wear, 
              designed for those who value both style and comfort.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 sm:px-6 sm:py-2 rounded bg-primary text-white font-semibold hover:bg-primary/90 transition text-sm sm:text-base"
              onClick={() => navigate("/shop")}
            >
              View All
            </button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-4">
              Shop by Category
            </h2>
            <p className="text-base xs:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular categories and find your perfect style.
            </p>
          </div>
          {!selectedCategory ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-6 sm:mb-8">
                {topCategories.map((category) => {
                  const firstProduct = products.find(p => p.category === category);
                  return (
                    <Card key={category} className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover animate-fade-in cursor-pointer" onClick={() => setSelectedCategory(category)}>
                      <div className="relative overflow-hidden">
                        <img
                          src={firstProduct?.image}
                          alt={category}
                          className="w-full h-40 xs:h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg xs:text-xl text-primary group-hover:text-accent transition-colors">
                          {category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 xs:space-y-4">
                        <p className="text-muted-foreground text-xs xs:text-sm">
                          {products.filter(p => p.category === category).length} items
                        </p>
                        <Button className="w-full mt-2 xs:mt-4 bg-primary hover:bg-primary/90 transition-all duration-300 text-xs xs:text-sm">
                          View Products
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="flex justify-center">
                <Button variant="outline" onClick={() => navigate("/collections")} className="text-xs xs:text-sm">Show All</Button>
              </div>
            </div>
          ) : (
            <div>
              <Button className="mb-4 xs:mb-8" variant="outline" onClick={() => setSelectedCategory(null)}>
                ← Back to Categories
              </Button>
              <h2 className="text-lg xs:text-2xl font-bold mb-4 xs:mb-6 text-left">{selectedCategory}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {products.filter(p => p.category === selectedCategory).map(product => (
                  <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <Newsletter />

        {/* Promotional Banner Section */}
        <section className="w-full px-2 py-8 xs:px-4 sm:px-6 lg:px-8">
          <img src="https://i.ibb.co/Xf5MqPk7/banner-img.png" alt="Promotional Banner" className="w-full h-auto object-cover rounded-xl" />
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

export default Index;