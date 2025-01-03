// pages/Timeline.js
import React from 'react';

const Timeline = () => {
  return (
    <div className="py-8 text-gray-300  flex px-4 lg:pt-40 xl:pt-72 relative">
      <div className="container flex-col items-start hidden mx-auto my-12 md:flex-row md:my-24 md:flex timeline md:-translate-x-[40px] lg:translate-x-[0px]">
        <div className="relative flex flex-col items-center w-full px-8 mt-2 pt-36 md:top-36 lg:w-1/3 md:mt-12">
          <p className="relative z-40 flex justify-center p-2 text-xl md:text-3xl font-extrabold leading-normal  bg-[#8c8c8c]/20  shadow-white font-audiowide backdrop-blur-lg shadow-white temb-2 xl:text-6xl lg:text-5xl border-[4px] border-white md:leading-relaxed rounded-xl lg:text-border-white">TIMELINE</p>
            <img 
             src="https://github.com/iSaturate/gamaftrfoto/blob/main/gamaftrfoto/Gamaft/Logo_Institut_Teknologi_Bandung.png?raw=true" alt="" className='absolute z-10 translate-y-[200px] -translate-x-[100px] scale-75 animate-random' />
        </div>
        <div className="sticky z-40 flex pl-4 r lg:ml-12 lg:w-2/3">
          <div className="container w-full h-full mx-auto">
            <div className="relative h-full md:-translate-x-[50px] lg:-translate-x-[0px] ">
              <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="relative z-40 order-1 w-5/12 text-right lg:px-1 lg:py-4">
                <img 
                 src="https://github.com/SyaidFarhan/Gamaftr/blob/main/image/Property%201=Variant3.png?raw=true" alt="" className='absolute z-10 transition-transform scale-150 animate-random2' />
                  <p className="relative z-40 mb-3 font-outfit text-base text-[#FDD134] md:text-lg lg:text-2xl md:ml-1 lg:ml-7 md:mr-10 ">5 Januari 2025</p>
                  <h4 className="relative z-40 mb-3 text-[#F1723D] text-lg font-semibold font-outfit k xl:text-6xl md:text-2xl sm:text-lg lg-text-5xl md:mr-10 text-outline-white">Opening</h4>
                </div>
              </div>
              <div className="flex items-center justify-between w-full mb-8 right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="relative z-40 order-1 w-5/12 text-left lg:px-1 lg:py-4">
                <img 
                 src="https://github.com/SyaidFarhan/Gamaftr/blob/main/image/Property%201=Variant3.png?raw=true" alt="" className='absolute z-40 transition-transform animate-random1' />
                  <p className="mb-3 font-outfit text-base text-[#FDD134] md:text-lg lg:text-2xl lg:ml-7 md:ml-[60px] lg:mx-7">6-17 Januari 2025</p>
                  <h4 className="mb-3 text-[#F1723D] text-lg font-semibold font-outfit xl:text-6xl md:text-2xl sm:text-lg lg-text-5xl md:ml-[60px] lg:mx-7 ">Roadshow</h4>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 text-right lg:px-1 lg:py-4">
                  <p className="mb-3 font-outfit text-base text-[#FDD134] md:text-lg lg:text-2xl md:mr-16 lg:ml-7">18-19 Januari 2025</p>
                  <h4 className="mb-3 text-[#F1723D] text-lg font-semibold font-outfit xl:text-6xl md:text-2xl md:mr-10 sm:text-lg lg-text-5xl ">Try Out</h4>
                </div>
              </div>
              <div className="relative z-40 flex items-center justify-between w-full mb-8 right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="relative z-40 order-1 w-5/12 px-1 py-4">
                  <p className="mb-3 font-outfit text-base text-[#FDD134] md:text-lg lg:text-2xl md:ml-[60px] lg:mx-7 lg:ml-7">25 Januari 2025</p>
                  <h4 className="mb-3 text-[#F1723D] text-lg font-semibold text-left font-outfit xl:text-6xl md:text-2xl sm:text-lg lg-text-5xl md:ml-[60px] lg:mx-7 ">Bedah Kampus</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
