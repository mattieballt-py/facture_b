
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary transition-all-200 hover:opacity-80"
          >
            ManufaMarket
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/categories" className="text-foreground/80 hover:text-primary transition-all-200">
              Categories
            </Link>
            <Link to="/suppliers" className="text-foreground/80 hover:text-primary transition-all-200">
              Suppliers
            </Link>
            <Link to="/how-it-works" className="text-foreground/80 hover:text-primary transition-all-200">
              How It Works
            </Link>
          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center relative max-w-md w-full mx-4">
            <Input
              type="text"
              placeholder="Search for manufacturing services..."
              className="w-full py-2 pl-4 pr-10 rounded-full border border-border bg-background/80"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for manufacturing services..."
                className="w-full py-2 pl-4 pr-10 rounded-full"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-1 top-1/2 -translate-y-1/2"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/categories" 
                className="text-foreground/80 hover:text-primary transition-all-200 p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/suppliers" 
                className="text-foreground/80 hover:text-primary transition-all-200 p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Suppliers
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-foreground/80 hover:text-primary transition-all-200 p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
            </nav>
            <div className="flex items-center space-x-4 pt-2">
              <Link to="/cart" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart
                </Button>
              </Link>
              <Link to="/login" className="flex-1" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                  Login
                </Button>
              </Link>
            </div>
            <Link to="/signup" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
