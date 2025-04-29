import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="page-enter-active pt-24">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="mb-6">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            We'd love to hear from you! Connect with us through any of our contact channels below.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="mb-6">Get in Touch</h2>
                <p className="text-gray-700 mb-8">
                  Have questions about our products or services? Need help choosing the right accessory for your device? 
                  Our team is here to help!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <MapPin className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Our Location</h3>
                      <p className="text-gray-600 mt-1">
                        123 Tech Boulevard, Innovation District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                      <p className="text-gray-600 mt-1">
                        info@floataccessories.com<br />
                        support@floataccessories.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Phone className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                      <p className="text-gray-600 mt-1">
                        +1 (555) 123-4567<br />
                        Mon-Fri, 9am-5pm EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <MessageSquare className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                      <a 
                        href="https://wa.me/15551234567"
                        className="text-blue-600 hover:text-blue-700 mt-1 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Message us on WhatsApp
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <Clock className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                      <div className="text-gray-600 mt-1">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 3:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Section */}
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946229!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1667309513800!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;