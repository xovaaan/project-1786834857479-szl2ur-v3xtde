import React from 'react';
import { Card } from '@/components/ui/card';

function Features() {
  return (
    <section className="bg-white bg-opacity-50 backdrop-blur-md py-12 px-6">
      <h2 className="text-3xl font-bold text-primary mb-6">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white bg-opacity-50 backdrop-blur-md p-6">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80&auto=format&fit=crop" alt="Feature 1" className="w-full h-40 object-cover rounded-lg" />
          <h3 className="text-2xl font-bold text-gray-900 mt-4">Feature 1</h3>
          <p className="text-lg text-gray-900 mt-2">Some text here with full content, our AI agency provides the best services to our clients.</p>
        </Card>
        <Card className="bg-white bg-opacity-50 backdrop-blur-md p-6">
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80&auto=format&fit=crop" alt="Feature 2" className="w-full h-40 object-cover rounded-lg" />
          <h3 className="text-2xl font-bold text-gray-900 mt-4">Feature 2</h3>
          <p className="text-lg text-gray-900 mt-2">Some text here with full content, our AI agency provides the best services to our clients.</p>
        </Card>
        <Card className="bg-white bg-opacity-50 backdrop-blur-md p-6">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80&auto=format&fit=crop" alt="Feature 3" className="w-full h-40 object-cover rounded-lg" />
          <h3 className="text-2xl font-bold text-gray-900 mt-4">Feature 3</h3>
          <p className="text-lg text-gray-900 mt-2">Some text here with full content, our AI agency provides the best services to our clients.</p>
        </Card>
      </div>
    </section>
  );
}

export default Features;
