import Image from 'next/image';
import logo from '../public/logo.png';
import eventManagement from '../public/event-management.png';

export default function Home() {
  return (
    <div className="font-sans">
      <header className="bg-gradient-to-r from-[#3f51b5] to-[#673ab7] text-white py-5 px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" className="h-10 mr-2" width={40} height={40} />
          <h1 className="text-xl">Event planning service</h1>
        </div>
        {/* not final nav buttons */}
        <nav>
          <ul className="flex">
            <li className="mx-3"><a href="#about" className="text-white">About</a></li> 
            <li className="mx-3"><a href="#services" className="text-white">Services</a></li>
            <li className="mx-3"><a href="#contact" className="text-white">Contact</a></li>
            <li className="mx-3"><a href="#community" className="text-white">Community</a></li>
            <li className="mx-3"><a href="#signup" className="text-white">Sign up</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="bg-gradient-to-r from-[#3f51b5] to-[#673ab7] text-white py-12 px-8 flex justify-between items-center">
          <div className="flex-1 mr-8">
            <h1 className="text-3xl mb-5">Event planning service</h1>
            <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
            <button className="bg-white text-[#3f51b5] px-6 py-3 rounded-md hover:bg-gray-200">Get started!</button>
          </div>
          <div className="flex-1 text-right">
            <Image src={eventManagement} alt="Event Management" className="max-w-full" width={500} height={300} />
          </div>
        </section>

        <section id="features" className="py-8 px-8 bg-white">
          <h2 className="text-[#3f51b5] text-2xl mb-5">Features</h2>
          <ul className="text-gray-800">
            <li className="mb-2">Easy Event Scheduling</li>
            <li className="mb-2">Automated Notifications</li>
            <li className="mb-2">Budget Tracking</li>
            <li className="mb-2">Attendance Management</li>
            <li className="mb-2">Collaboration Tools</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-[#3f51b5] to-[#673ab7] text-white py-5 px-8 text-center">
        <p>&copy; 2023 Event planning service. All rights reserved.</p>
      </footer>
    </div>
  );
}
