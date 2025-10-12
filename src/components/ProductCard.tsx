import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { useNavigate } from "react-router-dom";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
	product: Product;
	onAddToCart: (product: Product) => void;
	onAddToWishlist?: (product: Product) => void;
	hideAddToCart?: boolean;
}

export const ProductCard = ({ product, onAddToCart, onAddToWishlist, hideAddToCart = false }: ProductCardProps) => {
  const navigate = useNavigate();
  const [isWishlistHovered, setIsWishlistHovered] = useState(false);
  const [isQuickViewHovered, setIsQuickViewHovered] = useState(false);

  // Mock data for enhanced features
  const stockLevel = Math.floor(Math.random() * 20) + 1; // Random stock for demo
  const isLowStock = stockLevel <= 5;
  const isNew = product.id <= 3; // First 3 products are "new"
  const isBestSeller = product.id % 5 === 0; // Every 5th product is "best seller"
  
  // Mock color variants
  const colorVariants = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Navy", hex: "#1B365D" },
    { name: "Red", hex: "#DC2626" }
  ];

  const getBadgeVariant = () => {
    if (isNew) return "default";
    if (product.sale) return "destructive";
    if (isBestSeller) return "secondary";
    return "outline";
  };

  const getBadgeText = () => {
    if (isNew) return "New";
    if (product.sale) return "Sale";
    if (isBestSeller) return "Best Seller";
    return "";
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/10 animate-fade-in cursor-pointer relative"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative overflow-hidden">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with Quick View button */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <Button
            variant="secondary"
            size="sm"
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105 ${
              isQuickViewHovered ? 'bg-white text-black font-manrope' : 'bg-white/90 text-black font-manrope'
            }`}
            onMouseEnter={() => setIsQuickViewHovered(true)}
            onMouseLeave={() => setIsQuickViewHovered(false)}
            onClick={handleQuickViewClick}
          >
            <Eye className="h-4 w-4 mr-2" />
            QUICK VIEW
          </Button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
        </div>

        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white ${
            isWishlistHovered ? 'scale-110' : ''
          }`}
          onMouseEnter={() => setIsWishlistHovered(true)}
          onMouseLeave={() => setIsWishlistHovered(false)}
          onClick={handleWishlistClick}
        >
          <Heart 
            className={`h-4 w-4 transition-all duration-300 ${
              isWishlistHovered ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`} 
          />
        </Button>

        {/* Stock indicator */}
        {false && (
          <Badge 
            variant="destructive" 
            className="absolute bottom-3 left-3 bg-orange-500 text-white font-bold text-xs px-3 py-1 rounded-lg shadow-lg"
          >
            Only {stockLevel} left
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold font-manrope text-lg mb-2 text-foreground group-hover:text-accent transition-colors line-clamp-1">
          {product.name.toUpperCase()}
        </h3>
        
        <p className="font-bold text-xl text-primary">
        ₹ {product.price.toFixed(2)}
        </p>
      </CardContent>

		{!hideAddToCart && (
			<CardFooter className="p-4 pt-0">
				<Button 
					onClick={e => { e.stopPropagation(); onAddToCart(product); }}
					className="w-full h-10 bg-black text-gray-300 font-manrope font-normal px-8 py-6 rounded-sm transition-all duration-300 hover:scale-105 shadow-lg hover:bg-gray-900"
				>
					<ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
					ADD TO CART
				</Button>
			</CardFooter>
		)}
    </Card>
  );
};