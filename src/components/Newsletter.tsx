import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setIsSubscribed(true);
    setEmail("");
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto bg-card border-0 shadow-card animate-fade-in">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-heading text-primary mb-4">
                  Stay in Style
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-manrope">
                  Be the first to know about new collections, exclusive offers, 
                  and style tips. Join our community of comfort enthusiasts.
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent font-manrope" />
                    <span>Exclusive early access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent font-manrope" />
                    <span>Style tips & trends</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent font-manrope" />
                    <span>Special member discounts</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="p-8 rounded-xl shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="newsletter-email" className="text-sm font-medium text-foreground font-manrope">
                      Email Address
                    </label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 font-manrope"
                      disabled={isSubscribed}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-black text-gray-300 font-manrope font-normal px-8 py-6 rounded-sm transition-all duration-300 hover:scale-105 shadow-lg hover:bg-gray-900"
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? (
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        <span>Subscribed!</span>
                      </div>
                    ) : (
                      "SUBSCRIBE TO NEWSLETTER"
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center font-manrope">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};