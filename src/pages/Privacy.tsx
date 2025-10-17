import React from "react";
import { Header } from "@/components/Header";
import { ArrowLeft, Shield, Eye, Lock, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>

          {/* Privacy Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-slate-900">Data Protection</h3>
              </div>
              <p className="text-slate-700">
                We use industry-standard encryption and security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold text-slate-900">Transparency</h3>
              </div>
              <p className="text-slate-700">
                We are transparent about what data we collect, how we use it, and with whom we share it. You have control over your personal information.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Personal Information</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Name, email address, and phone number</li>
                      <li>• Shipping and billing addresses</li>
                      <li>• Payment information (processed securely through Razorpay)</li>
                      <li>• Account preferences and settings</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Usage Information</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Website usage patterns and preferences</li>
                      <li>• Device information and browser type</li>
                      <li>• IP address and location data</li>
                      <li>• Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Information</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Lock className="w-5 h-5 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Order Processing</h3>
                      <p className="text-slate-700">To process and fulfill your orders, send order confirmations, and provide customer support.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Database className="w-5 h-5 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Service Improvement</h3>
                      <p className="text-slate-700">To analyze usage patterns, improve our website functionality, and enhance user experience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900">Communication</h3>
                      <p className="text-slate-700">To send you important updates about your orders, promotional offers (with consent), and customer service communications.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information Sharing</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• With trusted service providers (shipping companies, payment processors)</li>
                  <li>• When required by law or to protect our rights</li>
                  <li>• With your explicit consent</li>
                  <li>• In case of business transfer or merger</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Security</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Security Measures</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• SSL encryption for all data transmission</li>
                      <li>• Secure servers and databases</li>
                      <li>• Regular security audits and updates</li>
                      <li>• Limited access to personal information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Payment Security</h3>
                    <p className="text-slate-700">
                      All payment information is processed securely through Razorpay, a PCI DSS compliant payment gateway. We do not store your complete payment details on our servers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Rights</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Access and Control</h3>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Access your personal information</li>
                      <li>• Update or correct your data</li>
                      <li>• Delete your account and data</li>
                      <li>• Opt-out of marketing communications</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">Data Portability</h3>
                    <p className="text-slate-700">
                      You can request a copy of your personal data in a structured, machine-readable format.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cookies and Tracking</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <p className="text-slate-700 mb-4">
                  We use cookies and similar technologies to enhance your browsing experience:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Essential cookies for website functionality</li>
                  <li>• Analytics cookies to understand usage patterns</li>
                  <li>• Marketing cookies (with your consent)</li>
                  <li>• You can manage cookie preferences in your browser settings</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="text-slate-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-slate-700">
                  <p><strong>Email:</strong> privacy@solacewear.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> Solacewear Privacy Team, [Your Business Address]</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Policy Updates</h2>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <p className="text-slate-700">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after any such changes constitutes your acceptance of the new Privacy Policy.
                </p>
                <p className="text-slate-600 mt-4">
                  <strong>Last Updated:</strong> [Current Date]
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
