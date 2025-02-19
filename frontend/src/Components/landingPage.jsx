import React from 'react';
import iconimg from '../assets/finalicon.png'
import background from '../assets/background.png'

const LandingPage = () => {
  return (
    
    <div className=" bg-black text-white h-screen  justify-between bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${background})`}}>
      <header className="bg-black flex items-center p-4">
        <img src={iconimg} className='h-14 w-20 ' alt='icon' />
        <div className=" text-2xl font-bold ">Weird Sound</div>
   
        <nav className="flex gap-4 ml-auto mr-10 ">
          <a href="#support" className="px-2 py-1 rounded-full hover:bg-white hover:text-black ">Support</a>   
          <a href="#signup" className="px-2 py-1 rounded-full hover:bg-white hover:text-black">Sign Up</a>
          <a href="#login" className="px-2 py-1 rounded-full hover:bg-white hover:text-black">Log In</a>
        </nav>
      </header>
      <main className=" flex flex-col justify-center items-center mt-40">
        <h1 className='text-9xl font-bold mb-10'>Weird Sound</h1>
        <h1 className="text-5xl mb-5">Music for everyone.</h1>
        <button className="btn bg-[#FF8800] text-black py-3 px-6 mt-10 text-lg font-semibold rounded-full hover:bg-white">Get started</button>
      </main>
      <footer className="relative">
        <p className='aboslute bottom-0 left-0 mt-32'>© 2025 Weird sound</p>
      </footer>
    </div>
  );
};

export default LandingPage;