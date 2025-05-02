import React from 'react';
import heroBanner from '../assets/hero-banner.jpg';

const Hero = () => (
  <section className="relative">
    <img src={heroBanner} alt="Hero Banner" className="w-full max-h-[400px] object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">Welcome to Our Store</h1>
    </div>
  </section>
);

export default Hero;
