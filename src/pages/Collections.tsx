import { useState } from "react";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types/product";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, ChevronLeft, Sparkles } from "lucide-react";

const Collections = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map(p => p.category)));

  // Enhanced category data with better images and descriptions
  const categoryData = {
    "T-Shirts": {
      description: "Essential tees for everyday comfort",
      count: products.filter(p => p.category === "T-Shirts").length
    },
    "Hoodies": {
      description: "Cozy hoodies for relaxed style",
      count: products.filter(p => p.category === "Hoodies").length
    },
    "Jeans": {
      description: "Classic denim for timeless appeal",
      count: products.filter(p => p.category === "Jeans").length
    },
    "Footwear": {
      description: "Stylish shoes for every occasion",
      count: products.filter(p => p.category === "Footwear").length
    },
    "Outerwear": {
      description: "Premium jackets and coats",
      count: products.filter(p => p.category === "Outerwear").length
    },
    "Sweaters": {
      description: "Soft knits for comfort and style",
      count: products.filter(p => p.category === "Sweaters").length
    },
    "Pants": {
      description: "Versatile pants for any occasion",
      count: products.filter(p => p.category === "Pants").length
    },
    "Accessories": {
      description: "Essential accessories to complete your look",
      count: products.filter(p => p.category === "Accessories").length
    },
    "Shorts": {
      description: "Comfortable shorts for active lifestyles",
      count: products.filter(p => p.category === "Shorts").length
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header 
        cartItemsCount={totalCartItems} 
        onCartOpen={() => setIsCartOpen(true)} 
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Our Collections
            </h1>
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover curated collections designed for every aspect of your lifestyle. 
            From everyday essentials to special occasion pieces, find your perfect style.
          </p>
        </div>

        {!selectedCategory ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const categoryInfo = categoryData[category as keyof typeof categoryData] || {
                description: "Explore our curated selection",
                count: products.filter(p => p.category === category).length
              };

              // Get the first product image for this category
              const firstProduct = products.find(p => p.category === category);
              const categoryProducts = products.filter(p => p.category === category);
              const secondaryProduct = categoryProducts.length > 1 ? categoryProducts[1] : firstProduct;

              return (
                <Card 
                  key={category} 
                  className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
                  onClick={() => setSelectedCategory(category)}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <div className="relative overflow-hidden aspect-[4/5]">
                    {/* Primary Image */}
                    <img
                      src={firstProduct?.image || ""}
                      alt={category}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredCategory === category ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
                      }`}
                    />
                    
                    {/* Secondary Image (shown on hover) */}
                    <img
                      src={secondaryProduct?.image || firstProduct?.image || ""}
                      alt={`${category} lifestyle`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        hoveredCategory === category ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
                      }`}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <div className="transform transition-all duration-300 group-hover:translate-y-0 translate-y-2">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-white">
                          {category}
                        </h3>
                        <p className="text-sm text-white/80 mb-4 group-hover:text-white/90">
                          {categoryInfo.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-white/70 group-hover:text-white/90">
                            {categoryInfo.count} items
                          </span>
                          <Button 
                            className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-300 group-hover:scale-105 backdrop-blur-sm"
                            size="sm"
                          >
                            <span className="mr-2">View Products</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="space-y-8">
            {/* Enhanced Back Button */}
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory(null)}
                className="group hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Collections
              </Button>
            </div>

            {/* Category Header */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-primary mb-4">{selectedCategory}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {categoryData[selectedCategory as keyof typeof categoryData]?.description || 
                 `Explore our curated selection of ${selectedCategory.toLowerCase()}`}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.filter(p => p.category === selectedCategory).map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={() => {}} />
              ))}
            </div>
          </div>
        )}
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

export default Collections;