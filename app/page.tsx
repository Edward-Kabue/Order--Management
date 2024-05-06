"use client"; // This line tells Next.js that this is a Client Component


import { fetchWooCommerceProducts } from "@/utils/wooCommerceApi";
import { Product, Variation } from "@/utils/wooCommerceTypes";
import Image from "next/image";
import { useEffect, useState } from "react";

// import { fetchWooCommerceProducts } from "@/utils/wooCommerceApi";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchWooCommerceProducts();
        setProducts(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  
  return (
    <ul>
    {products.map((product) => (
      <li key={product.id}>
        <h2>{product.name}</h2>
        {product.images.length > 0 && (
          <img
            src={product.images[0].src}
            alt={product.images[0].alt}
            width={200}
            height={200}
          />
        )}
    
      </li>
    ))}

  </ul>
  );
}
