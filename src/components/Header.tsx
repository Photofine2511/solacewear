import React from "react";
import { Link } from "react-router-dom";
import SiteLogo from "@/assets/logos/Logo_Muted_Gold.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur-md supports-[backdrop-filter]:bg-black/90 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          {/* Logo with dark theme styling */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group relative"
          >
            <img 
              src={SiteLogo} 
              alt="Solacewear Logo" 
              className="h-8 sm:h-10 w-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:drop-shadow-2xl"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};