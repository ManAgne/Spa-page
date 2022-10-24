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

    cartItemsCount: cartItems.reduce((sum, { count }) => sum + count, 0),

    getSubtotal: cartItems.reduce((prevSum, { count, price }) => prevSum + count * price, 0),

    deleteItem: (id) => setCartItems(cartItems.filter((x) => x.id !== id)),
  }), [cartItems]);

  return (
    <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
