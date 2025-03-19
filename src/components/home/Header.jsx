import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import SlotRequestForm from '../forms/SlotRequestForm';

const Header = () => {
  const [toggleMusicForm, setToggleMusicForm] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between md:justify-around md:items-center p-4 bg-black bg-opacity-50 sticky w-full top-0 z-10">
      <Link to={'/'}>
        <img src="/logos/favicon.ico" alt="" className='h-12 w-12' />
      </Link>

      <div className='grid gap-4 text-white text-center select-none'>
        <Link to={'/'} className="text-3xl md:text-4xl font-extrabold">reMolders</Link>
        <nav className="hidden md:flex gap-4 text-sm text-white font-medium uppercase">
          <NavLink to="/" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Home</NavLink>
          <NavLink to="/about-us" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>About Us</NavLink>
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
        className='md:hidden h-[28vh]'
        content={({ closeIconRef, hide }) => (
          <section>
            <nav className="flex gap-3 flex-col text-sm font-medium uppercase p-4">
              <button onClick={() => hide()} className='pi pi-times text-right'></button>
              <NavLink to="/" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Home</NavLink>
              <NavLink to="/about-us" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>About Us</NavLink>
              <NavLink to="/packages" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Packages</NavLink>
              <NavLink to="/contact-us" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Contact Us</NavLink>
            </nav>
            <hr />
            <div className='flex items-center gap-3 md:hidden py-4 px-4 gap-6'>
              <a href='https://www.x.com/remolders' className='text-black text-lg md:text-lg pi pi-twitter'/>
              <a href='https://linkedIn.com/company/remolders' className='text-blue-600 text-lg md:text-lg pi pi-linkedin'/>
              <a href='https://wa.me/+25676133424' className='text-green-600 text-lg md:text-lg pi pi-whatsapp'/>
            </div>

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