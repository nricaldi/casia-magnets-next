import style from './cart-icon.module.css';
import { useMemo } from 'react';
import { useCart } from '../../providers/cart-provider';
import { LuShoppingCart } from 'react-icons/lu';

export default function CartIcon() {
  const magnets = useCart();

  const totalMagnetCount = useMemo(() => {
    return magnets.reduce((totalMagnetCount, magnet) => {
      return totalMagnetCount += magnet.quantity;
    }, 0);
  }, [magnets]);


  return (
    <div className={style.cartIconWrapper}>
      <LuShoppingCart />
      { totalMagnetCount > 0 && <span className={style.cartQuantity}>{ totalMagnetCount }</span> }
    </div>
  );
}
