// app/api/import-orders/route.js
import { fetchWooCommerceOrders } from "@/lib/wooCommerceApi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: any) {
  try {
    const response = await fetchWooCommerceOrders();
    const orders = response.data.map(
      (order: {
        id: string;
        status: any;
        payment_method_title: any;
        line_items: any[];
      }) => ({
        id: order.id,
        status: order.status,
        paymentMethodTitle: order.payment_method_title,
        files: order.line_items.map(
          (item: { image: { src: any } }) => item.image.src
        ),
      })
    );

    await Promise.all(
      orders.map(async (order: { id: any }) => {
        const { billing, total, currency, line_items } = response.data.find(
          (o: { id: any }) => o.id === order.id
        );

        await prisma.project.create({
          data: {
            orderId: order.id.toString(),
            customerName: `${billing.first_name} ${billing.last_name}`,
            customerEmail: billing.email,
            customerPhone: billing.phone,
            customerAddress: `${billing.address_1} ${billing.address_2}`,
            orderTotal: total,
            orderCurrency: currency,
            orderItems: line_items,
            completionDate: new Date(),
          },
        });
      })
    );

    return new Response(
      JSON.stringify({ message: "Orders imported successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching orders:", error);
    return new Response(JSON.stringify({ error: "Error importing orders" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
