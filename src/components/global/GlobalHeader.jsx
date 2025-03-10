import { Sidebar } from 'primereact/sidebar';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const GlobalHeader = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
        <div className='flex justify-around bg-green-50 items-center p-4 bg-white border-b sticky top-0 z-10'>
            <Link to={'/'} className=''>
                <img src="/logos/favicon.ico" alt="" className='h-12 w-12' />
            </Link>
            <div className='hidden md:grid gap-4 text-center select-none'>
                <nav className="hidden md:flex gap-4 text-sm font-medium uppercase">
                    <NavLink to="/" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Home</NavLink>
                    <NavLink to="/about-us" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>About Us</NavLink>
                    <NavLink to="/services" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Services</NavLink>
                    <NavLink to="/contact-us" className={({ isActive }) => `${ isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Contact Us</NavLink>
                </nav>
            </div>
            <button className='md:hidden' onClick={() => setToggleMenu(true)}>
                <i className='pi pi-bars text-3xl'></i>
            </button>
        </div>
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
    </>
  )
}

export default GlobalHeader
