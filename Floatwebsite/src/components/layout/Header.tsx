import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Smartphone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Smartphone className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-2xl font-bold text-gray-900">FLOAT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink 
            to="/"
            className={({ isActive }) => 
              isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
            }
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
            }
          >
            Contact
          </NavLink>
          <Link to="/contact" className="btn btn-primary ml-4">
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-3">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                isActive ? 'navbar-link navbar-link-active py-3' : 'navbar-link py-3'
              }
              onClick={toggleMenu}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                isActive ? 'navbar-link navbar-link-active py-3' : 'navbar-link py-3'
              }
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                isActive ? 'navbar-link navbar-link-active py-3' : 'navbar-link py-3'
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <Link 
              to="/contact" 
              className="btn btn-primary w-full text-center mt-4"
              onClick={toggleMenu}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;