import React from 'react';
import iconimg from '../assets/finalicon.png'

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#212021] p-4 flex  ">
      <nav className="flex flex-col gap-4 ">

    <div className="flex items-center gap-2 text-lg transition-colors h-14 w-48 rounded-lg duration-300 hover:bg-[#2F2F2F] active:bg-[#2F2F2F] ">
      <link src={"/"}/>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
          Home
        </div>
    <div className="flex items-center gap-2 text-lg transition-colors h-14 w-48 rounded-lg duration-300 hover:bg-[#2F2F2F] active:bg-[#2F2F2F]">
        <link src={"/"}/>
            <img src={iconimg} className='h-10 w-10 -ml-2'  alt='icon' />
            <span className='-ml-2'>
           Communities
           </span>
        </div>

        <div className="flex items-center gap-2 text-lg transition-colors h-14 w-48 rounded-lg duration-300 hover:bg-[#2F2F2F] active:bg-[#2F2F2F]">
        <link src={"/"}/>
        <svg class="h-6 w-6 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>
          Explore
        </div>

        <div className="flex items-center  gap-2 text-lg transition-colors h-14 w-48 rounded-lg duration-300 hover:bg-[#2F2F2F] active:bg-[#2F2F2F]">
        <link src={"/"} />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
        </svg>
          Library
     </div>

      </nav>
    </div>
  );
};

export default Sidebar;
