'use client';

import React, { FC, useEffect, useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Image from 'next/image';
import logo from '../public/logo.png';
import eventManagement from '../public/event-management.png';
import EventList from './EventList';
import Login from './Login';
import Signup from './Signup';


const Page: FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      <div className="font-sans">
        <header className="sticky top-0 bg-blue-600 text-white py-5 px-8 flex justify-between items-center z-50">
          <div className="flex items-center">
            <Image src={logo} alt="Logo" className="h-10 mr-2" width={40} height={40} />
            <h1 className="text-xl font-bold">UNIVENTS</h1>
          </div>
          <nav>
            <ul className="flex">
              <li className="mx-3"><Link to="/" onClick={handleScrollToTop} className="text-white">Home</Link></li>
              <li className="mx-3"><Link to="/events" onClick={handleScrollToTop} className="text-white">Events</Link></li>
              <li className="mx-3"><a href="#about" onClick={handleScrollToTop} className="text-white">About</a></li>
              <li className="mx-3"><a href="#services" onClick={handleScrollToTop} className="text-white">Services</a></li>
              <li className="mx-3"><a href="#contact" onClick={handleScrollToTop} className="text-white">Contact</a></li>
              <li className="mx-3"><a href="#community" onClick={handleScrollToTop} className="text-white">Community</a></li>
              <li className="mx-3"><Link to="/login" onClick={handleScrollToTop} className="text-white">Log In</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <section className="bg-blue-600 text-white py-12 px-36 flex justify-between items-center">
                  <div className="flex-1 mr-8">
                    <h1 className="text-3xl mb-5 font-bold">Experience Campus Life: Check Out Our Events</h1>
                    <p className="text-lg mb-8">Stay connected to campus activities and events. View schedules, RSVP, and engage with your community</p>
                    <button className="bg-white text-[#3f51b5] px-6 py-3 rounded-md hover:bg-gray-200">Get started!</button>
                  </div>
                  <div className="flex-1 text-right">
                    <Image src={eventManagement} alt="Event Management" className="max-w-full" width={500} height={300} />
                  </div>
                </section>

                <section id="features" className="bg-white py-8 px-36">
                  <h2 className="text-[#3f51b5] text-2xl mb-5">Features:</h2>
                  <ul>
                    <li className="text-[#3f51b5] mb-2">Easy Event Scheduling</li>
                    <li className="text-[#3f51b5] mb-2">Automated Notifications</li>
                    <li className="text-[#3f51b5] mb-2">Fast Registration</li>
                    <li className="text-[#3f51b5] mb-2">Attendance Management</li>
                    <li className="text-[#3f51b5] mb-2">Collaboration Tools</li>
                  </ul>
                </section>
              </>
            } />
            <Route path="/events" element={<EventList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={ <Signup /> } /> 
          </Routes>
        </main>

        <footer className="bg-blue-600 text-white py-5 px-8 text-center">
          <p>&copy; 2024 Event planning service. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default Page;