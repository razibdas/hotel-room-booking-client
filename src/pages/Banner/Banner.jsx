
import Navbar from '../Shared/Navbar/Navbar';
import './style.css';

const Banner = () => {
  return (
    <div className="relative h-full w-full bg-[#EEDDCC] ">
      <img
        src="https://i.ibb.co/fxHR1bB/edvin-johansson-rlw-E8f8an-Oc-unsplash.jpg"
        alt="image 1"
        style={{ height: '90vh' }}
        className="w-full object-cover"
      />
      <div className="absolute inset-0 h-full w-full place-items-center bg-black/75">
        <Navbar></Navbar>
        <div className="flex items-center justify-center lg:mt-36">
          <div className="w-[50%]">
            <h2 className="text-white text-6xl font-bold color-jump">Find the Best Room for You</h2>
            <p className="text-white text-3xl lg:ml-36 mt-4 color-jump">
             Book Now Upto <span className='text-5xl'>30% </span>Discount
            </p>
            <button className="btn btn-secondary lg:ml-56 text-white mt-4">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;







