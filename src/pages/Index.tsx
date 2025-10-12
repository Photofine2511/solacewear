import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import comingSoonVideo from "@/assets/coming-soon.mp4";

const Index = () => {
  // Floating animation for decorative elements
  useEffect(() => {
    const createFloatingElement = () => {
      const elements = document.querySelectorAll('.floating-element');
      elements.forEach((element, index) => {
        const delay = index * 0.5;
        (element as HTMLElement).style.animationDelay = `${delay}s`;
      });
    };
    createFloatingElement();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="max-w-full max-h-full object-contain"
        >
          <source src={comingSoonVideo} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full floating-element animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-400/30 rounded-full floating-element animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400/40 rounded-full floating-element animate-float-slow"></div>
        <div className="absolute top-60 right-40 w-5 h-5 bg-blue-400/25 rounded-full floating-element animate-float"></div>
        <div className="absolute bottom-60 right-10 w-4 h-4 bg-green-400/30 rounded-full floating-element animate-float-delayed"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-32 left-1/4 w-32 h-32 border border-white/20 rotate-45 floating-element animate-rotate-slow"></div>
        <div className="absolute bottom-32 right-1/4 w-24 h-24 border border-yellow-400/30 rotate-12 floating-element animate-rotate-reverse"></div>
      </div>

      <Header />
      

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(90deg); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes rotate-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        
        .animate-rotate-reverse {
          animation: rotate-reverse 15s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Index;