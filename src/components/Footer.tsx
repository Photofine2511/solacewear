import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: ["New Arrivals", "Best Sellers", "Sale", "Gift Cards"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Sustainability"],
    },
    {
      title: "Support",
      links: ["Contact", "FAQs", "Size Guide", "Returns"],
    },
    {
      title: "Connect",
      links: ["Newsletter", "Instagram", "Twitter", "Facebook"],
    },
  ];

  return (
    <footer className="bg-muted mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-4">Solacewear</h3>
            <p className="text-muted-foreground leading-relaxed">
              Premium comfort wear for the modern lifestyle. Designed with care, made to last.
            </p>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Solacewear. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};