import React from 'react';
import { createContext } from 'react';

import { useProduct } from '../hooks';
import styles from '../styles/styles.module.css';
import {
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductCartInitialValues,
  ProductContextProps,
} from '../interfaces';

export const ProductContext = createContext({
  // counter: 0,
  // increaseBy: (value: number) => {},
  // product: {} as Product,
} as ProductContextProps);

const { Provider } = ProductContext;

interface PropsProductCard {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children?: (args: ProductCardHandlers) => React.JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: ProductCartInitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: PropsProductCard) => {
  const {
    counter,
    maxCount,
    isMaxCountReached,
    increaseBy,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            increaseBy,
            isMaxCountReached,
            maxCount,
            product,
            reset,
          })}
      </div>
    </Provider>
  );
};
