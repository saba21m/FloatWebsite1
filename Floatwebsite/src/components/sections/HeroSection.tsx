import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  scrollToNextSection: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToNextSection }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/80 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
        }}
      />
      
      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="max-w-2xl animate-slide-up">
          <h1 className="text-white mb-6 font-bold">
            <span className="block text-blue-400 text-xl md:text-2xl mb-2">Elevate Your Tech</span>
            Upgrade Your Mobile Experience
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
            Premium quality mobile accessories designed to complement your lifestyle. 
            From sleek phone cases to powerful chargers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/#products">
              <Button variant="primary" size="lg" className="whitespace-nowrap">
                Our Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 whitespace-nowrap">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
     
    </section>
  );
};

export default HeroSection;