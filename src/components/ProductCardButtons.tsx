import React from 'react';
import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

interface ProductButtonsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxCountReacher = useCallback(() => {
    return counter === maxCount;
  }, [counter, maxCount]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxCountReacher() ? styles.disabled : ''
        }`}
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  );
};
