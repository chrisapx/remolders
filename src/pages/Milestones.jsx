import React, { useState } from 'react';
import GlobalHeader from '../components/global/GlobalHeader';
import Signing from '../components/global/Signing';
import SlotRequestForm from '../components/forms/SlotRequestForm';

const Milestones = () => {
  const [toggleMusicForm, setToggleMusicForm] = useState(false);

  return (
    <div className="relative h-screen overflow-auto">
      <GlobalHeader />

      <div className='text-center border-b'>
        <button 
          onClick={() => setToggleMusicForm(true)}
          title={'Submit your music to us and we shall settle a quick call for review'}
          className='my-8 text-white px-16 py-3 bg-black bg-opacity-80 rounded-[5px] transparent font-[600] text-md hover:bg-opacity-90 text-center'
        >
          Enroll
        </button>
      </div>

      <section className="border-b my-3">
        <h1 className="text-center text-3xl font-bold">Our Milestones</h1>
        <div className="py-6 flex justify-center items-center gap-8 flex-wrap">
          <p>Comming soon...</p>
        </div>
      </section>

      <div className="md:absolute bottom-0 w-full">
        <Signing />
      </div>

      <SlotRequestForm 
        visible={toggleMusicForm}
        onHide={() => setToggleMusicForm(false)}
      />
    </div>
  );
};

export default Milestones;