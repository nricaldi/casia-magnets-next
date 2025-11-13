import { createContext, useContext, useReducer } from 'react';

type CartItem = {
  type: 'magnet'
  id: number,
  url: string,
  quantity: number
};
type CartState = CartItem[];
type CartAction =
  | { type: 'added'; item: { id: number; url: string } }
  | { type: 'removed'; id: number }
  // | { type: 'qtyChanged'; id: number; quantity: number }
  | { type: 'cleared' };

export const CartContext = createContext<CartState>([]);
export const CartDispatchContext = createContext<React.Dispatch<CartAction> | null>(null);

export function CartProvider ({ children }: { children: React.ReactNode }) {
  const [magnets, dispatch] = useReducer(cartReducer, initialMagnets);

  return (
    <CartContext value={magnets}>
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

function addMagnet (magnets: CartState, newMagnet:{ id: number, url: string }): CartState {
  // handle if the magnet is already in the cart (increment the quantity
  return [...magnets, {
    type: 'magnet',
    id: newMagnet.id,
    url: newMagnet.url,
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

const initialMagnets: CartState = [
  { id: 0, type: 'magnet', url: '', quantity: 1 },
  { id: 1, type: 'magnet', url: '', quantity: 2 },
  { id: 2, type: 'magnet', url: '', quantity: 3 }
];
