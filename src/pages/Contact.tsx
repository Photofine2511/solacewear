import { useState } from "react";
import { ShippingBanner } from "@/components/ShippingBanner";
import { Header } from "@/components/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { CartItem } from "@/types/product";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Search,
  ChevronDown,
  ExternalLink,
  Calendar,
  Map
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [faqSearch, setFaqSearch] = useState("");
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@solacewear.com",
      description: "Send us an email anytime!",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Fashion Street, NY 10001",
      description: "Come visit our flagship store",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9am-6pm",
      description: "Saturday: 10am-4pm",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const storeHours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM", status: "open" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM", status: "open" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM", status: "open" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM", status: "open" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM", status: "open" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", status: "open" },
    { day: "Sunday", hours: "Closed", status: "closed" }
  ];

  const faqs = [
    {
      question: "What's your return policy?",
      answer: "We offer 30-day returns on all unworn items with tags attached. Simply initiate a return through your account or contact our customer service team."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide! Shipping costs vary by location and are calculated at checkout. Most international orders arrive within 7-14 business days."
    },
    {
      question: "How can I track my order?",
      answer: "You'll receive a tracking number via email once your order ships. You can also track your order through your account dashboard."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay for secure checkout."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes! Gift cards are available in denominations from $25 to $500 and can be used for any purchase on our website or in-store."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can be modified or cancelled within 2 hours of placement. After that, orders are processed and cannot be changed. Contact us immediately if you need assistance."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      return;
    }
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const openGoogleMaps = () => {
    const address = encodeURIComponent("123 Fashion Street, New York, NY 10001");
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ShippingBanner />
      <Header 
        cartItemsCount={totalCartItems} 
        onCartOpen={() => setIsCartOpen(true)} 
      />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enhanced Hero Section */}
        <section className="relative text-center mb-20">
          {/* Background gradient and texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl -z-10"></div>
          <div className="absolute inset-0 opacity-50 -z-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23004225%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          
          <div className="relative z-10 py-16">
            <h1 className="text-5xl md:text-6xl font-bold text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-heading mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-manrope">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Enhanced Contact Info Cards */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="group text-center p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm rounded-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${info.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4 font-heading">
                    {info.title}
                  </h3>
                  <p className="font-medium text-foreground mb-2 text-lg font-manrope">
                    {info.details}
                  </p>
                  <p className="text-muted-foreground font-manrope">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form and Store Info */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Enhanced Contact Form */}
          <Card className="border-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl h-full">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-primary font-heading">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-sm font-medium text-primary font-manrope">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="h-12 rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-medium text-primary font-manrope">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      className="h-12 rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-sm font-medium text-primary font-manrope">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                    className="h-12 rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="message" className="text-sm font-medium text-primary font-manrope">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us how we can help you..."
                    className="min-h-32 rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary transition-all duration-200 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-black text-gray-300 font-manrope font-large px-8 py-6 rounded-sm transition-all duration-300 hover:scale-105 shadow-lg hover:bg-gray-900"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Enhanced Map and Store Info */}
          <Card className="border-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl text-primary font-heading">Visit Our Store</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Embedded Google Maps */}
              <div className="aspect-video bg-gray-100 rounded-xl mb-6 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215583012064!2d-74.00601508459367!3d40.71277597933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Full Width FAQ Section */}
        <section className="mb-20">
          <Card className="border-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Search className="w-5 h-5 text-primary" />
                <Input
                  placeholder="Search FAQs..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="flex-1 rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary transition-all duration-200"
                />
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-50/50 transition-colors duration-200">
                      <span className="text-left font-medium text-primary">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              {filteredFaqs.length === 0 && (
                <p className="text-center text-muted-foreground py-8">
                  No FAQs match your search. Try different keywords.
                </p>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
      
      <Footer />
      
      <CartDrawer
        isOpen={isCartOpen}
        onOpenChange={setIsCartOpen}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  );
};

export default Contact;