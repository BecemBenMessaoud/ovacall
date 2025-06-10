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
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white" id="Team">
      <div className="max-w-6xl mx-auto px-4 md:px-4">
        <a
          href="#Team"
          onClick={handleAboutClick}
          className="inline-flex items-center gap-2 mb-5 px-4 py-2 uppercase text-sm font-semibold text-[#3289FF] border border-[#3289FF]/50 bg-[#E4EFFE] rounded-full"
          style={{
            fontFamily: 'Inter',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '20px',
            width: '149px',
            height: '40px',
            flexShrink: 0,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0003 1.6665C5.40866 1.6665 1.66699 5.40817 1.66699 9.99984C1.66699 14.5915 5.40866 18.3332 10.0003 18.3332C14.592 18.3332 18.3337 14.5915 18.3337 9.99984C18.3337 5.40817 14.592 1.6665 10.0003 1.6665ZM9.37533 6.6665C9.37533 6.32484 9.65866 6.0415 10.0003 6.0415C10.342 6.0415 10.6253 6.32484 10.6253 6.6665V10.8332C10.6253 11.1748 10.342 11.4582 10.0003 11.4582C9.65866 11.4582 9.37533 11.1748 9.37533 10.8332V6.6665ZM10.767 13.6498C10.7253 13.7582 10.667 13.8415 10.592 13.9248C10.5087 13.9998 10.417 14.0582 10.317 14.0998C10.217 14.1415 10.1087 14.1665 10.0003 14.1665C9.89199 14.1665 9.78366 14.1415 9.68366 14.0998C9.58366 14.0582 9.49199 13.9998 9.40866 13.9248C9.33366 13.8415 9.27533 13.7582 9.23366 13.6498C9.19199 13.5498 9.16699 13.4415 9.16699 13.3332C9.16699 13.2248 9.19199 13.1165 9.23366 13.0165C9.27533 12.9165 9.33366 12.8248 9.40866 12.7415C9.49199 12.6665 9.58366 12.6082 9.68366 12.5665C9.88366 12.4832 10.117 12.4832 10.317 12.5665C10.417 12.6082 10.5087 12.6665 10.592 12.7415C10.667 12.8248 10.7253 12.9165 10.767 13.0165C10.8087 13.1165 10.8337 13.2248 10.8337 13.3332C10.8337 13.4415 10.8087 13.5498 10.767 13.6498Z"
              fill="#3289FF"
            />
          </svg>
          About Us
        </a>
<h2
  className="text-[40px] leading-[48px] font-semibold text-[#191F34] font-['Inter'] mb-5 text-center lg:text-left"
  data-aos="fade-down"
>
  The team behind Ovacall
</h2>


        <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-3xl text-center lg:text-left">
          At Ovacall, we go beyond traditional call center services. We combine advanced expertise
          with genuine empathy to create customer experiences that go beyond answering calls.
          We become an integral part of your business, understanding your values and goals
          to deliver personalized support that builds lasting relationships.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center" data-aos="fade-up">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full h-[300px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-center">{member.name}</h3>
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
