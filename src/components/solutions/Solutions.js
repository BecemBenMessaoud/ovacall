import React from 'react';

const cards = [
  {
    id: 1,
    image: require('../../assets/images/leftlogo.png'),
    title: 'Tailored B2B solutions',
    description: 'We design custom strategies aligned with your unique business goals, ensuring measurable results and lasting impact..'
  },
  {
    id: 2,
    image: require('../../assets/images/wallet.png'),
    title: 'Multilingual Sales & Support',
    description: 'Engage your customers in their preferred language, our team is fluent in English and French delivering support across markets..'
  },
  {
    id: 3,
    image: require('../../assets/images/people.png'),
    title: 'Expert Agents, Ready to Go',
    description: 'Our professional agents are fully trained and ready to integrate with your operations, extending your team’s capabilities..'
  }
];

const Solutions = () => {
  return (
    <div className="bg-white py-12 px-8 lg:px-6 lg:px-20" id="Solutions">
      <div className="max-w-9xl mx-auto">
        <a
          href="#"
          className="inline-block mb-3 px-4 py-1 text-lg font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition"
        >
          Solutions
        </a>
        <h2 className="text-3xl font-extrabold mb-10 text-gray-900">What do we bring to your business</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm text-center hover:shadow-md transition duration-300 w-80 mx-auto"
            >
              {/* Image section with background */}
              <div className="bg-[#F6F9FC] p-6 rounded-t-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-24 h-24 mx-auto object-contain"
                />
              </div>

              {/* Full-width divider */}
              <div className="w-full h-px bg-gray-300" />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
