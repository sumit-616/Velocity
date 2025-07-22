import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { state } = useCart();
  const location = useLocation();
  const cartItemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors">
            VELOCITY
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`hover:text-red-500 transition-colors ${isActive('/') ? 'text-red-500' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`hover:text-red-500 transition-colors ${isActive('/products') ? 'text-red-500' : ''}`}
            >
              Shop
            </Link>
            <Link 
              to="/category/tees" 
              className={`hover:text-red-500 transition-colors ${location.pathname.includes('/category') ? 'text-red-500' : ''}`}
            >
              Racing Tees
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hover:text-red-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            <Link to="/auth/login" className="hover:text-red-500 transition-colors">
              <User className="w-5 h-5" />
            </Link>
            
            <Link to="/cart" className="relative hover:text-red-500 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            <button className="md:hidden">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;