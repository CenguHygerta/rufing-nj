import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

interface PortfolioProps {
  images?: string[];
}

// Example categories based on typical services (customize as needed)
const categories = [
  { key: 'roofing', label: 'Roofing' },
  { key: 'guttering', label: 'Guttering' },
  { key: 'repairs', label: 'Repairs' },
];

// Simulated image data (replace with real images/services as needed)
const imagesByCategory: Record<string, string[]> = {
  roofing: [
    '/media/WhatsApp Image 2025-06-23 at 21.26.00_f3ab5d80.jpg',
    '/media/WhatsApp Image 2025-06-23 at 21.25.37_f0165984.jpg',
    '/media/WhatsApp Image 2025-06-23 at 21.25.37_bbcdd99e.jpg',
  ],
  guttering: [
    '/media/WhatsApp Image 2025-06-23 at 21.25.37_3227bbf5.jpg',
    '/media/WhatsApp Image 2025-06-23 at 21.25.37_06d23d90.jpg',
  ],
  repairs: [
    '/media/WhatsApp Image 2025-06-23 at 21.25.36_c3e69011.jpg',
    '/media/WhatsApp Image 2025-06-23 at 21.25.32_ea8c087e.jpg',
  ],
};

const Portfolio: React.FC<PortfolioProps> = ({ images }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const [categoryImages, setCategoryImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCategoryImages(images ? images : imagesByCategory[activeCategory] || []);
      setLoading(false);
    }, 400);
  }, [activeCategory, images]);

  return (
    <section className="my-12">
      <div className="text-center space-y-4 mb-10">
        <Badge className="bg-blue-100 text-blue-800">Our Work</Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Portfolio</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our recent projects by service category. Click a tab to view examples of our work.
        </p>
      </div>
      {!images && (
        <div className="flex justify-center space-x-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`px-5 py-2 rounded-full font-semibold transition-colors border-2 focus:outline-none ${
                activeCategory === cat.key
                  ? 'bg-blue-600 text-white border-blue-600 shadow'
                  : 'bg-white text-blue-700 border-blue-200 hover:bg-blue-50'
              }`}
              onClick={() => setActiveCategory(cat.key)}
              aria-pressed={activeCategory === cat.key}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}
      {loading ? (
        <div className="text-center text-blue-600 font-semibold py-12">Loading images...</div>
      ) : categoryImages.length === 0 ? (
        <div className="text-center text-gray-500 py-12">No images available for this category.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categoryImages.map((src, idx) => (
            <Card key={idx} className="overflow-hidden shadow hover:shadow-lg transition-shadow">
              <Image
                src={src}
                alt={`Portfolio image ${idx + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-56 md:h-64 transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
