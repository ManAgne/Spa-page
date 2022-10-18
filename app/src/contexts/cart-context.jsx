import * as React from 'react';

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  const cartContextValue = React.useMemo(() => ({
    cartItems,
    addToCart: (item) => {
      if (cartItems.find((x) => x.id === item.id)) {
        setCartItems(cartItems.map((x) => (x.id === item.id
          ? { ...x, count: x.count + item.count }
          : x)));
      } else {
        setCartItems([...cartItems, item]);
      }
    },
  }), [cartItems]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
