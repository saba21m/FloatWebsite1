import React, { useRef } from 'react';
import HeroSection from '../components/sections/HeroSection';
import CategoryCard from '../components/ui/CategoryCard';
import { 
  Battery, 
  Cable, 
  Smartphone, 
  Headphones, 
  ShieldCheck, 
  Zap,
  Speaker,
  Wifi,
  Watch,
  Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tech Enthusiast",
      content: "The quality of FLOAT's accessories is unmatched. I've been using their chargers and cases for over a year now, and they're still as good as new.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Michael Chen",
      role: "Professional Photographer",
      content: "Their phone cases provide excellent protection while maintaining the sleek look of my device. Highly recommend FLOAT for quality mobile accessories.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Emma Thompson",
      role: "Digital Nomad",
      content: "FLOAT's power banks are a lifesaver during my travels. Reliable, fast-charging, and surprisingly lightweight. Couldn't be happier with my purchase.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="page-enter-active">
      <HeroSection scrollToNextSection={scrollToNextSection} />
      
      {/* About Section */}
      <section ref={aboutSectionRef} className="section bg-white" id="about">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Premium Mobile Accessories for Every Device</h2>
            <p className="text-lg text-gray-600">
              At FLOAT, we're passionate about creating premium mobile accessories that enhance 
              your everyday tech experience. Our products combine cutting-edge technology, 
              superior craftsmanship, and elegant design to deliver accessories that are built to last.
            </p>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous testing to ensure it meets our high standards of quality and durability.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovative Design</h3>
              <p className="text-gray-600">
                Our team constantly innovates to bring you the latest technology and designs that match your lifestyle.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <Battery size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Long-lasting Performance</h3>
              <p className="text-gray-600">
                Built to last, our accessories deliver consistent performance day after day, year after year.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="section bg-gray-50" id="categories">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="mb-2">Product Categories</h2>
            <p className="text-gray-600 max-w-2xl">
              Find the perfect accessories for your device from our wide range of product categories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              title="Chargers & Cables" 
              icon={<Cable size={36} />} 
              url="#" 
            />
            <CategoryCard 
              title="Phone Cases" 
              icon={<Smartphone size={36} />} 
              url="#" 
            />
            <CategoryCard 
              title="Headphones" 
              icon={<Headphones size={36} />} 
              url="#" 
            />
            <CategoryCard 
              title="Power Banks" 
              icon={<Battery size={36} />} 
              url="#" 
            />
            <CategoryCard 
              title="Speakers" 
              icon={<Speaker size={36} />} 
              url="#" 
            />
            <CategoryCard 
              title="WiFi Gadgets" 
              icon={<Wifi size={36} />} 
              url="#" 
            />
            <CategoryCard 
              title="Smart Watches" 
              icon={<Watch size={36} />} 
              url="#" 
            />
            <CategoryCard 
              title="Camera Accessories" 
              icon={<Camera size={36} />} 
              url="#" 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">What Our Customers Say</h2>
            <p className="text-gray-600">
              Don't just take our word for it - hear from some of our satisfied customers about their experience with FLOAT accessories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Upgrade Your Mobile Experience?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Get in touch with our team for personalized recommendations.
          </p>
          <Link to="/contact" className="btn border-2 border-white text-white hover:bg-blue-700">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;