import React, { useState } from 'react';
import GlobalHeader from '../components/global/GlobalHeader';
import Signing from '../components/global/Signing';
import SlotRequestForm from '../components/forms/SlotRequestForm';
import { CgOrganisation } from 'react-icons/cg';
import { BiSolidInstitution } from 'react-icons/bi';
import { ImManWoman } from 'react-icons/im';
import { MdHolidayVillage } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';

const Packages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [toggleMusicForm, setToggleMusicForm] = useState(false);

  const handleSelectPackage = (spkg) => {
    if(toggleMusicForm){
      return
    }
    searchParams.set('sPackage', spkg);
    setSearchParams(searchParams);
    setToggleMusicForm(!toggleMusicForm)
  }

  const packages = [
    {
      name: 'Holiday learners’ package',
      description: 'Design Hub Bugolobi',
      color: 'bg-gradient-to-b hover:bg-gradient-to-t from-blue-500 to-blue-300',
      icon: <MdHolidayVillage size={40} className="text-blue-700" />,
      image: '/images/Holiday package pic.jpeg'
    },
    {
      name: 'Young Adults',
      description: 'Design Hub as well as customizable setting',
      color: 'bg-gradient-to-b hover:bg-gradient-to-t from-green-500 to-green-300',
      icon: <ImManWoman size={40} className="text-green-700" />, 
      image: '/images/Young adults pic.jpeg'
    },
    {
      name: 'Organizational package',
      description: "Divine Care Ministries’ testimonial",
      color: 'bg-gradient-to-b hover:bg-gradient-to-t from-gray-500 to-gray-300',
      icon: <CgOrganisation size={40} className="text-gray-700" />, 
      image: '/images/Organizational package pic.jpeg'
    },
    {
      name: 'Institutional arrangements',
      description: 'Within schools offering varying curricula',
      color: 'bg-gradient-to-b hover:bg-gradient-to-t from-purple-500 to-purple-300',
      icon: <BiSolidInstitution size={40} className="text-purple-700" />, 
      image: '/images/Institutional arrangement pic.jpeg'
    },
  ];

  return (
    <div className="relative min-h-screen max-h-screen overflow-auto">
      <GlobalHeader />

      <section className="py-8 flex-1">
        <h1 className="text-center text-3xl font-bold mb-8">Packages</h1>
        <div className="flex flex-wrap justify-center items-start gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="flex flex-col items-center max-w-sm">
              <div key={index}
                className="relative w-[300px] h-[300px] border border-gray-300 rounded-lg shadow-xl overflow-hidden"
              >
                <img
                  src={pkg.image || "/svgs/logo.svg"}
                  className="w-full h-full object-cover"
                  alt={`${pkg.name}'s pic`}
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white p-3">
                  <h2 className="text-lg font-semibold">{pkg.name}</h2>
                  <p className="text-sm">{pkg.description}</p>
                </div>
              </div>

              <div className="mt-8 mb-16">
                <button onClick={() => handleSelectPackage(pkg.name)} className="px-8 py-3 bg-black bg-opacity-70 hover:bg-opacity-100 text-white rounded-lg font-semibold">
                  Order Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="md:absolute md:bottom-0 w-full">
        <Signing />
      </div>

      <SlotRequestForm 
        visible={toggleMusicForm}
        onHide={() => setToggleMusicForm(false)}
      />
    </div>
  );
};

export default Packages;