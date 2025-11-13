import style from './cart-icon.module.css';
import { useCart } from '../../providers/cart-provider';
import { LuShoppingCart } from 'react-icons/lu';

export default function CartIcon() {
  const magnets = useCart();

  console.log(magnets.length);

  return (
    <div className={style.cartIconWrapper}>
      <LuShoppingCart />
    </div>
  );
}
