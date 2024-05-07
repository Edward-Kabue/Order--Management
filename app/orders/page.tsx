// eslint-disable-next-line @next/next/no-img-element
// @format
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React, { useState, useEffect } from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { fetchWooCommerceOrders } from "@/lib/wooCommerceApi";

type Props = {};
type Order = {
  id: number;
  status: string;
  date_created: string;
  payment_method_title: string;
};

const columns: ColumnDef<Order>[] = [
  { accessorKey: "id", header: "Order" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "pending",
            "bg-orange-200": row.getValue("status") === "processing",
            "bg-green-200": row.getValue("status") === "completed",
          })}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  { accessorKey: "date_created", header: "Last Order" },
  { accessorKey: "payment_method_title", header: "Method" },
];

export default function OrdersPage({}: Props) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const response = await fetchWooCommerceOrders();
        const orders = response.data.map((order: any) => ({
          id: order.id,
          status: order.status,
          date_created: order.date_created,
          payment_method_title: order.payment_method_title,
        }));
        setOrders(orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Orders" />
      {isLoading ? (
        <div className="flex justify-center items-center pt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-48 h-48 animate-bounce"
          >
            <circle
              fill="#FF156D"
              stroke="#FF156D"
              strokeWidth="15"
              r="15"
              cx="40"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0.4"
              ></animate>
            </circle>
            <circle
              fill="#FF156D"
              stroke="#FF156D"
              strokeWidth="15"
              r="15"
              cx="100"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0.2"
              ></animate>
            </circle>
            <circle
              fill="#FF156D"
              stroke="#FF156D"
              strokeWidth="15"
              r="15"
              cx="160"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0"
              ></animate>
            </circle>
          </svg>
        </div>
      ) : (
        <DataTable columns={columns} data={orders} />
      )}
    </div>
  );
}