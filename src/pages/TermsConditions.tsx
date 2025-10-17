import React from "react";
import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
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
              Terms and Conditions
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Acceptance of Terms</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-700">
                  By accessing and using Solacewear's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Use License</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Solacewear's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for any commercial purpose or for any public display</li>
                  <li>• Attempt to reverse engineer any software contained on the website</li>
                  <li>• Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Product Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Product Descriptions</h3>
                    <p className="text-slate-700">
                      We strive to provide accurate product descriptions, images, and specifications. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Pricing</h3>
                    <p className="text-slate-700">
                      All prices are subject to change without notice. We reserve the right to modify or discontinue products at any time. Prices do not include applicable taxes, which will be added to your order total.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Payment Terms</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <ul className="space-y-3 text-slate-700">
                  <li>• Payment is due at the time of order placement</li>
                  <li>• We accept major credit cards, debit cards, and digital wallets</li>
                  <li>• All transactions are processed securely through Razorpay</li>
                  <li>• Orders are not confirmed until payment is successfully processed</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Limitation of Liability</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-700">
                  In no event shall Solacewear, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Governing Law</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-700">
                  These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to Terms</h2>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="text-slate-700">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page. Your continued use of the service after any such changes constitutes your acceptance of the new terms.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsConditions;
