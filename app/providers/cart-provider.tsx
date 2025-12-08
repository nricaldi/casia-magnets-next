import { createContext, useContext, useReducer, useMemo } from 'react';
import type { Image as MagnetImage } from "../types/image";

type CartItem = MagnetImage & {
  quantity: number
};
type CartState = CartItem[];
type CartAction =
  | { type: 'added'; item: MagnetImage }
  | { type: 'removed'; id: number }
  | { type: 'cleared' };
type CartContextValue = {
  magnets: CartState,
  quantityById: Map<number, number>
};

export const CartContext = createContext<CartState>({ magnets: [], quantityById: {} });
export const CartDispatchContext = createContext<React.Dispatch<CartAction>>(() => {
  throw new Error('Dispatch must be used within CartProvider');
});

export function CartProvider ({ children }: { children: React.ReactNode }) {
  const [magnets, dispatch] = useReducer(cartReducer, []);
  const quantityById = useMemo(() => {
    return magnets.reduce((magnetMap, magnet) => {
      magnetMap.set(magnet.id, magnet.quantity);
      return magnetMap;
    }, new Map());
  }, [magnets]);

  const cartValue = {
    magnets,
    quantityById
  };

  return (
    <CartContext value={cartValue}>
      <CartDispatchContext value={dispatch}>
        {children}
      </CartDispatchContext>
    </CartContext>
  );
};

export function useCart () {
  return useContext(CartContext);
};

export function useCartDispatch () {
  return useContext(CartDispatchContext);
};

function addMagnet (magnets: CartState, newMagnet: MagnetImage ): CartState {
  const magnet = magnets.find((magnet) => newMagnet.id === magnet.id);
  if (magnet) {
    return [...magnets.filter(({ id }) => id !== newMagnet.id), {
      ...magnet,
      quantity: magnet.quantity + 1
    }];
  }

  return [...magnets, {
    id: newMagnet.id,
    url: newMagnet.url,
    size: newMagnet.size,
    alt: newMagnet.alt,
    quantity: 1
  }];
};

function removeMagnet (magnets: CartState, id: number) {
  return magnets.filter((magnet) => magnet.id !== id);
};

function cartReducer (magnets: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'added': { return addMagnet(magnets, action.item); }
    case 'removed': { return removeMagnet(magnets, action.id); }
    case 'cleared': { return []; }
    default: { throw Error('Unknown action action type'); }
  };
};
