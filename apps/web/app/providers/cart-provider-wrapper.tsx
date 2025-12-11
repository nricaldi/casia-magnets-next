"use client"

import { CartProvider } from "./cart-provider";

export function CartProviderWrapper({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
};
