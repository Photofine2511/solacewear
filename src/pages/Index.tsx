import { useState, useEffect } from "react";
import { ShippingBanner } from "@/components/ShippingBanner";
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
      <ShippingBanner />
      <Header
        cartItemsCount={totalCartItems}
        onCartOpen={() => setIsCartOpen(true)}
      />

      {/* Hero Carousel Section */}
      <section className="relative w-full py-4 md:py-6 mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {/* Ready to SHIP Panel */}
              <CarouselItem>
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl group">
                  <img
                    src="https://i.ibb.co/tTt88mxh/2.jpg"
                    alt="Ready to Ship"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mb-6 leading-tight">
                      Ready to SHIP
                    </h2>
                    <Button
                      className="bg-black text-gray-300 font-manrope font-normal px-8 py-6 rounded-sm transition-all duration-300 hover:scale-105 shadow-lg hover:bg-gray-900"
                      onClick={() => navigate("/shop")}
                    >
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              </CarouselItem>

              {/* Ready to CUSTOMISE Panel */}
              <CarouselItem>
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl group">
                  <img
                    src="https://i.ibb.co/Kc7RYj0k/1.jpg"
                    alt="Ready to Customise"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex flex-col items-end justify-center p-8 text-white">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mb-6 leading-tight text-right">
                      Ready to CUSTOMISE
                    </h2>
                    <Button
                      className="bg-black text-gray-300 font-manrope font-normal px-8 py-6 rounded-sm transition-all duration-300 hover:scale-105 shadow-lg hover:bg-gray-900"
                      onClick={() => navigate("/customizer")}
                    >
                      CUSTOMISE NOW
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>


      <main>

        {/* Featured Products Section */}
        <section className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-heading text-primary mb-2 sm:mb-4">
              Featured Collection
            </h2>
            <p className="text-base xs:text-lg text-muted-foreground max-w-2xl mx-auto font-manrope">
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
            <Button
              className="bg-black text-gray-300 font-manrope font-normal px-8 py-6 rounded-sm transition-all duration-300 hover:scale-105 shadow-lg hover:bg-gray-900"
              onClick={() => navigate("/shop")}
            >
              VIEW ALL
            </Button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-heading text-primary mb-2 sm:mb-4">
              Shop by Category
            </h2>
            <p className="text-base xs:text-lg text-muted-foreground max-w-2xl mx-auto font-manrope">
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
                          className="w-full h-56 xs:h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
                      </div>
                      <CardHeader className="pb-0">
                        <CardTitle className="text-lg xs:text-xl text-primary group-hover:text-accent transition-colors font-manrope">
                          {category.toUpperCase()}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="flex justify-center">
              <Button
              className="bg-black text-gray-300 font-manrope font-normal px-8 py-6 rounded-sm transition-all duration-300 hover:scale-105 shadow-lg hover:bg-gray-900"
              onClick={() => navigate("/shop")}
            >
              SHOW ALL
            </Button>
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