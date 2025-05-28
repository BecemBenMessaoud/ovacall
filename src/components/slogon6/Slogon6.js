import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com/in/johndoe',
  },
  {
    name: 'Jane Smith',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com/in/janesmith',
  },
  {
    name: 'Robert Johnson',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com/in/robertjohnson',
  },
  {
    name: 'Emily Davis',
    image: 'https://via.placeholder.com/150',
    linkedin: 'https://linkedin.com/in/emilydavis',
  },
];

const Slogon6 = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="py-20 bg-[#f9f9f9]" id="Team">
      <div className="max-w-6xl mx-auto px-4 ">
        <a
          href="#"
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

        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl ">
          We are a team of passionate professionals dedicated to delivering excellence through collaboration, creativity, and commitment. Get to know the people behind our success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="fade-up"
            >
              {/* Card */}
              <div className="bg-white rounded-xl shadow-lg flex flex-col items-center p-6 min-h-[280px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover"
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

export default Slogon6;
