import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import Packages from '../pages/Packages';
import Team from '../pages/Team';
import Curriculum from '../pages/Curriculum';
import Milestones from '../pages/Milestones';

const ClientRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/packages?" element={<Packages/>}/>
      <Route path="/team?" element={<Team/>}/>
      <Route path="/curriculum?" element={<Curriculum/>}/>
      <Route path="/milestones?" element={<Milestones/>}/>
      <Route path="/contact-us?" element={<ContactUs/>}/>
    </Routes>
  );
};

export default ClientRoutes;