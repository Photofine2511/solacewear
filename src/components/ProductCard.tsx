import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const navigate = useNavigate();
  return (
    <Card
      className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover animate-fade-in cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category marker (top-left) */}
        <Badge 
          variant="secondary" 
          className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-primary font-bold text-sm px-4 py-1 rounded-lg shadow-lg border border-primary/30 z-10"
        >
          {product.category}
        </Badge>
        {/* Sale badge (top-right) */}
        {product.sale && (
          <Badge 
            variant="destructive" 
            className="absolute top-3 right-3 bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-lg shadow-lg z-10"
          >
            Sale
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <p className="font-bold text-xl text-primary">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={e => { e.stopPropagation(); onAddToCart(product); }}
          className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-accent-glow"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};