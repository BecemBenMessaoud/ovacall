import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blogCards = [
  {
    title: 'Revolutionizing Healthcare with AI',
    image: 'https://via.placeholder.com/400x250',
    description:
      'Explore how artificial intelligence is transforming diagnostics, treatments, and patient care.',
    link: '#',
  },
  {
    title: 'Top Trends in Digital Health 2025',
    image: 'https://via.placeholder.com/400x250',
    description:
      'Stay ahead of the curve with insights into the biggest digital health trends this year.',
    link: '#',
  },
  {
    title: 'How Ovacall Supports Pharmacies',
    image: 'https://via.placeholder.com/400x250',
    description:
      'Discover how Ovacall is empowering pharmacies to streamline services and improve outcomes.',
    link: '#',
  },
];

const Slogon7 = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="py-20 bg-white" id="Articles">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top section with tag and button */}
        <div className="flex justify-between items-center mb-3">
          <a
            href="#"
            className="inline-block px-4 py-1 text-lg font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition"
          >
            Blog
          </a>
          <button className="bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition">
Discover our Blog          </button>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl lg:text-5xl font-bold text-gray-800 mb-12"
          data-aos="fade-down"
        >
          What is new in sales
          <br />
          and support
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-xl shadow-lg overflow-hidden flex flex-col"
              data-aos="fade-up"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                <div className="text-left">
                  <a
                    href={card.link}
                    className="inline-flex items-center text-[#66cccc] font-semibold hover:underline text-sm"
                  >
                    Read it now <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slogon7;
