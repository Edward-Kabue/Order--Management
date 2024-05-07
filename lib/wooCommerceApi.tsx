import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { env } from "process";
// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "https://89graphics.com/",
  consumerKey: process.env.NEXT_PUBLIC_WOOCOMMERCE_KEY || "",
  consumerSecret: process.env.NEXT_PUBLIC_WOOCOMMERCE_SECRET || "",
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products", {
      per_page: 100, // 20 products per page
    });
    return response;
  } catch (error: any) {
    throw new Error((error as Error).message);
  }
}

//fetch all completed orders
export async function fetchWooCommerceOrders() {
  try {
    const response = await api.get("orders", {
      status: "completed",
    });
    return response;
  } catch (error: any) {
    throw new Error((error as Error).message);
  }
}
