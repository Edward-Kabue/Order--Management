// eslint-disable-next-line @next/next/no-img-element
// @format
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React, { useState, useEffect } from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { fetchWooCommerceProducts } from "@/lib/wooCommerceApi";
import { Button } from "@/components/ui/button";

type Props = {};
type Product = {
  id: number;
  name: string;
  variations: {
    id: number;
    name: string;
  }[];
  image: {
    src: string;
  };
};

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "image",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div>
          <img
            src={product.image.src}
            alt={product.name}
            className="w-20 h-auto object-cover rounded"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div>
          <div>
            <p className="font-medium">{product.name}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "variations",
    header: "Variations",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div>
          {product.variations.length > 0 && (
            <p className="text-gray-500">
              {product.variations.length} variation(s)
            </p>
          )}
        </div>
      );
    },
  },
];

export default function ProductsPage({}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const actions = (row: any) => (
    <div>
      <Button onClick={() => handleEdit(row)}>Edit</Button>
      <Button onClick={() => handleDelete(row)}>Delete</Button>
    </div>
  );
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetchWooCommerceProducts();
        const products = response.data.map((product: any) => ({
          id: product.id,
          name: product.name,
          variations: product.variations.map((variation: any) => ({
            id: variation.id,
            name: variation.name,
          })),
          image: {
            src: product.images[0]?.src || "", // Fallback to empty string if no images
          },
        }));
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Products" />
      {isLoading ? (
        <div className="flex justify-center items-center pt-10">
          {/* SVG loader code */}
        </div>
      ) : (
        <DataTable columns={columns} data={products} actions={actions} />
      )}
    </div>
  );
}
function handleEdit(row: any): void {
  throw new Error("Function not implemented.");
}

function handleDelete(row: any): void {
  throw new Error("Function not implemented.");
}
