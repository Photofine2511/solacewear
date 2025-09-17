import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-4xl font-heading text-primary mb-4">Solaceewear</h3>
            <p className="text-muted-foreground leading-relaxed font-manrope">
              Premium comfort wear for the modern lifestyle. Designed with care, made to last.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm font-manrope">
            © 2025 Solaceewear. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm font-manrope">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm font-manrope">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};