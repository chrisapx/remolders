import { Sidebar } from 'primereact/sidebar';
import React, { useState, useRef, useEffect } from 'react';
import { BsArrowDownRightCircle, BsArrowUpRightCircle } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

const GlobalHeader = () => {
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
        <>
            <div className='flex justify-around bg-green-50 items-center p-4 bg-white border-b sticky top-0 z-10'>
                <Link to={'/'} className=''>
                    <img src="/logos/favicon.ico" alt="" className='h-12 w-12' />
                </Link>
                <div className='hidden md:grid gap-4 text-center select-none'>
                    <nav className="hidden md:flex gap-4 text-sm font-medium uppercase">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Home</NavLink>
                        
                        <div className="relative" ref={dropdownRef}>
                            <div
                                className={`flex items-center mr-2 hover:text-gray-600 cursor-pointer`}
                                onClick={() => setVisibleAboutMenu(!visibleAboutMenu)}
                            >
                                About Us
                                <span className='pi pi-angle-down text-sm ml-2'></span>
                            </div>
                            {visibleAboutMenu && (
                                <div className="absolute bg-white shadow mt-8 rounded border px-3 z-20">
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

                        <NavLink to="/packages" className={({ isActive }) => `${isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Packages</NavLink>
                        <NavLink to="/contact-us" className={({ isActive }) => `${isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Contact Us</NavLink>
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
                className='h-[40vh]'
                content={({ hide }) => (
                    <section>
                        <nav className="flex gap-3 flex-col text-sm font-medium uppercase p-4">
                            <button onClick={() => hide()} className='pi pi-times text-right'></button>
                            <NavLink to="/" className={({ isActive }) => `${isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Home</NavLink>

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

                            <NavLink to="/packages" className={({ isActive }) => `${isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Packages</NavLink>
                            <NavLink to="/contact-us" className={({ isActive }) => `${isActive ? "text-gray-400 rounded-b-2xl border-b-lg" : "hover:text-gray-600"}`}>Contact Us</NavLink>
                        </nav>
                        <section className='absolute flex justify-between items-center px-5 bottom-0 w-full border-t'>
                            <Link to={'/'}>
                                <img src="/logos/favicon.ico" className='w-8 h-8' alt="Remolders logo" />
                            </Link>
                            <div className='flex items-center gap-3 md:hidden py-4 px-4 gap-6'>
                                <a href='https://www.x.com/remolders' className='text-black text-lg md:text-lg pi pi-twitter' />
                                <a href='https://linkedIn.com/company/remolders' className='text-blue-600 text-lg md:text-lg pi pi-linkedin' />
                                <a href='https://wa.me/+256761334247' className='text-green-600 text-lg md:text-lg pi pi-whatsapp' />
                            </div>
                        </section>
                    </section>
                )}
            >
            </Sidebar>
        </>
    );
};

export default GlobalHeader;