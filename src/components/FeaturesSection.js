import React from 'react';

function FeaturesSection() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
      <h2 className="text-2xl font-bold text-red-500">Features</h2>
      <ul>
        <li className="text-lg text-gray-600">Secure Transaction Service</li>
        <li className="text-lg text-gray-600">Escrow Payment Protection</li>
        <li className="text-lg text-gray-600">Verified Vendors</li>
      </ul>
    </div>
  );
}

export default FeaturesSection;