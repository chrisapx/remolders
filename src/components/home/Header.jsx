import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import SlotRequestForm from '../forms/SlotRequestForm';

const Header = () => {
  const [toggleMusicForm, setToggleMusicForm] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="flex justify-between md:justify-around md:items-center p-4 bg-black bg-opacity-50 backdrop-blur-xs sticky w-full top-0 z-10">
      <p className='md:hidden'/> 
      <Link to={'/'}>
        <img src="/logos/favicon.ico" alt="" className='h-12 w-12' />
      </Link>

      <div className='grid gap-4 text-white text-center select-none'>
        <Link to={'/'} className="text-3xl md:text-4xl font-extrabold">reMolders</Link>
        <nav className="hidden md:flex gap-4 text-sm text-white font-medium uppercase">
          <NavLink to="/" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Home</NavLink>
          <NavLink to="/about-us" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>About Us</NavLink>
          <NavLink to="/services" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Services</NavLink>
          <NavLink to="/contact-us" className={({ isActive }) => `${ isActive ? "text-gray-600 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Contact Us</NavLink>
        </nav>
      </div>
      
      <div className='md:flex items-center text-white gap-3 hidden'>
        <a href='https://www.x.com/remolders' className='textxs md:text-lg pi pi-twitter'/>
        <a href='https://linkedIn.com/company/remolders' className='text-xs md:text-lg pi pi-linkedin'/>
        <a href='https://wa.me/+256768121204' className='text-xs md:text-lg pi pi-whatsapp'/>
      </div>

      <button className='md:hidden' onClick={() => setToggleMenu(true)}>
        <i className='pi pi-bars text-2xl text-white'></i>
      </button>

      <Sidebar
        visible={toggleMenu}
        position="top"
        onHide={() => setToggleMenu(false)}
        className=' h-[25vh]'
        content={({ closeIconRef, hide }) => (
          <nav className="flex gap-3 flex-col text-sm font-medium uppercase p-4">
            <button onClick={() => hide()} className='pi pi-times text-right'></button>
            <NavLink to="/" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Home</NavLink>
            <NavLink to="/about-us" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>About Us</NavLink>
            <NavLink to="/services" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Services</NavLink>
            <NavLink to="/contact-us" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Contact Us</NavLink>
          </nav>
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