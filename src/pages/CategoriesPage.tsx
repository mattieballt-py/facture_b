
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import CategoryCard from '@/components/categories/CategoryCard';

const categories = [
  {
    id: 'cnc-machining',
    name: 'CNC Machining',
    description: 'Precision machined parts with tight tolerances',
    image: 'https://images.unsplash.com/photo-1619343346332-a1e9e27e151d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    color: 'from-blue-500/20 to-cyan-500/20',
    count: 128,
  },
  {
    id: '3d-printing',
    name: '3D Printing',
    description: 'Rapid prototyping and low-volume production',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
    color: 'from-purple-500/20 to-pink-500/20',
    count: 95,
  },
  {
    id: 'injection-molding',
    name: 'Injection Molding',
    description: 'High-volume production of plastic parts',
    image: 'https://images.unsplash.com/photo-1611296753697-abe3ad487cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    color: 'from-green-500/20 to-emerald-500/20',
    count: 78,
  },
  {
    id: 'sheet-metal',
    name: 'Sheet Metal',
    description: 'Custom metal fabrication and forming',
    image: 'https://images.unsplash.com/photo-1614104480990-296a19929dbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80',
    color: 'from-orange-500/20 to-amber-500/20',
    count: 115,
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'PCB assembly and electronic manufacturing',
    image: 'https://images.unsplash.com/photo-1588648252539-6ea63afcec4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    color: 'from-red-500/20 to-rose-500/20',
    count: 64,
  },
  {
    id: 'surface-treatment',
    name: 'Surface Treatment',
    description: 'Finishing, coating, and surface enhancements',
    image: 'https://images.unsplash.com/photo-1633707307121-8a688fd9ae0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80',
    color: 'from-indigo-500/20 to-violet-500/20',
    count: 42,
  },
  {
    id: 'casting',
    name: 'Casting',
    description: 'Metal casting services for various industries',
    image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1009&q=80',
    color: 'from-yellow-500/20 to-amber-500/20',
    count: 38,
  },
  {
    id: 'composites',
    name: 'Composites',
    description: 'Advanced composite materials and manufacturing',
    image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    color: 'from-teal-500/20 to-cyan-500/20',
    count: 27,
  },
  {
    id: 'packaging',
    name: 'Packaging',
    description: 'Custom packaging solutions for products',
    image: 'https://images.unsplash.com/photo-1607435097405-db48f377bff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    color: 'from-lime-500/20 to-green-500/20',
    count: 56,
  },
];

const CategoriesPage = () => {
  return (
    <MainLayout>
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse Manufacturing Categories</h1>
            <p className="text-muted-foreground text-lg">
              Explore our comprehensive range of manufacturing categories to find the perfect production solution for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-in">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                image={category.image}
                color={category.color}
                count={category.count}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
                <p className="text-muted-foreground mb-6">
                  Our team can help you source the right manufacturing process for your unique requirements.
                </p>
                <Link to="/contact">
                  <button className="bg-primary text-white rounded-lg px-6 py-3 font-medium transition-all-200 hover:bg-primary/90 inline-block">
                    Contact Our Experts
                  </button>
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Custom manufacturing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CategoriesPage;
