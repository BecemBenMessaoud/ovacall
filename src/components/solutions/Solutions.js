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
    <div id="Solutions" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bouton "Solutions" avec SVG */}
        <a
          href="#"
          className="inline-flex items-center gap-2 w-[160px] h-[40px] mb-4 px-4 py-2 rounded-[24px] border border-[#3289FF80] bg-[#E4EFFE] text-[#3289FF] text-[14px] font-semibold uppercase"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0013 1.66602C5.40964 1.66602 1.66797 5.40768 1.66797 9.99935C1.66797 14.591 5.40964 18.3327 10.0013 18.3327C14.593 18.3327 18.3346 14.591 18.3346 9.99935C18.3346 5.40768 14.593 1.66602 10.0013 1.66602ZM13.9846 8.08268L9.25963 12.8077C9.14297 12.9243 8.98464 12.991 8.81797 12.991C8.6513 12.991 8.49297 12.9243 8.3763 12.8077L6.01797 10.4493C5.7763 10.2077 5.7763 9.80768 6.01797 9.56602C6.25963 9.32435 6.65964 9.32435 6.9013 9.56602L8.81797 11.4827L13.1013 7.19935C13.343 6.95768 13.743 6.95768 13.9846 7.19935C14.2263 7.44102 14.2263 7.83268 13.9846 8.08268Z"
              fill="#3289FF"
            />
          </svg>
          <span>Solutions</span>
        </a>

        <h2 className="text-[#191F34] font-inter text-[40px] font-semibold leading-[48px] mb-10">
  What do we bring to your business
</h2>


        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm text-center hover:shadow-md transition duration-300 w-80 mx-auto"
            >
              <div className="bg-[#F6F9FC] p-6 rounded-t-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-24 h-24 mx-auto object-contain"
                />
              </div>

              <div className="w-full h-px bg-gray-300" />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
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
