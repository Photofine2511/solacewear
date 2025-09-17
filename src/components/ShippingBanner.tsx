import React, { useState } from "react";

export const ShippingBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-4 px-4 relative overflow-hidden">
      {/* Background pattern for visual appeal */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
      </div>
      
      {/* Infinite sliding animation container */}
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center relative z-10">
          {/* Sliding content */}
          <div className="flex items-center gap-3 text-base font-medium whitespace-nowrap animate-slide">
            <span>FREE SHIPPING ON ORDERS ABOVE ₹2,499</span>
          </div>
        </div>
      </div>
      
      {/* Animated border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
    </div>
  );
};
