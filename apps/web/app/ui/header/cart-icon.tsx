import style from './cart-icon.module.css';
import { useMemo } from 'react';
import { useCart } from '../../providers/cart-provider';
import { LuShoppingCart } from 'react-icons/lu';

export default function CartIcon() {
  const { quantityById } = useCart();

  const totalMagnetCount = useMemo(() => {
    return quantityById.values().reduce((totalMagnetCount, quantity) => {
      return totalMagnetCount += quantity;
    }, 0);
  }, [quantityById]);


  return (
    <div className={style.cartIconWrapper}>
      <LuShoppingCart />
      { totalMagnetCount > 0 && <span className={style.cartQuantity}>{ totalMagnetCount }</span> }
    </div>
  );
}
