import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
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

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Products
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-lg border border-muted bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow"
          />
          <div className="mt-6 min-h-[120px]">
            {query && filtered.length === 0 && (
              <div className="text-muted-foreground text-center text-sm">No products found.</div>
            )}
            {filtered.map(product => (
              <div
                key={product.id}
                className="px-4 py-2 hover:bg-muted cursor-pointer flex items-center gap-2 rounded"
                onMouseDown={() => { navigate(`/product/${product.id}`); onOpenChange(false); setQuery(""); }}
              >
                <img src={product.image} alt={product.name} className="h-8 w-8 object-cover rounded" />
                <span className="text-sm">{product.name}</span>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
