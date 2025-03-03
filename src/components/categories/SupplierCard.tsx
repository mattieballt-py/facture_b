
import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Clock, MapPin, Star, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SupplierCardProps {
  supplier: {
    id: string;
    name: string;
    description: string;
    image: string;
    rating: number;
    reviewCount: number;
    minOrderValue: number;
    leadTime: string;
    location: string;
    certifications: string[];
    specialties: string[];
  };
}

const SupplierCard: React.FC<SupplierCardProps> = ({ supplier }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all-300 overflow-hidden border border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="relative h-full w-full min-h-[200px] md:min-h-0">
            <img
              src={supplier.image}
              alt={supplier.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        <div className="md:col-span-3 p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              <Link to={`/suppliers/${supplier.id}`}>
                <h3 className="text-xl font-bold hover:text-primary transition-all-200">
                  {supplier.name}
                </h3>
              </Link>
              <div className="flex items-center mt-1 mb-2">
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < supplier.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm ml-2">
                  ({supplier.reviewCount} reviews)
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {supplier.certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">{supplier.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <DollarSign className="h-4 w-4 mr-2 text-primary/70" />
              Min. Order: ${supplier.minOrderValue}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2 text-primary/70" />
              Lead Time: {supplier.leadTime}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2 text-primary/70" />
              {supplier.location}
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Specialties</h4>
            <div className="flex flex-wrap gap-2">
              {supplier.specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link to={`/suppliers/${supplier.id}`} className="flex-1">
              <Button variant="outline" className="w-full">View Profile</Button>
            </Link>
            <Link to={`/request-quote/${supplier.id}`} className="flex-1">
              <Button className="w-full">Request Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierCard;
