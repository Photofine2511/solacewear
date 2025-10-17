import React from "react";
import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CancellationRefunds = () => {
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
              Cancellation & Refunds
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our cancellation and refund policy ensures your satisfaction with every purchase.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Order Cancellation</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <ul className="space-y-3 text-slate-700">
                  <li>• Orders can be cancelled within 24 hours of placement</li>
                  <li>• Cancellation requests must be made via email or phone</li>
                  <li>• Orders already shipped cannot be cancelled</li>
                  <li>• Custom orders cannot be cancelled once production begins</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Refund Policy</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Eligible for Refund</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Defective or damaged products</li>
                      <li>• Wrong items received</li>
                      <li>• Items not as described</li>
                      <li>• Cancelled orders (within 24 hours)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Refund Process</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Refunds processed within 5-7 business days</li>
                      <li>• Original payment method will be credited</li>
                      <li>• Return shipping costs covered by us for defective items</li>
                      <li>• Refund amount excludes original shipping charges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Return Policy</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Return Conditions</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Items must be in original condition with tags</li>
                      <li>• Return window: 14 days from delivery</li>
                      <li>• Return authorization required before shipping</li>
                      <li>• Customer responsible for return shipping costs</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Non-Returnable Items</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Customized or personalized items</li>
                      <li>• Items worn or used</li>
                      <li>• Sale or clearance items</li>
                      <li>• Items without original packaging</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact for Returns</h2>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="text-slate-700 mb-4">
                  For return requests or questions about our refund policy, please contact us:
                </p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Email:</strong> returns@solacewear.com</p>
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

export default CancellationRefunds;
