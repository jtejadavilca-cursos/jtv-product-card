# JTV-Product-Card

Este es un paquete de pruebas de despliegue de un paquete de npm

## Autor: Jose Tejada

## Fecha: 2025-01-15

## Versión: 1.0.0

### Ejemplo:

```typescript
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from 'jtv-product-card';
```

```html
<ProductCard
                product={product}
                initialValues={{
                    count: 4,
                }}
            >
    {({}) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>
```
