import React from 'react';
import TeamMember from '../components/ui/TeamMember';

const About: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Faiz Waqas',
      position: 'CEO',
      imageSrc: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Umar Riaz',
      position: 'Head of Sales & Performance (Boys) & Media Manager',
      imageSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'Junaid Ahmed',
      position: 'Product Manager',
      imageSrc: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      name: 'Sarmad Masood',
      position: 'Head of Supply Chain & Delivery Operations',
      imageSrc: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      name: 'Umar Siddique',
      position: 'Compliance & Quality Control Officer',
      imageSrc: 'https://images.pexels.com/photos/2379172/pexels-photo-2379172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 6,
      name: 'Aiman Khalid',
      position: 'Head of Sales & Performance (Girls)',
      imageSrc: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 7,
      name: 'Saba Asif',
      position: 'Human Resource & Onboarding Coordinator',
      imageSrc: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 8,
      name: 'Mariam',
      position: 'Finance & Accounts Manager',
      imageSrc: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 9,
      name: 'Areeba Anwar',
      position: 'Inventory & Content Manager',
      imageSrc: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <div className="page-enter-active pt-24">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="mb-6">About FLOAT</h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Dedicated to bringing the best mobile accessories to enhance your tech experience.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2020, FLOAT began with a simple mission: to create mobile accessories that combine premium quality, innovative design, and exceptional functionality. What started as a small venture has grown into a trusted brand for tech enthusiasts around the globe.
              </p>
              <p className="text-gray-700 mb-4">
                We believe that mobile accessories should enhance your device experience, not complicate it. That's why every product we design undergoes rigorous testing to ensure it meets our high standards of quality and user-friendliness.
              </p>
              <p className="text-gray-700">
                Today, we're proud to offer a wide range of accessories, from power banks and charging cables to protective cases and audio solutions, all designed to elevate your mobile experience.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="FLOAT team working together" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Our Values</h2>
            <p className="text-gray-700">
              At FLOAT, our core values guide everything we do, from product development to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Innovation</h3>
              <p className="text-gray-600 text-center">
                We constantly seek new ideas and technologies to improve our products and stay ahead of trends.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Quality</h3>
              <p className="text-gray-600 text-center">
                We're committed to creating products of the highest quality that stand the test of time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Customer Satisfaction</h3>
              <p className="text-gray-600 text-center">
                Our customers are at the heart of everything we do, and their satisfaction is our ultimate goal.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Meet Our Team</h2>
            <p className="text-gray-700">
              Our dedicated team of professionals works tirelessly to bring you the best mobile accessories on the market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                position={member.position}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Us CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Join the FLOAT Family</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, we'd love to hear from you.
          </p>
          <a href="/contact" className="btn bg-white text-blue-600 hover:bg-blue-50">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;