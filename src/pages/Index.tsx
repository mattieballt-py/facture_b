
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <HowItWorks />
      <Testimonials />
    </MainLayout>
  );
};

export default Index;
