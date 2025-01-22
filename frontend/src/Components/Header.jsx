import React from 'react';
import iconimg from '../assets/finalicon.png'



const Header = () => {  
  return (
    <div className="flex items-center justify-between p-4 bg-[rgba(0,0,0,100%)] border-b-2 border-white ">
        <img src={iconimg} className='h-14 w-20' alt='icon' />

        <span className="text-3xl font-bold -ml-36">WeirdSound</span>
      <input
        type="text"
        placeholder="Search"
        className="bg-[rgb(44,44,44)] text-white rounded-md px-3 py-2 w-1/2  "
      />
      <div className="flex items-center gap-4 ">
        <button className="bg-white px-5 py-3 rounded-full text-black ">+Create</button>

        <div className='cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        </div>

        <img
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        class="relative inline-block cursor-pointer object-cover object-center w-12 h-12 rounded-lg"/>

      </div>
    </div>
  );
};

export default Header;
