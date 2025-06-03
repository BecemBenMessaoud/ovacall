import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import phoneIcon from '../../assets/images/phone.png';
import locationIcon from '../../assets/images/localisation.png';
import unionBg from '../../assets/images/Union.png';

const Contactus = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease' });
  }, []);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const [confirmedDate, setConfirmedDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name && number) {
      window.open(
        `mailto:contact@ovacall.com?subject=INSCRIPTION&body=Bonjour je suis ${name}, Email: ${email}, Téléphone: ${number}. ${message}`
      );
      setTimeout(() => setSubmitted(true), 5000);
    }
  };

  const handleConfirmDate = () => {
    setConfirmedDate(date);
    setShowCalendar(false);
  };

  return (
    <div
      id="Contact"
      className="relative flex items-center justify-center min-h-screen bg-[#191F34] bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${unionBg})` }}
    >
      {/* Overlay behind popup when calendar is open */}
      {showCalendar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowCalendar(false)}
        />
      )}

      <div className="w-full max-w-7xl mx-auto py-12 grid gap-10 md:grid-cols-2 items-center" data-aos="fade-up">
        {/* Left Side */}
        <div className="space-y-8 z-50 relative">
          <a
            href="#"
            className="inline-block px-6 py-2 text-lg font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition"
          >
            Contact
          </a>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Ready to elevate your sales with Ovacall?
          </h1>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <img src="/icons/email.png" alt="email" className="w-6 h-6 mt-1" />
              <div>
                <p className="text-xs text-gray-300 font-semibold uppercase">Email</p>
                <p className="text-white text-base">contact@ovacall.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src={phoneIcon} alt="phone" className="w-6 h-6 mt-1" />
              <div>
                <p className="text-xs text-gray-300 font-semibold uppercase">Call Us</p>
                <p className="text-white text-base">+216 ********</p>
                <p className="text-white text-base">+33 ********</p>
                <p className="text-white text-base">+49 ********</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img src={locationIcon} alt="address" className="w-6 h-6 mt-1" />
              <div>
                <p className="text-xs text-gray-300 font-semibold uppercase">Address</p>
                <p className="text-white text-base">
                  Address road, Postal code, Region, Country
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-6">
              Or you can book a free consultation session.
            </h2>
            <button
              type="button"
              onClick={() => setShowCalendar(true)}
              className="mt-4 bg-white text-gray-900 hover:bg-gray-200 font-bold py-3 px-6 rounded-lg transition"
            >
              Schedule a free consultation
            </button>

            {confirmedDate && (
              <p className="mt-4 text-white font-semibold">
                Selected Date: {confirmedDate.toDateString()}
              </p>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white shadow-lg rounded-xl p-8 w-full z-50 relative">
          {submitted ? (
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl text-gray-900 font-extrabold mb-2">
                Merci
              </h1>
              <p className="text-lg text-gray-700">
                Nous serons bientôt en contact.
              </p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="text-gray-700 font-semibold">Full Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full mt-1 py-3 px-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full mt-1 py-3 px-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="tel" className="text-gray-700 font-semibold">Telephone Number</label>
                <input
                  type="tel"
                  id="tel"
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Telephone Number"
                  className="w-full mt-1 py-3 px-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-gray-700 font-semibold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Subject"
                  className="w-full mt-1 py-3 px-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-gray-700 font-semibold">Message</label>
                <textarea
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  rows="4"
                  className="w-full mt-1 py-3 px-4 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#59ADFF] hover:bg-[#459be0] text-white font-bold py-3 px-6 rounded-lg transition"
              >
                Send your message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Calendar Popup */}
      {showCalendar && (
        <div
          className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl p-6 max-w-md w-full z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Select a Date
          </h2>
          <Calendar
            onChange={setDate}
            value={date}
            minDate={new Date()}
            className="react-calendar"
          />
          <p className="mt-4 text-center text-gray-600 font-medium">
            Selected date: <span className="text-blue-600">{date.toDateString()}</span>
          </p>
          <div className="mt-6 flex justify-between gap-4">
            <button
              onClick={() => setShowCalendar(false)}
              className="flex-1 bg-gray-300 text-gray-800 py-3 rounded-lg hover:bg-gray-400 transition font-semibold"
            >
              Close
            </button>
            <button
              onClick={handleConfirmDate}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Confirm Date
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contactus;
