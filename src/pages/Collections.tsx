import { useState } from "react";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types/product";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const Collections = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map(p => p.category)));

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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Collections
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover curated collections designed for every aspect of your lifestyle. 
            From everyday essentials to special occasion pieces, find your perfect style.
          </p>
        </div>
        {!selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const firstProduct = products.find(p => p.category === category);
              return (
                <Card key={category} className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover animate-fade-in cursor-pointer" onClick={() => setSelectedCategory(category)}>
                  <div className="relative overflow-hidden">
                    <img
                      src={firstProduct?.image}
                      alt={category}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/10" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      {products.filter(p => p.category === category).length} items
                    </p>
                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90 transition-all duration-300">
                      View Products
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div>
            <Button className="mb-8" variant="outline" onClick={() => setSelectedCategory(null)}>
              ← Back to Categories
            </Button>
            <h2 className="text-2xl font-bold mb-6 text-left">{selectedCategory}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.filter(p => p.category === selectedCategory).map(product => (
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