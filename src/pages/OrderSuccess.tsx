import { useLocation, useNavigate } from "react-router-dom";
import { ShippingBanner } from "@/components/ShippingBanner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Package, Truck, Home, ShoppingBag } from "lucide-react";
import { CartItem } from "@/types/product";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const orderData = location.state;
  
  if (!orderData) {
    return (
      <div className="min-h-screen bg-background">
        <ShippingBanner />
        <Header cartItemsCount={0} onCartOpen={() => {}} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">Order not found</h1>
            <p className="text-muted-foreground mb-8">Please return to the shop to place an order</p>
            <Button onClick={() => navigate("/shop")}>
              Go to Shop
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { orderNumber, total, items } = orderData;

  return (
    <div className="min-h-screen bg-background">
      <ShippingBanner />
      <Header cartItemsCount={0} onCartOpen={() => {}} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Order Number:</span>
                <span className="font-mono font-medium">{orderNumber}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Order Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total Amount:</span>
                <span className="text-xl font-bold text-primary">${total.toFixed(2)}</span>
              </div>

              <Separator />

              {/* Order Items */}
              <div>
                <h3 className="font-medium mb-3">Items Ordered:</h3>
                <div className="space-y-3">
                  {items.map((item: CartItem) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                What's Next?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Order Confirmation</h4>
                    <p className="text-sm text-muted-foreground">
                      You'll receive an email confirmation with your order details shortly.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Order Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll process your order and prepare it for shipping within 1-2 business days.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Shipping & Delivery</h4>
                    <p className="text-sm text-muted-foreground">
                      You'll receive tracking information once your order ships. Delivery typically takes 3-5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => navigate("/")}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Home className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate("/shop")}
              className="flex-1"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Browse More Products
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Have questions about your order?
            </p>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/contact")}
              className="text-accent hover:text-accent/80"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderSuccess; 