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
      per_page: 100,
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
//fetch product variation details
export async function fetchWooCommerceProductVariations(productId: number) {
  try {
    const response = await api.get(`products/${productId}/variations`, {
      per_page: 100,
    });
    return response;
  } catch (error: any) {
    throw new Error((error as Error).message);
  }
}
//fetch product details
export async function fetchWooCommerceProduct(productId: number) {
  try {
    const response = await api.get(`products/${productId}`);
    return response;
  } catch (error: any) {
    throw new Error((error as Error).message);
  }
}
