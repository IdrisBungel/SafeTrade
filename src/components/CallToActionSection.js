import React from 'react';

function CallToActionSection() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
      <h2 className="text-2xl font-bold text-red-500">Join the SafeTrade Community Today</h2>
      <p className="text-lg text-gray-600">Sign up now and start enjoying secure online transactions</p>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign Up Now</button>
    </div>
  );
}

export default CallToActionSection;