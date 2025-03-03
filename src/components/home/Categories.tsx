
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const categories = [
  {
    id: 'cnc-machining',
    name: 'CNC Machining',
    description: 'Precision machined parts with tight tolerances',
    image: 'https://images.unsplash.com/photo-1619343346332-a1e9e27e151d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: '3d-printing',
    name: '3D Printing',
    description: 'Rapid prototyping and low-volume production',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'injection-molding',
    name: 'Injection Molding',
    description: 'High-volume production of plastic parts',
    image: 'https://images.unsplash.com/photo-1611296753697-abe3ad487cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 'sheet-metal',
    name: 'Sheet Metal',
    description: 'Custom metal fabrication and forming',
    image: 'https://images.unsplash.com/photo-1614104480990-296a19929dbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'PCB assembly and electronic manufacturing',
    image: 'https://images.unsplash.com/photo-1588648252539-6ea63afcec4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    color: 'from-red-500/20 to-rose-500/20',
  },
  {
    id: 'surface-treatment',
    name: 'Surface Treatment',
    description: 'Finishing, coating, and surface enhancements',
    image: 'https://images.unsplash.com/photo-1633707307121-8a688fd9ae0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80',
    color: 'from-indigo-500/20 to-violet-500/20',
  },
];

const Categories = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse Manufacturing Categories</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Find the perfect manufacturing process for your project from our wide range of specialized services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category.id}
              to={`/categories/${category.id}`}
              className="group relative overflow-hidden rounded-2xl hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-80 transition-all duration-500 group-hover:opacity-95",
                category.color
              )}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/80">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/categories">
            <button className="text-primary font-medium transition-all-200 hover:text-primary/80 inline-flex items-center">
              View All Categories
              <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
