"use client"
// context/cart.tsx

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
  showPopup: boolean; // Added showPopup state
  popupMessage: string; // Added message for the popup
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false); // Track if we're on the client side
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showPopup, setShowPopup] = useState(false); // Track whether the popup is shown
  const [popupMessage, setPopupMessage] = useState(''); // Message to display in the popup

  useEffect(() => {
    setIsClient(true);
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    if (isClient && cartItems.length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems, isClient]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    // Show the popup with a message
    setPopupMessage(`${product.name} has been added to your cart!`);
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => {
      const updatedCart = prev.filter((item) => item.id !== productId);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const increaseQuantity = (productId: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  if (!isClient) {
    return null; // Prevent rendering the component until client-side is mounted
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, showPopup, popupMessage }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
