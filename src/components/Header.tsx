import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X, User, Heart, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import SiteLogo from "@/assets/logos/Logo_Muted_Gold.png";
import { products } from "@/data/products";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { SearchDrawer } from "@/components/SearchDrawer";

interface HeaderProps {
  cartItemsCount: number;
  onCartOpen: () => void;
}

export const Header = ({ cartItemsCount, onCartOpen }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistHovered, setIsWishlistHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "Customizer", href: "/customizer" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
      isScrolled 
        ? 'h-16 shadow-lg shadow-black/10' 
        : 'h-20 shadow-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center gap-2 group relative"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={SiteLogo} 
                  alt="Solacewear Logo" 
                  className={`transition-all duration-300 ease-out group-hover:scale-105 group-hover:drop-shadow-lg ${
                    isScrolled ? 'h-6 w-auto' : 'h-8 w-auto'
                  }`}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative group font-medium text-base tracking-wide transition-all duration-300 ${
                  location.pathname === item.href
                    ? "text-primary font-altone"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
                {/* Animated underline for current page and hover - starts from center */}
                <span 
                  className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-primary to-yellow-500 transition-all duration-300 ${
                    location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{
                    transform: 'translateX(-50%)'
                  }}
                ></span>
                {/* Subtle background on hover */}
                <span className="absolute inset-0 bg-primary/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </Link>
            ))}
          </nav>

          {/* Right side - Cart and Mobile Menu */}
          <div className="flex items-center space-x-1 flex-shrink-0">
            {/* Search Icon & Drawer */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative group h-10 w-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-105 hover:shadow-md" 
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
            </Button>
            <SearchDrawer isOpen={isSearchOpen} onOpenChange={setIsSearchOpen} />
            
            {/* User Icon */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative group h-10 w-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-105 hover:shadow-md"
            >
              <User className="h-5 w-5 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
            </Button>
            
            {/* Heart Icon (Wishlist) */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative group h-10 w-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-105 hover:shadow-md"
              onMouseEnter={() => setIsWishlistHovered(true)}
              onMouseLeave={() => setIsWishlistHovered(false)}
            >
              <Heart 
                className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
                  isWishlistHovered 
                    ? "fill-red-500 text-red-500 animate-pulse" 
                    : "group-hover:text-red-500"
                }`} 
              />
            </Button>
            
            {/* Cart Icon */}
            <Button
              variant="ghost"
              size="sm"
              className="relative group h-10 w-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-105 hover:shadow-md"
              onClick={onCartOpen}
            >
              <ShoppingCart className="h-5 w-5 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
              {cartItemsCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs font-bold bg-gradient-to-r from-red-500 to-red-600 shadow-lg animate-bounce"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden group h-10 w-10 rounded-full transition-all duration-300 hover:bg-primary/10 hover:scale-105 hover:shadow-md ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
              ) : (
                <Menu className="h-5 w-5 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-md border-l border-gray-200/50">
            <SheetHeader className="pb-6">
              <SheetTitle className="text-xl font-semibold text-primary">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`py-4 px-4 rounded-xl font-medium text-base transition-all duration-300 border border-transparent ${
                    location.pathname === item.href
                      ? "text-primary font-semibold bg-primary/10 border-primary/20 shadow-sm"
                      : "text-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Additional mobile menu items */}
            <div className="mt-8 pt-6 border-t border-gray-200/50">
              <div className="flex flex-col space-y-2">
                <Button
                  variant="ghost"
                  className="justify-start py-4 px-4 rounded-xl font-medium text-base transition-all duration-300 hover:bg-primary/5 hover:text-primary"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                >
                  <Search className="h-5 w-5 mr-3" />
                  Search
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start py-4 px-4 rounded-xl font-medium text-base transition-all duration-300 hover:bg-primary/5 hover:text-primary"
                >
                  <User className="h-5 w-5 mr-3" />
                  Account
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start py-4 px-4 rounded-xl font-medium text-base transition-all duration-300 hover:bg-primary/5 hover:text-primary"
                >
                  <Heart className="h-5 w-5 mr-3" />
                  Wishlist
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};