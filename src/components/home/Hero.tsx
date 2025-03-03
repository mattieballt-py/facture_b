
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/50 z-0"></div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Manufacturing Made <span className="text-primary">Simple</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-in" style={{ animationDelay: '0.1s' }}>
              Connect with the perfect manufacturer for your project. Browse categories, compare quotes, and get your products made with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/categories">
                <Button size="lg" className="w-full sm:w-auto">
                  Browse Categories
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  How It Works
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center space-x-6 animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex -space-x-4">
                <img
                  alt="User"
                  className="h-12 w-12 rounded-full border-2 border-background"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
                <img
                  alt="User"
                  className="h-12 w-12 rounded-full border-2 border-background"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
                <img
                  alt="User"
                  className="h-12 w-12 rounded-full border-2 border-background"
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
              </div>
              <div className="text-sm">
                <p className="text-foreground font-medium">Trusted by 2,000+ companies</p>
                <p className="text-muted-foreground">Join our growing network</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 lg:h-[32rem] w-full">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <img
                  src="https://images.unsplash.com/photo-1581092921461-7d25c8e28e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Manufacturing facility"
                  className="w-full h-full object-cover transition-transform-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium">State-of-the-art manufacturing facilities</p>
                  <p className="text-white/80 text-sm">Access global capabilities with a few clicks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
