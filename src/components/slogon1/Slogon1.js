import React from 'react';

const cards = [
  {
    id: 1,
    image: require('../../assets/images/bgBannerTwo.png'),
    title: 'Lead Qualification',
    description: 'We help you focus on real opportunities by filtering high-intent leads.'
  },
  {
    id: 2,
    image: require('../../assets/images/bgBannerTwo.png'),
    title: 'Appointment Scheduling',
    description: 'Never miss a chance to connect — we book meetings directly into your calendar.'
  },
  {
    id: 3,
    image: require('../../assets/images/bgBannerTwo.png'),
    title: 'Sales Follow-up',
    description: 'Our agents nurture leads and keep conversations going to close more deals.'
  }
];

const SlogonCards = () => {
  return (
    <div className="bg-white py-12 px-8 lg:px-6 lg:px-20" id="services">
      <div className="max-w-9xl mx-auto">
         <a
      href="#"
      className="inline-block mb-3 px-4 py-1 text-lg font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition"
    >
      Solutions
    </a>
        <h2 className="text-3xl font-extrabold  mb-10 text-gray-900">What We Offer</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-24 h-24 mx-auto mb-4 object-cover rounded-full"
              />
              
              {/* Full-width skinny gray line */}
              <div className="w-full h-px bg-gray-300 mb-4" />

              <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlogonCards;
