"use client"

import styles from "./magnet.module.css";

type MagnetStepperProps = {
  quantity: number,
  onIncrement: () => void,
  onDecrement: () => void
};

export default function MagnetStepper({ quantity, onIncrement, onDecrement }: MagnetStepperProps) {
  return (
    <div className={styles.inputWrapper}>
      <button className={styles.stepperButton} onClick={onDecrement}>-</button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.stepperButton} onClick={onIncrement}>+</button>
    </div>
  );
}
