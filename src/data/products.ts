import React from "react";
import { Product } from "../types/product";
import productTshirt from "../assets/product-tshirt.jpg";
import productHoodie from "../assets/product-hoodie.jpg";
import productJeans from "../assets/product-jeans.jpg";
import productSneakers from "../assets/product-sneakers.jpg";
import productJacket from "../assets/product-jacket.jpg";
import productSweater from "../assets/product-sweater.jpg";
import productChinos from "../assets/product-chinos.jpg";
import productToteBag from "../assets/product-totebag.jpg";
import productCap from "../assets/product-cap.jpeg";
import productStripedTee from "../assets/product-striped-tee.jpeg";
import productBikerJacket from "../assets/product-biker-jacket.jpeg";
import productBeanie from "../assets/product-beanie.jpeg";
import productJoggers from "../assets/product-joggers.jpeg";
import productCrewneck from "../assets/product-crewneck.jpeg";
import productGraphicTee from "../assets/product-graphic-tee.jpeg";
import productRunningShorts from "../assets/product-running-shorts.jpeg";
import productOvercoat from "../assets/product-overcoat.jpeg";
import productTankTop from "../assets/product-tanktop.jpeg";


export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Tee",
    price: 29.99,
    image: productTshirt,
    category: "T-Shirts",
    description: "A timeless white t-shirt made from premium organic cotton. Soft, comfortable, and perfect for everyday wear.",
  },
  {
    id: 2,
    name: "Cozy Black Hoodie",
    price: 79.99,
    image: productHoodie,
    category: "Hoodies",
    description: "Ultra-soft fleece hoodie with a relaxed fit. Features a kangaroo pocket and adjustable drawstring hood.",
  },
  {
    id: 3,
    name: "Premium Denim Jeans",
    price: 89.99,
    image: productJeans,
    category: "Jeans",
    description: "Classic straight-leg jeans crafted from premium denim. Comfortable stretch fit with timeless styling.",
  },
  {
    id: 4,
    name: "Minimalist Sneakers",
    price: 119.99,
    image: productSneakers,
    category: "Footwear",
    description: "Clean, minimalist sneakers with premium leather construction. Versatile design perfect for any occasion.",
  },
  {
    id: 5,
    name: "Olive Field Jacket",
    price: 149.99,
    image: productJacket,
    category: "Outerwear",
    description: "Lightweight field jacket in olive green. Features multiple pockets and a water-resistant finish.",
  },
  {
    id: 6,
    name: "Comfort Knit Sweater",
    price: 69.99,
    image: productSweater,
    category: "Sweaters",
    description: "Soft merino wool blend sweater with a relaxed fit. Perfect for layering or wearing on its own.",
  },
  {
    id: 7,
    name: "Slim Fit Chinos",
    price: 59.99,
    image: productChinos,
    category: "Pants",
    description: "Modern slim fit chinos made from soft cotton twill. Ideal for both casual and smart looks.",
  },
  {
    id: 8,
    name: "Canvas Tote Bag",
    price: 39.99,
    image: productToteBag,
    category: "Accessories",
    description: "Durable canvas tote bag with reinforced handles. Great for shopping, beach days, or everyday errands.",
  },
  {
    id: 9,
    name: "Classic Baseball Cap",
    price: 24.99,
    image: productCap,
    category: "Accessories",
    description: "Adjustable cotton baseball cap with embroidered logo. Available in multiple colors.",
  },
  {
    id: 10,
    name: "Striped Long Sleeve Tee",
    price: 34.99,
    image: productStripedTee,
    category: "T-Shirts",
    description: "Lightweight long sleeve tee with classic horizontal stripes. Ideal for layering or standalone wear.",
  },
  {
    id: 11,
    name: "Faux Leather Biker Jacket",
    price: 99.99,
    image: productBikerJacket,
    category: "Outerwear",
    description: "Edgy faux leather biker jacket with asymmetrical zipper and moto detailing.",
  },
  {
    id: 12,
    name: "Chunky Knit Beanie",
    price: 19.99,
    image: productBeanie,
    category: "Accessories",
    description: "Cozy ribbed beanie with fold-over cuff. Keeps you warm in style.",
  },
  {
    id: 13,
    name: "Athletic Jogger Pants",
    price: 49.99,
    image: productJoggers,
    category: "Pants",
    description: "Tapered joggers with drawstring waist and zippered pockets. Great for workouts or lounging.",
  },
  {
    id: 14,
    name: "Relaxed Fit Crewneck",
    price: 54.99,
    image: productCrewneck,
    category: "Sweaters",
    description: "Classic crewneck sweatshirt in a relaxed fit. Made from mid-weight French terry fabric.",
  },
  {
    id: 15,
    name: "Oversized Graphic Tee",
    price: 32.99,
    image: productGraphicTee,
    category: "T-Shirts",
    description: "Oversized t-shirt with vintage-inspired graphic print. Soft and breathable cotton fabric.",
  },
  {
    id: 16,
    name: "Performance Running Shorts",
    price: 44.99,
    image: productRunningShorts,
    category: "Shorts",
    description: "Lightweight shorts with inner lining and moisture-wicking technology. Designed for runners.",
  },
  {
    id: 17,
    name: "Wool Overcoat",
    price: 199.99,
    image: productOvercoat,
    category: "Outerwear",
    description: "Timeless wool overcoat with structured shoulders and button front. Perfect for formal winter wear.",
  },
  {
    id: 18,
    name: "Ribbed Tank Top",
    price: 22.99,
    image: productTankTop,
    category: "T-Shirts",
    description: "Fitted ribbed tank top made from stretch cotton. A staple layering piece.",
  }, 
];