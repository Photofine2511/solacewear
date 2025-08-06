import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";

const defaultSizes = ["S", "M", "L", "XL", "XXL"];
const defaultColors = [
  { name: "White", hex: "#FFFFFF" },
  { name: "Black", hex: "#000000" },
  { name: "Navy", hex: "#1B365D" },
  { name: "Red", hex: "#DC2626" }
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState<string>(defaultSizes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(defaultColors[0].name);
  const [quantity, setQuantity] = useState<number>(1);
  const [pincode, setPincode] = useState<string>("");
  const [pincodeResult, setPincodeResult] = useState<string>("");
  const [cartItemsCount] = useState(0); // Placeholder, replace with real cart logic
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState<string>(product?.image || "");
  const variationImages = [
    product?.image || "",
    "/src/assets/product-sweater.jpg",
    "/src/assets/product-jacket.jpg",
    "/src/assets/product-hoodie.jpg",
  ];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl font-bold text-gray-700">Product not found.</div>
      </div>
    );
  }

  const handlePincodeCheck = () => {
    // Mock pincode check
    if (pincode.length === 6 && /^[0-9]+$/.test(pincode)) {
      setPincodeResult("Delivery available to this pincode!");
    } else {
      setPincodeResult("Please enter a valid 6-digit pincode.");
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

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemsCount={cartItemsCount} onCartOpen={() => {}} />
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-12">
              {/* Left: Product Image */}
              <div className="md:w-2/5 w-full flex justify-center items-start px-4 py-8">
                <div className="w-full flex flex-col items-center">
                  <div className="overflow-hidden rounded-lg shadow-md w-full max-w-md aspect-square group flex items-center justify-center mb-4">
                    <img
                      src={mainImage}
                      alt={product.name}
                      className="w-full h-full max-w-[400px] max-h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  {/* Variation Images */}
                  <div className="flex gap-3 mt-2">
                    {variationImages.map((img, idx) => (
                      <button
                        key={img+idx}
                        onClick={() => setMainImage(img)}
                        className={`border rounded-md p-1 bg-white transition-all duration-200 ${mainImage === img ? 'ring-2 ring-primary' : 'hover:shadow-md'}`}
                        style={{ width: 64, height: 64 }}
                        aria-label={`Show variation ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt={`Variation ${idx + 1}`}
                          className="w-full h-full object-cover rounded"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right: Product Details */}
              <div className="md:w-3/5 w-full flex flex-col justify-start px-4 py-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl font-bold mb-4">{product.name}</CardTitle>
                </CardHeader>
                <div className="mb-8 text-gray-700 text-base">{product.description}</div>
                {/* Sizes */}
                <div className="mb-6">
                  <Label className="block mb-2">Size Available</Label>
                  <div className="flex gap-3 flex-wrap">
                    {defaultSizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
                {/* Colors */}
                <div className="mb-6">
                  <Label className="block mb-2">Colors Available</Label>
                  <div className="flex gap-3 flex-wrap">
                    {defaultColors.map((color) => (
                      <Button
                        key={color.name}
                        variant={selectedColor === color.name ? "default" : "outline"}
                        onClick={() => setSelectedColor(color.name)}
                        className="flex items-center gap-2"
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color.hex }}
                        ></span>
                        {color.name}
                      </Button>
                    ))}
                  </div>
                </div>
                {/* Quantity Selection */}
                <div className="mb-6">
                  <Label className="block mb-2">Quantity</Label>
                  <div className="flex items-center gap-3">
                    <Button onClick={() => setQuantity(q => Math.max(1, q - 1))} variant="outline">-</Button>
                    <span className="px-4">{quantity}</span>
                    <Button onClick={() => setQuantity(q => q + 1)} variant="outline">+</Button>
                  </div>
                </div>
                {/* Add to Cart & Buy Now */}
                <div className="mb-8 flex gap-4">
                  <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-accent-glow">Add To Cart</Button>
                  <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-accent-glow" onClick={handleBuyNow}>Buy Now</Button>
                </div>
                {/* Pincode Checker */}
                <div className="mb-10">
                  <Label className="block mb-2">Check Delivery Availability</Label>
                  <div className="flex gap-3">
                    <Input
                      type="text"
                      placeholder="Enter pincode"
                      value={pincode}
                      onChange={e => setPincode(e.target.value)}
                      maxLength={6}
                      className="w-40"
                    />
                    <Button onClick={handlePincodeCheck} variant="outline">Check</Button>
                  </div>
                  {pincodeResult && (
                    <div className="mt-3 text-sm text-blue-700">{pincodeResult}</div>
                  )}
                </div>
                <Separator className="my-8" />
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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