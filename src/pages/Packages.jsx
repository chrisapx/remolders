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
    },
    {
      name: 'Young Adults',
      description: 'DH but also customizable setting',
      color: 'bg-gradient-to-b hover:bg-gradient-to-t from-green-500 to-green-300',
      icon: <ImManWoman size={40} className="text-green-700" />, 
    },
    {
      name: 'Organizational package',
      description: "Divine Care Ministries’ testimonial",
      color: 'bg-gradient-to-b hover:bg-gradient-to-t from-gray-500 to-gray-300',
      icon: <CgOrganisation size={40} className="text-gray-700" />, 
    },
    {
      name: 'Institutional arrangements',
      description: 'Within schools offering varying curricula',
      color: 'bg-gradient-to-b hover:bg-gradient-to-t from-purple-500 to-purple-300',
      icon: <BiSolidInstitution size={40} className="text-purple-700" />, 
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
              <div
                className={`relative group ${pkg.color} text-white w-[300px] h-[220px] rounded-lg shadow-lg cursor-pointer overflow-hidden`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-bold" onClick={() => handleSelectPackage(pkg.name)}>
                  {pkg.icon}
                  <h2 className="text-xl mt-2">{pkg.name}</h2>
                </div>
              </div>

              <p className="mt-4 w-[280px] text-center text-sm text-gray-700 leading-relaxed">
                {pkg.description}
              </p>

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