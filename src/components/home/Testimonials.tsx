
import React from 'react';

const testimonials = [
  {
    quote: "ManufaMarket completely transformed our product development process. We found a reliable manufacturer within days instead of months.",
    name: "Sarah Johnson",
    title: "Product Manager, TechInnovate",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    quote: "The ability to compare quotes and manufacturing capabilities all in one place saved us countless hours of research and negotiations.",
    name: "David Chen",
    title: "CEO, Quantum Devices",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    quote: "We've been able to scale our production rapidly thanks to the network of manufacturers we found through ManufaMarket.",
    name: "Emily Rodriguez",
    title: "Operations Director, GreenTech Solutions",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Join thousands of businesses that have found the perfect manufacturing partners through our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-8 transition-all-300 hover:shadow-md"
            >
              <svg className="h-10 w-10 text-primary/70 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-primary/5 rounded-2xl p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to find your perfect manufacturing partner?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have streamlined their manufacturing process with ManufaMarket.
          </p>
          <button className="bg-primary text-white rounded-lg px-8 py-3 font-medium transition-all-200 hover:bg-primary/90">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
