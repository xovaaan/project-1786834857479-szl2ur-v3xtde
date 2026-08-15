import React from 'react';

function Hero() {
  return (
    <section className="bg-white bg-opacity-50 backdrop-blur-md py-12 px-6 flex flex-col items-center justify-center">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop" alt="Hero Image" className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-4xl font-bold text-primary mt-6">Build and deploy on the AI Cloud.</h1>
      <p className="text-lg text-gray-900 mt-4">Some text here with full content, our AI agency provides the best services to our clients.</p>
      <button className="bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md shadow mt-6">Learn More</button>
    </section>
  );
}

export default Hero;
