"use client"

import { CartProvider } from "./cart-provider.tsx";

export function CartProviderWrapper({ children }: { children: React.ReactNode } ) {
  return <CartProvider>{children}</CartProvider>;
};
