import React from 'react';

interface TeamMemberProps {
  name: string;
  position: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, imageSrc }) => {
  return (
    <div className="card hover:translate-y-[-5px]">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={imageSrc} 
          alt={`${name} - ${position}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{position}</p>
      </div>
    </div>
  );
};

export default TeamMember;