import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Trophy, Target } from 'lucide-react';
import { categories } from '../data/products';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-red-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            RACE-INSPIRED
            <br />
            <span className="text-red-500">STREETWEAR</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Premium racing-inspired apparel for champions on and off the track
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Speed Design</h3>
              <p className="text-gray-600">Aerodynamic cuts inspired by Formula 1 engineering</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Championship Quality</h3>
              <p className="text-gray-600">Premium materials worthy of the podium</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Precision Fit</h3>
              <p className="text-gray-600">Tailored for optimal performance and comfort</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Racing Collections</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={category.id} className="group">
                {category.isActive ? (
                  <Link to={`/category/${category.id}`} className="block">
                    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-sm">{category.name}</h3>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative overflow-hidden rounded-lg shadow-md opacity-75 cursor-not-allowed">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-sm">{category.name}</h3>
                      <p className="text-gray-300 text-xs">Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Race?</h2>
          <p className="text-xl mb-8">Join the elite community of racing enthusiasts</p>
          <Link 
            to="/auth/signup" 
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Join the Grid
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;