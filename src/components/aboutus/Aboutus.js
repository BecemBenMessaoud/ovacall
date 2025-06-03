import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Local images
import girl from '../../assets/images/girl.png';

const teamMembers = [
  {
    name: 'John Doe',
    image: girl,
    linkedin: 'https://linkedin.com/in/johndoe',
  },
  {
    name: 'Jane Smith',
    image: girl,
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    name: 'Robert Johnson',
    image: girl,
    linkedin: 'https://linkedin.com/in/robertjohnson',
  },
  {
    name: 'Emily Davis',
    image: girl,
    linkedin: 'https://linkedin.com/in/emilydavis',
  },
];

const Aboutus = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleAboutClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('Team');
    if (element) {
      const yOffset = -80; // Adjust this offset as needed (negative moves scroll position up)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20" id="Team">
      <div className="max-w-7xl mx-auto px-1">
        <a
          href="#Team"
          onClick={handleAboutClick}
          className="inline-block mb-3 px-4 py-1 text-lg font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition"
        >
          About Us
        </a>

        <h2
          className="text-3xl lg:text-5xl font-bold text-[#1c1c1c] mb-5"
          data-aos="fade-down"
        >
          The team behind Ovacall
        </h2>

        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl">
          At Ovacall, we go beyond traditional call center services. we combine advanced expertise with genuine empathy to create customer experiences that go beyond answering calls. We become an integral part of your business, understanding your values and goals to deliver personalized support that builds lasting relationships.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="fade-up"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full h-[350px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>

              {/* LinkedIn Logo */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-6 h-6 hover:opacity-80 transition"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
