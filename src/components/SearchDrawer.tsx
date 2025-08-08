import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { products } from "@/data/products";
import { useNavigate } from "react-router-dom";

interface SearchDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchDrawer: React.FC<SearchDrawerProps> = ({ isOpen, onOpenChange }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const filtered = query.length > 0
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  // Clear query when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Search Products
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-3 rounded-lg border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm transition-all duration-300"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full hover:bg-primary/10"
                onClick={() => setQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="mt-6 min-h-[120px]">
            {query && filtered.length === 0 && (
              <div className="text-muted-foreground text-center text-sm py-8">
                No products found for "{query}".
              </div>
            )}
            {filtered.map((product, index) => (
              <div
                key={product.id}
                className="px-4 py-3 hover:bg-muted cursor-pointer flex items-center gap-3 rounded-lg transition-all duration-200 hover:shadow-sm group"
                onMouseDown={() => { navigate(`/product/${product.id}`); onOpenChange(false); setQuery(""); }}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-12 w-12 object-cover rounded-md group-hover:scale-105 transition-transform duration-200" 
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm group-hover:text-primary transition-colors duration-200">
                    {product.name}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {product.description}
                  </div>
                </div>
                <div className="text-sm font-semibold text-primary">
                  ${product.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
