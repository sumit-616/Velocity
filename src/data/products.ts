import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'tees', name: 'Racing Tees', image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg', isActive: true },
  { id: 'jackets', name: 'Speed Jackets', image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg', isActive: false },
  { id: 'caps', name: 'Racing Caps', image: 'https://images.pexels.com/photos/1124460/pexels-photo-1124460.jpeg', isActive: false },
  { id: 'accessories', name: 'Pit Accessories', image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg', isActive: false },
  { id: 'limited', name: 'Limited Edition', image: 'https://images.pexels.com/photos/1124461/pexels-photo-1124461.jpeg', isActive: false },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Monaco GP Racing Tee',
    price: 89.99,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    category: 'tees',
    description: 'Premium cotton tee inspired by the legendary Monaco Grand Prix circuit.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Silverstone Speed Tee',
    price: 94.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    category: 'tees',
    description: 'Racing-inspired design celebrating the home of British motorsport.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Pit Crew Performance Tee',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg',
    category: 'tees',
    description: 'Technical fabric tee designed for maximum performance and comfort.',
    inStock: true,
  },
  {
    id: '4',
    name: 'Formula Racing Heritage Tee',
    price: 99.99,
    image: 'https://images.pexels.com/photos/1124460/pexels-photo-1124460.jpeg',
    category: 'tees',
    description: 'Vintage-inspired design celebrating F1 racing heritage.',
    inStock: false,
  },
  {
    id: '5',
    name: 'Grid Position Tee',
    price: 84.99,
    image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg',
    category: 'tees',
    description: 'Bold graphics inspired by starting grid formations.',
    inStock: true,
  },
  {
    id: '6',
    name: 'Podium Victory Tee',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1124461/pexels-photo-1124461.jpeg',
    category: 'tees',
    description: 'Celebrate racing victories with this premium design.',
    inStock: true,
  }
];