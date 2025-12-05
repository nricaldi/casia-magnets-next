import style from './cart-icon.module.css';
import { useMemo } from 'react';
import { useCart } from '../../providers/cart-provider';
import { LuShoppingCart } from 'react-icons/lu';

export default function CartIcon() {
  const magnets = useCart();

  const totalMagnetCount = useMemo(() => {
    console.log('new magnets: ', magnets);
    console.log('unique current length:', magnets.length)

    const count = magnets.reduce((totalMagnetCount, magnet) => {
      return totalMagnetCount += magnet.quantity;
    }, 0);

    console.log('total count:', count);

    return count;
  }, [magnets]);


  return (
    <div className={style.cartIconWrapper}>
      <LuShoppingCart />
      <span>{ totalMagnetCount }</span>
    </div>
  );
}
