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
export const CartDispatchContext = createContext<React.Dispatch<CartAction>>(() => {
  throw new Error('Dispatch must be used within CartProvider');
});

export function CartProvider ({ children }: { children: React.ReactNode }) {
  const [magnets, dispatch] = useReducer(cartReducer, []);

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
  const magnet = magnets.find((magnet) => newMagnet.id === magnet.id);
  if (magnet) {
    magnet.quantity++;
    return [...magnets];
  }

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
