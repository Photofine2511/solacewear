import React from "react";
import { Header } from "@/components/Header";
import { ArrowLeft, Truck, Clock, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Shipping Information
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about our shipping and delivery services.
            </p>
          </div>

          {/* Shipping Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <Truck className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-slate-900">Standard Shipping</h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li>• 5-7 business days</li>
                <li>• Free on orders over ₹999</li>
                <li>• ₹99 for orders under ₹999</li>
                <li>• Tracking provided</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-slate-900">Express Shipping</h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                <li>• 2-3 business days</li>
                <li>• ₹199 flat rate</li>
                <li>• Priority handling</li>
                <li>• Real-time tracking</li>
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Shipping Destinations</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">Domestic Shipping</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• All major cities in India</li>
                      <li>• Tier 1 & Tier 2 cities</li>
                      <li>• Remote areas (additional charges may apply)</li>
                      <li>• Free shipping to metro cities</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">International Shipping</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Currently shipping to select countries</li>
                      <li>• 7-14 business days</li>
                      <li>• Customs duties may apply</li>
                      <li>• Contact us for international orders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Processing Times</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">Order Processing</h3>
                      <p className="text-slate-700">1-2 business days for order verification and preparation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">Quality Check</h3>
                      <p className="text-slate-700">Thorough inspection and packaging of your order</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">Shipping</h3>
                      <p className="text-slate-700">Handover to courier partner and tracking activation</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Tracking Your Order</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-primary mr-3" />
                    <span className="text-slate-700">You'll receive a tracking number via SMS and email</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    <span className="text-slate-700">Real-time location updates through our courier partners</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    <span className="text-slate-700">Estimated delivery time provided at checkout</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Special Circumstances</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Custom Orders</h3>
                    <p className="text-slate-700">
                      Custom-made items may require additional processing time (7-14 days). We'll notify you of the exact timeline when you place your order.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Holiday Periods</h3>
                    <p className="text-slate-700">
                      During festive seasons and holidays, processing and delivery times may be extended. We'll communicate any delays proactively.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Weather Conditions</h3>
                    <p className="text-slate-700">
                      Severe weather conditions may affect delivery times. We work with reliable courier partners to minimize delays.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact for Shipping Inquiries</h2>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="text-slate-700 mb-4">
                  For any shipping-related questions or concerns, please contact us:
                </p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Email:</strong> shipping@solacewear.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shipping;
