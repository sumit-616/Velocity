import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
}

interface CartContextType {
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.product.id === action.product.id);
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.product.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          items: updatedItems,
          total: calculateTotal(updatedItems),
        };
      }
      
      const newItems = [...state.items, { product: action.product, quantity: 1 }];
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.product.id !== action.productId);
      return {
        items: newItems,
        total: calculateTotal(newItems),
      };
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.quantity <= 0) {
        const newItems = state.items.filter(item => item.product.id !== action.productId);
        return {
          items: newItems,
          total: calculateTotal(newItems),
        };
      }
      
      const updatedItems = state.items.map(item =>
        item.product.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      );
      return {
        items: updatedItems,
        total: calculateTotal(updatedItems),
      };
    }
    
    case 'CLEAR_CART':
      return { items: [], total: 0 };
    
    default:
      return state;
  }
};

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};