// eslint-disable-next-line @next/next/no-img-element
// @format
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React, { useState, useEffect } from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { fetchWooCommerceOrders } from "@/lib/wooCommerceApi"; // Import the fetchWooCommerceOrders function

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

  useEffect(() => {
    const fetchOrders = async () => {
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
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={orders} />
    </div>
  );
}