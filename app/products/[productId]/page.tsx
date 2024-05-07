// src/app/products/[productId]/page.tsx

"use client";
import {
  fetchWooCommerceProduct,
  fetchWooCommerceProductVariations,
} from "@/lib/wooCommerceApi";
import { Product } from "@/lib/wooCommerceTypes";
import { useParams, useRouter } from "next/navigation";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";

export default function ProductDetails() {
  const router = useRouter();
  const { productId } = useParams();
  const [variations, setVariations] = useState([]);
  const [product, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productResponse = await fetchWooCommerceProduct(
          Number(productId)
        );
        const variationsResponse = await fetchWooCommerceProductVariations(
          Number(productId)
        );

        setProduct(productResponse.data);
        setVariations(variationsResponse.data);
        console.log("Product details:", productResponse.data);
        console.log("Product variations:", variationsResponse.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
      <p>Product Name: {product.name}</p>
      <p>Product Description: {product.description}</p>
      <p>Product Price: {product.price}</p>
      {variations.map(
        (variation: {
          attributes: any;
          key: ReactNode;
          price: ReactNode;
          id: Key | null | undefined;
          name:
            | string
            | number
            | bigint
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | Promise<AwaitedReactNode>
            | null
            | undefined;
        }) => {
          return (
            <p key={variation.id}>
              {variation.attributes.map(
                (attribute: {
                  price: ReactNode;
                  name: ReactNode;
                  option: ReactNode;
                  id: Key | null | undefined;
                }) => {
                  return (
                    <div key={attribute.id}>
                      {attribute.name}: {attribute.option},
                      <p>price{attribute.price}</p>
                    </div>
                  );
                },
                []
              )}
              {variation.price},
            </p>
          );
        },
        []
      )}
    </div>
  );
}
