import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShippingBanner } from "@/components/ShippingBanner";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { products } from "@/data/products";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Heart, ShoppingCart, Truck, Check, ChevronLeft, ChevronRight, ZoomIn, Star } from "lucide-react";

const defaultSizes = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"];
const defaultColors = [
  { name: "White", hex: "#FFFFFF" },
  { name: "Black", hex: "#000000" },
  { name: "Navy", hex: "#1B365D" },
  { name: "Red", hex: "#DC2626" }
];

// Size measurements based on the provided images
const sizeMeasurements = {
  XS: { chest: { cm: 99.1, inches: 39 }, frontLength: { cm: 72.9, inches: 28.7 }, acrossShoulder: { cm: 41.9, inches: 16.5 } },
  S: { chest: { cm: 104, inches: 40.9 }, frontLength: { cm: 74.9, inches: 29.5 }, acrossShoulder: { cm: 43.9, inches: 17.3 } },
  M: { chest: { cm: 109, inches: 42.9 }, frontLength: { cm: 77, inches: 30.3 }, acrossShoulder: { cm: 47, inches: 18.5 } },
  L: { chest: { cm: 115, inches: 45.3 }, frontLength: { cm: 78, inches: 30.7 }, acrossShoulder: { cm: 48.5, inches: 19.1 } },
  XL: { chest: { cm: 121, inches: 47.6 }, frontLength: { cm: 79, inches: 31.1 }, acrossShoulder: { cm: 50.5, inches: 19.9 } },
  XXL: { chest: { cm: 130, inches: 51.2 }, frontLength: { cm: 81.5, inches: 32.1 }, acrossShoulder: { cm: 52.6, inches: 20.7 } },
  "3XL": { chest: { cm: 139, inches: 54.7 }, frontLength: { cm: 85.6, inches: 33.7 }, acrossShoulder: { cm: 55.9, inches: 22 } },
  "4XL": { chest: { cm: 148, inches: 58.3 }, frontLength: { cm: 86.6, inches: 34.1 }, acrossShoulder: { cm: 59.4, inches: 23.4 } },
  "5XL": { chest: { cm: 157, inches: 61.8 }, frontLength: { cm: 87.4, inches: 34.4 }, acrossShoulder: { cm: 63, inches: 24.8 } }
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState<string>(defaultSizes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(defaultColors[0].name);
  const [quantity, setQuantity] = useState<number>(1);
  const [pincode, setPincode] = useState<string>("");
  const [pincodeResult, setPincodeResult] = useState<string>("");
  const [cartItemsCount] = useState(0);
  const [isWishlistHovered, setIsWishlistHovered] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [measurementUnit, setMeasurementUnit] = useState<"cm" | "inches">("cm");
  const navigate = useNavigate();
  
  // Enhanced image gallery with multiple variations
  const [mainImage, setMainImage] = useState<string>(product?.image || "");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const variationImages = [
    product?.image || "",
    "/src/assets/product-sweater.jpg",
    "/src/assets/product-jacket.jpg",
    "/src/assets/product-hoodie.jpg",
  ];

  // Mock data for enhanced features
  const originalPrice = product?.originalPrice || (product?.sale ? product.price * 1.3 : product?.price || 0);
  const savings = originalPrice - (product?.price || 0);
  const rating = product?.rating || 4.5;
  const reviewCount = product?.reviewCount || 128;
  const stockLevel = product?.stockLevel || Math.floor(Math.random() * 20) + 1;
  const isLowStock = stockLevel <= 5;

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <div className="text-2xl font-bold text-gray-700 mb-2">Product not found</div>
          <div className="text-gray-500 mb-4">The product you're looking for doesn't exist.</div>
          <Button onClick={() => navigate("/shop")} className="bg-primary hover:bg-primary/90">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  const handlePincodeCheck = () => {
    if (pincode.length === 6 && /^[0-9]+$/.test(pincode)) {
      setPincodeResult("✅ Delivery available to this pincode! Free shipping on orders above $50.");
    } else {
      setPincodeResult("❌ Please enter a valid 6-digit pincode.");
    }
  };

  const handleBuyNow = () => {
    navigate("/checkout", {
      state: {
        product,
        selectedSize,
        selectedColor,
        quantity,
      },
    });
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log("Added to cart:", { product, selectedSize, selectedColor, quantity });
  };

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const toggleImageZoom = () => {
    setIsImageZoomed(!isImageZoomed);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % variationImages.length);
    setMainImage(variationImages[(currentImageIndex + 1) % variationImages.length]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + variationImages.length) % variationImages.length);
    setMainImage(variationImages[(currentImageIndex - 1 + variationImages.length) % variationImages.length]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ShippingBanner />
      <Header cartItemsCount={cartItemsCount} onCartOpen={() => {}} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <button onClick={() => navigate("/shop")} className="hover:text-primary transition-colors">
            Shop
          </button>
          <span>/</span>
          <span className="text-primary">{product.category}</span>
          <span>/</span>
          <span className="font-medium">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <Card className="overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Left: Product Image Gallery */}
              <div className="lg:w-1/2 w-full p-8">
                <div className="relative group">
                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                    <img
                      src={mainImage}
                      alt={product.name}
                      className={`w-full h-[500px] object-cover transition-all duration-500 ${
                        isImageZoomed ? 'scale-150' : 'group-hover:scale-110'
                      }`}
                      onClick={toggleImageZoom}
                    />
                    
                    {/* Zoom overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ZoomIn className="h-8 w-8 text-white" />
                    </div>

                    {/* Navigation arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.sale && (
                        <Badge className="bg-red-500 text-white font-bold px-3 py-1">
                          SALE
                        </Badge>
                      )}
                      {isLowStock && (
                        <Badge className="bg-orange-500 text-white font-bold px-3 py-1">
                          Only {stockLevel} left
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="flex gap-3 mt-6 justify-center">
                    {variationImages.map((img, idx) => (
                      <button
                        key={img + idx}
                        onClick={() => {
                          setMainImage(img);
                          setCurrentImageIndex(idx);
                        }}
                        className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                          mainImage === img 
                            ? 'border-primary ring-2 ring-primary/20 shadow-lg' 
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                        style={{ width: 80, height: 80 }}
                      >
                        <img
                          src={img}
                          alt={`Variation ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {mainImage === img && (
                          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Product Details */}
              <div className="lg:w-1/2 w-full p-8 lg:pl-0">
                <div className="space-y-6">
                  {/* Title and Rating */}
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(rating) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {rating} ({reviewCount} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-4xl font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.sale && (
                        <>
                          <span className="text-xl text-gray-400 line-through">
                            ${originalPrice.toFixed(2)}
                          </span>
                          <Badge className="bg-red-100 text-red-600 font-bold px-3 py-1">
                            Save ${savings.toFixed(2)}
                          </Badge>
                        </>
                      )}
                    </div>
                    {product.sale && (
                      <p className="text-sm text-green-600 font-medium">
                        🎉 Limited time offer! Save ${savings.toFixed(2)} on this item.
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      {showFullDescription 
                        ? product.description 
                        : `${product.description.slice(0, 150)}...`
                      }
                      <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className="ml-2 text-primary hover:text-primary/80 font-medium"
                      >
                        {showFullDescription ? 'Read Less' : 'Read More'}
                      </button>
                    </p>
                  </div>


                  {/* Color Selection */}
                  <div>
                    <Label className="block text-sm font-semibold text-gray-700 mb-3">
                      Color
                    </Label>
                  <div className="flex gap-3 flex-wrap">
                    {defaultColors.map((color) => (
                      <Button
                        key={color.name}
                        variant={selectedColor === color.name ? "default" : "outline"}
                        onClick={() => setSelectedColor(color.name)}
                          className={`flex items-center gap-2 min-w-[100px] h-12 transition-all duration-200 ${
                            selectedColor === color.name 
                              ? 'bg-primary text-white shadow-lg' 
                              : 'hover:bg-primary/10'
                          }`}
                      >
                        <span
                            className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: color.hex }}
                          />
                        {color.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selection */}
                  <div>
                    <Label className="block text-sm font-semibold text-gray-700 mb-3">
                      Quantity
                    </Label>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <Button
                          onClick={() => setQuantity(q => Math.max(1, q - 1))}
                          variant="ghost"
                          className="h-12 w-12 rounded-none border-r hover:bg-gray-50"
                        >
                          -
                        </Button>
                        <span className="px-6 py-3 text-lg font-semibold min-w-[60px] text-center">
                          {quantity}
                        </span>
                        <Button
                          onClick={() => setQuantity(q => q + 1)}
                          variant="ghost"
                          className="h-12 w-12 rounded-none border-l hover:bg-gray-50"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Button 
                        size="lg" 
                        className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 h-14 text-lg font-semibold"
                        onClick={handleAddToCart}
                      >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Add to Cart
                      </Button>
                      <Button 
                        size="lg" 
                        className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 h-14 text-lg font-semibold"
                        onClick={handleBuyNow}
                      >
                        Buy Now
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="h-14 w-14 p-0"
                        onMouseEnter={() => setIsWishlistHovered(true)}
                        onMouseLeave={() => setIsWishlistHovered(false)}
                      >
                        <Heart 
                          className={`h-5 w-5 transition-all duration-300 ${
                            isWishlistHovered ? 'fill-red-500 text-red-500' : 'text-gray-600'
                          }`} 
                        />
                      </Button>
                  </div>
                </div>

                  {/* Delivery Checker */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Truck className="h-5 w-5 text-primary" />
                      <Label className="text-sm font-semibold text-gray-700">
                        Check Delivery Availability
                      </Label>
                </div>
                  <div className="flex gap-3">
                    <Input
                      type="text"
                        placeholder="Enter 6-digit pincode"
                      value={pincode}
                      onChange={e => setPincode(e.target.value)}
                      maxLength={6}
                        className="flex-1"
                      />
                      <Button 
                        onClick={handlePincodeCheck} 
                        variant="outline"
                        className="whitespace-nowrap"
                      >
                        Check
                      </Button>
                    </div>
                    {pincodeResult && (
                      <div className={`mt-3 text-sm flex items-center gap-2 ${
                        pincodeResult.includes('✅') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {pincodeResult.includes('✅') ? <Check className="h-4 w-4" /> : null}
                        {pincodeResult}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Size Selection Section */}
        <Card className="mt-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="size-guide" className="border-0">
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Select Your Size</h3>
                      <p className="text-gray-600 text-sm font-normal">Choose the perfect size for your comfort and style</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <div className="space-y-6">
                    {/* Size Chart Image */}
                    <div className="flex justify-center mb-6">
                      <img
                        src="/src/assets/logos/solacewear-shirtdemo.png"
                        alt="Size Chart Guide"
                        className="w-80 h-auto rounded-lg shadow-md"
                      />
                    </div>
                    
                    {/* Measurement Unit Toggle */}
                    <div className="flex items-center justify-center gap-4">
                      <span className="text-sm font-medium text-gray-600">Measurements in:</span>
                      <div className="flex bg-gray-100 rounded-lg p-1">
                        <Button
                          variant={measurementUnit === "cm" ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setMeasurementUnit("cm")}
                          className={`px-4 py-2 transition-all duration-200 ${
                            measurementUnit === "cm" 
                              ? 'bg-primary text-white shadow-md' 
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          CM
                        </Button>
                        <Button
                          variant={measurementUnit === "inches" ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setMeasurementUnit("inches")}
                          className={`px-4 py-2 transition-all duration-200 ${
                            measurementUnit === "inches" 
                              ? 'bg-primary text-white shadow-md' 
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          INCHES
                        </Button>
                      </div>
                    </div>

                    {/* Comprehensive Size Chart */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Size Chart - {measurementUnit.toUpperCase()}</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-300">
                              <th className="text-left py-3 px-2 font-semibold text-gray-700">SIZE</th>
                              <th className="text-left py-3 px-2 font-semibold text-gray-700">CHEST</th>
                              <th className="text-left py-3 px-2 font-semibold text-gray-700">FRONT LENGTH</th>
                              <th className="text-left py-3 px-2 font-semibold text-gray-700">ACROSS SHOULDER</th>
                            </tr>
                          </thead>
                          <tbody>
                            {defaultSizes.map((size) => {
                              const measurements = sizeMeasurements[size as keyof typeof sizeMeasurements];
                              const unit = measurementUnit;
                              return (
                                <tr 
                                  key={size} 
                                  className="border-b border-gray-200 hover:bg-white/50 transition-colors"
                                >
                                  <td className="py-3 px-2 font-medium text-gray-800">{size}</td>
                                  <td className="py-3 px-2 text-gray-600">{measurements.chest[unit]}</td>
                                  <td className="py-3 px-2 text-gray-600">{measurements.frontLength[unit]}</td>
                                  <td className="py-3 px-2 text-gray-600">{measurements.acrossShoulder[unit]}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      
                      {/* Measurement Guide */}
                      <div className="mt-6 p-4 bg-white/60 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-3">How to Measure</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div className="space-y-2">
                            <div><strong>Chest:</strong> Measure around the fullest part of your chest</div>
                            <div><strong>Front Length:</strong> Measure from shoulder to bottom hem</div>
                          </div>
                          <div className="space-y-2">
                            <div><strong>Across Shoulder:</strong> Measure from shoulder seam to shoulder seam</div>
                            <div><strong>Fit:</strong> Regular fit for comfortable wear</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Products</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover more products from the same category that you might love
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} onAddToCart={() => {}} />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;