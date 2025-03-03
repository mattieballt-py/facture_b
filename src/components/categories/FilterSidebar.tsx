
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
  filters: any;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange, filters }) => {
  const handlePriceChange = (value: number[]) => {
    onFilterChange({ ...filters, price: value });
  };

  const handleLeadTimeChange = (value: string) => {
    const leadTimes = { ...filters.leadTimes };
    leadTimes[value] = !leadTimes[value];
    onFilterChange({ ...filters, leadTimes });
  };

  const handleQuantityChange = (value: string) => {
    const quantities = { ...filters.quantities };
    quantities[value] = !quantities[value];
    onFilterChange({ ...filters, quantities });
  };

  const handleLocationChange = (value: string) => {
    const locations = { ...filters.locations };
    locations[value] = !locations[value];
    onFilterChange({ ...filters, locations });
  };

  const handleCertificationChange = (value: string) => {
    const certifications = { ...filters.certifications };
    certifications[value] = !certifications[value];
    onFilterChange({ ...filters, certifications });
  };

  const resetFilters = () => {
    onFilterChange({
      price: [0, 10000],
      leadTimes: {
        '1-3 days': false,
        '4-7 days': false,
        '1-2 weeks': false,
        '2+ weeks': false,
      },
      quantities: {
        '1-10': false,
        '11-100': false,
        '101-1000': false,
        '1000+': false,
      },
      locations: {
        'North America': false,
        'Europe': false,
        'Asia': false,
        'Other': false,
      },
      certifications: {
        'ISO 9001': false,
        'ISO 14001': false,
        'AS9100': false,
        'IATF 16949': false,
      },
    });
  };

  return (
    <div className="w-full max-w-xs space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={resetFilters}
          className="w-full mb-6"
        >
          Reset All Filters
        </Button>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-medium text-sm text-foreground/80">Price Range</h4>
        <Slider
          defaultValue={filters.price}
          max={10000}
          step={100}
          onValueChange={handlePriceChange}
          className="my-6"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${filters.price[0]}</span>
          <span>${filters.price[1]}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <h4 className="font-medium text-sm text-foreground/80">Lead Time</h4>
        {Object.keys(filters.leadTimes).map((leadTime) => (
          <div key={leadTime} className="flex items-center space-x-2">
            <Checkbox
              id={`leadTime-${leadTime}`}
              checked={filters.leadTimes[leadTime]}
              onCheckedChange={() => handleLeadTimeChange(leadTime)}
            />
            <Label
              htmlFor={`leadTime-${leadTime}`}
              className="text-sm font-normal cursor-pointer"
            >
              {leadTime}
            </Label>
          </div>
        ))}
      </div>
      
      <div className="space-y-3">
        <h4 className="font-medium text-sm text-foreground/80">Quantity</h4>
        {Object.keys(filters.quantities).map((quantity) => (
          <div key={quantity} className="flex items-center space-x-2">
            <Checkbox
              id={`quantity-${quantity}`}
              checked={filters.quantities[quantity]}
              onCheckedChange={() => handleQuantityChange(quantity)}
            />
            <Label
              htmlFor={`quantity-${quantity}`}
              className="text-sm font-normal cursor-pointer"
            >
              {quantity} units
            </Label>
          </div>
        ))}
      </div>
      
      <div className="space-y-3">
        <h4 className="font-medium text-sm text-foreground/80">Location</h4>
        {Object.keys(filters.locations).map((location) => (
          <div key={location} className="flex items-center space-x-2">
            <Checkbox
              id={`location-${location}`}
              checked={filters.locations[location]}
              onCheckedChange={() => handleLocationChange(location)}
            />
            <Label
              htmlFor={`location-${location}`}
              className="text-sm font-normal cursor-pointer"
            >
              {location}
            </Label>
          </div>
        ))}
      </div>
      
      <div className="space-y-3">
        <h4 className="font-medium text-sm text-foreground/80">Certifications</h4>
        {Object.keys(filters.certifications).map((certification) => (
          <div key={certification} className="flex items-center space-x-2">
            <Checkbox
              id={`certification-${certification}`}
              checked={filters.certifications[certification]}
              onCheckedChange={() => handleCertificationChange(certification)}
            />
            <Label
              htmlFor={`certification-${certification}`}
              className="text-sm font-normal cursor-pointer"
            >
              {certification}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
