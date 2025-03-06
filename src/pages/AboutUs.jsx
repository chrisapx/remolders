import React, { useState } from 'react';
import GlobalHeader from '../components/global/GlobalHeader';
import Signing from '../components/global/Signing';
import SlotRequestForm from '../components/forms/SlotRequestForm';

const AboutUs = () => {
  const [toggleMusicForm, setToggleMusicForm] = useState(false);
  const team = [
    { name: 'Francis Kusiimwa', image: '', title: 'LX-Designer', description: '' },
    { name: 'Joseph Watema', image: 'images/Joseph Watema pic.png', title: 'Co-ordinator', description: '' },
    { name: '?', image: '', title: 'Tutor', description: '' }
  ];

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
        <h1 className="text-center text-3xl font-bold">Meet The Team</h1>
        <div className="py-6 flex justify-center items-center gap-8 flex-wrap">
          {team.map(({ name, image, title, description }, index) => (
            <section key={index} className="mx-3 md:w-[200px] w-full">
              <div className="text-center bg-gray py-3">
                <p className="font-bold text-lg">{name}</p>
                <p className="font-thin text-md uppercase">{title}</p>
                <a href={`mailto:${description}`} className="font-thin text-xs">{description}</a>
              </div>
              <div className="bg-black bg-opacity-40 h-[250px] w-full relative">
                <img
                  src={image || '/logos/remolders_logo.jpeg'}
                  className="w-full h-full object-cover"
                  alt={`${name}'s pic`}
                />
              </div>
            </section>
          ))}
        </div>
      </section>

      <div className="md:absolute w-full">
        <Signing />
      </div>

      <SlotRequestForm 
        visible={toggleMusicForm}
        onHide={() => setToggleMusicForm(false)}
      />
    </div>
  );
};

export default AboutUs;