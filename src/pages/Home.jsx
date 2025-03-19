import React, { useState } from 'react';
import Header from '../components/home/Header';
import Signing from '../components/global/Signing';
import SlotRequestForm from '../components/forms/SlotRequestForm';

const Home = () => {
  const [toggleMusicForm, setToggleMusicForm] = useState(false);
  return (
    <div className="relative h-screen w-full">
      {/* <video
        src="/videos/save_video.mp4"
        autoPlay
        loop
        muted
        className="top-0 left-0 h-screen w-full object-cover fixed"
      /> */}

      <img 
        src="/images/Homepage Pic.jpeg" alt="BG Image" 
        className="top-0 left-0 h-screen w-full object-cover object-top fixed opacity"
      />
      
      <div className="absolute top-0 left-0 h-full w-full bg-black/50 overflow-scroll">
        <Header />
        <div className="flex flex-col py-[17vh] justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Learn & Mold
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl">
          A learning program for teenagers & young adults, aimed at fostering an entrepreneurial spirit, EQ & cultural influence.
          </p>
          <button 
            onClick={() => setToggleMusicForm(true)}
            title={'Follow prompts to enrol to our program'}
            className='my-12 text-black px-16 py-2 bg-white bg-opacity-80 rounded-[5px] transparent font-[600] text-md hover:bg-opacity-90'
          >
            Enroll
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Signing />
        </div>
      </div>

      <SlotRequestForm 
        visible={toggleMusicForm}
        onHide={() => setToggleMusicForm(false)}
      />
    </div>
  );
};

export default Home;