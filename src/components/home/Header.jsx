import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import SlotRequestForm from '../forms/SlotRequestForm';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const Header = () => {
  const [toggleMusicForm, setToggleMusicForm] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [visibleAboutMenu, setVisibleAboutMenu] = useState(false); 
  const [visibleMobileAboutMenu, setVisibleMobileAboutMenu] = useState(false);
  const dropdownRef = useRef(null);
  
  const aboutUsItems = [
      { label: 'Our Team', to: '/team' },
      { label: 'Curriculum layout', to: '/curriculum' },
      { label: 'Milestones', to: '/milestones' },
  ];

  useEffect(() => {
      const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
              setVisibleAboutMenu(false);
          }
      };

      if (visibleAboutMenu) {
          document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [visibleAboutMenu]);
  return (
    <div className="flex justify-between md:justify-around md:items-center p-4 bg-black bg-opacity-50 sticky w-full top-0 z-10">
      <Link to={'/'}>
        <img src="/logos/favicon.ico" alt="" className='h-12 w-12' />
      </Link>

      <div className='grid gap-4 text-white text-center select-none'>
        <Link to={'/'} className="text-3xl md:text-4xl font-extrabold">reMolders</Link>
        <nav className="hidden md:flex gap-4 text-sm text-white font-medium uppercase">
          <NavLink to="/" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Home</NavLink>
          <div className="relative" ref={dropdownRef}>
              <div
                  className={`flex items-center mr-2 hover:text-gray-600 cursor-pointer`}
                  onClick={() => setVisibleAboutMenu(!visibleAboutMenu)}
              >
                  About Us
                  <span className='pi pi-angle-down text-sm ml-2'></span>
              </div>
              {visibleAboutMenu && (
                  <div className="absolute bg-black bg-opacity-40 shadow mt-5 rounded px-3 z-20">
                      {aboutUsItems.map((item, index) => (
                          <NavLink
                              key={index}
                              to={item.to}
                              className={({ isActive }) => `flex justify-between gap-8 p-1 py-2 whitespace-nowrap text-start ${isActive ? "text-gray-400" : "hover:text-gray-600"}`}
                              onClick={() => setVisibleAboutMenu(false)}
                          >
                              {item.label}
                              <BsArrowUpRightCircle className='text-blue-500'/>
                          </NavLink>
                      ))}
                  </div>
              )}
          </div>
          
          <NavLink to="/packages" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Packages</NavLink>
          <NavLink to="/contact-us" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Contact Us</NavLink>
        </nav>
      </div>
      
      <div className='md:flex items-center text-white gap-3 hidden'>
        <a href='https://www.x.com/remolders' className='text-xs md:text-lg pi pi-twitter'/>
        <a href='https://linkedIn.com/company/remolders' className='text-blue-600 text-xs md:text-lg pi pi-linkedin'/>
        <a href='https://wa.me/+25676133424' className='text-green-600 text-xs md:text-lg pi pi-whatsapp'/>
      </div>

      <button className='md:hidden' onClick={() => setToggleMenu(true)}>
        <i className='pi pi-bars text-2xl text-white'></i>
      </button>

      <Sidebar
        visible={toggleMenu}
        position="top"
        onHide={() => setToggleMenu(false)}
        className='md:hidden h-[40vh]'
        content={({ closeIconRef, hide }) => (
          <section>
            <nav className="flex gap-3 flex-col text-sm font-medium uppercase p-4">
              <button onClick={() => hide()} className='pi pi-times text-right'></button>
              <NavLink to="/" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Home</NavLink>
              <div>
                  <div
                      className={`flex items-center mr-2 hover:text-gray-600 cursor-pointer`}
                      onClick={() => setVisibleMobileAboutMenu(!visibleMobileAboutMenu)}
                  >
                      About Us
                      <span className='pi pi-angle-down text-sm ml-2'></span>
                  </div>
                  {visibleMobileAboutMenu && (
                      <div className="pl-4 flex flex-col gap-2 mt-2">
                          {aboutUsItems.map((item, index) => (
                              <NavLink
                                  key={index}
                                  to={item.to}
                                  className={({ isActive }) => `${isActive ? "text-gray-400" : "hover:text-gray-600"}`}
                                  onClick={() => {
                                      hide();
                                      setVisibleMobileAboutMenu(false);
                                  }}
                              >
                                  {item.label}
                              </NavLink>
                          ))}
                      </div>
                  )}
              </div>
              
              <NavLink to="/packages" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Packages</NavLink>
              <NavLink to="/contact-us" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Contact Us</NavLink>
            </nav>
            <section className='absolute flex justify-between items-center px-5 bottom-0 w-full border-t'>
                <Link to={'/'}>
                    <img src="/logos/favicon.ico" className='w-8 h-8' alt="Remolders logo" />
                </Link>
                <div className='flex items-center gap-3 md:hidden py-4 px-4 gap-6'>
                    <a href='https://www.x.com/remolders' className='text-black text-lg md:text-lg pi pi-twitter' />
                    <a href='https://linkedIn.com/company/remolders' className='text-blue-600 text-lg md:text-lg pi pi-linkedin' />
                    <a href='https://wa.me/+25676133424' className='text-green-600 text-lg md:text-lg pi pi-whatsapp' />
                </div>
            </section>
          </section>
        )}
      >
      </Sidebar>


      <SlotRequestForm 
        visible={toggleMusicForm}
        onHide={() => setToggleMusicForm(false)}
      />
    </div>
  );
};

export default Header;