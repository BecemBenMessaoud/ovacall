import RightImage from '../../assets/images/right.png';
import LeftImage from '../../assets/images/left.png'; 
import LineImage from '../../assets/images/line.png';
import techImage from '../../assets/images/logologo.png'; 
import Background from '../../assets/images/background.png';// adapt the path
import CheckIcon from '../../assets/images/CHEKK.png';
import EndImage from '../../assets/images/Vector.png';

 // adapte le chemin selon ton arborescence

export default function Chat() {
  return (
    <div   className="w-full px-4 md:px-16">
    <div className="bg-[#191F34] py-5 flex flex-col items-center justify-center relative overflow-hidden rounded-xl">
      {/* Left Image */}
      <img
  src={LeftImage}
  alt="Left"
  className="absolute left-0 top-1/3 transform -translate-y-1/2 w-50 h-80 object-contain hidden md:block"
/>

      {/* Right Image (imported from assets) */}
     <img
  src={RightImage}
  alt="Right"
  className="absolute right-0 top-1/3 transform -translate-y-1/2 w-50 h-80 object-contain hidden md:block"
/>


      {/* Center Content */}
      <div  id="Aboutus" className="text-center px-8">
        <div className=" flex justify-center  ">
  {/* Background image behind logo */}
  <img
    src={Background} // This is the surrounding image
    alt="Perimeter Decoration"
    className="absolute w-30 h-30 object-contain z-30"
  />
  {/* Background image behind the logo (optional, remove if not needed) */}
  
  <img
    src={techImage}
    alt="Tech Logo"
    className="w-12 h-12 rounded-full border-2 border-white object-cover z-10"
  />
  


  {/* Logo icon in front */}
  
</div>
        <h2 className="text-white text-3xl font-bold mb-4">Let's Chat!</h2>
        <button className="bg-white text-[#191F34] px-6 py-2 rounded-md font-semibold mb-6">
          Book your free consultation
        </button>
<img
  src={LineImage}
  alt="Consultation visual"
  className="mx-auto mb-6  "
/>
        <div className="flex flex-wrap justify-center gap-6 text-white text-sm font-medium">
          <div className="flex items-center gap-2">
             <img src={CheckIcon} alt="Free consultation" className="w-6 h-6" />
             <span>Custom Strategies</span>
          </div>
          <div className="flex items-center gap-2">
             <img src={CheckIcon} alt="Free consultation" className="w-6 h-6" />
             <span>Team of experts</span>
          </div>
          <div className="flex items-center gap-2">
             <img src={CheckIcon} alt="Free consultation" className="w-6 h-6" />
             <span>Free consultation</span>
          </div>
        </div>
         <img
          src={EndImage}
          alt="End Visual"
        className="  mx-auto " // Adjust size and margin as needed
        />
      </div>
    </div>
    </div>
  );
}
