import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((cartItem) => {
        return cartItem.id === product.id;
      });
      if (existingProduct) {
        return prevCart.map((cartItem) => {
          if (cartItem.id === product.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        });
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((cartItem) => {
        return cartItem.id !== productId;
      });
    });
  };

  const cartCount = cart.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);

  const handleIncreaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((cartItem) => {
        if (cartItem.id === productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
    });
  };

  const handleDecreaseQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart
        .map((cartItem) => {
          if (cartItem.id === productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        })
        .filter((cartItem) => {
          return cartItem.quantity > 0;
        });
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        cartCount,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
