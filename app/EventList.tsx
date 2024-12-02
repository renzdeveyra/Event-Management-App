import React, { useState, FC } from 'react';
import { Calendar, MapPin, Clock, Users, Bell, Search, Filter, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./components/ui/Dialog"; 
import Image from 'next/image';
import eventManagement from '../public/event-management.png'; 

const departments: string[] = [
  "All Departments",
  "Computer Science",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering"
];

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  department: string;
  organizer: string;
  required: boolean;
  seats: number;
  registrationDeadline: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Technical Symposium 2024",
    date: "November 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
    category: "Academic",
    department: "Computer Science",
    organizer: "CSE Department",
    required: true,
    seats: 200,
    registrationDeadline: "November 10, 2024",
    image: "/event-management.png"
  },
  {
    id: 2,
    title: "Industry Expert Talk",
    date: "November 20, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Seminar Hall 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
    category: "Career",
    department: "Computer Science",
    organizer: "Training & Placement Cell",
    required: false,
    seats: 150,
    registrationDeadline: "November 18, 2024",
    image: "/logo.png"
  },
];

const categoryColors: { [key: string]: string } = {
  Academic: 'bg-blue-500',
  Career: 'bg-emerald-500',
  Club: 'bg-purple-500',
};

const EventsPage: FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All Departments");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [reminderSet, setReminderSet] = useState<{ [key: number]: boolean }>({});
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const handleRegister = (event: Event): void => {
    setSelectedEvent(event);
    setShowRegisterModal(true);
  };

  const toggleReminder = (eventId: number): void => {
    setReminderSet(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  const filteredEvents: Event[] = events.filter(event => 
    (selectedDepartment === "All Departments" || event.department === selectedDepartment) &&
    (selectedCategory === "All Categories" || event.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Admin Panel Toggle  ?????*/}
      {/* <div className="p-4 flex justify-end">
        <button
          onClick={() => setIsAdminPanelVisible(!isAdminPanelVisible)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {isAdminPanelVisible ? "Close Admin Panel" : "Open Admin Panel"}
        </button>
      </div> */}

      {/* Admin Panel */}
      {/* {isAdminPanelVisible && (
        <div className="p-4 bg-gray-200 text-black rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex justify-between items-center p-4 bg-gray-300 rounded-lg">
                <div>
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <p className="text-gray-700">{event.date} | {event.time}</p>
                </div>
                <div className="flex gap-3">
                  <button className="text-yellow-600"><Edit className="w-5 h-5" /> Edit</button>
                  <button className="text-red-600"><Trash className="w-5 h-5" /> Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )} */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Campus Events Portal</h1>
              <p className="text-xl opacity-90">Discover and participate in exciting college events</p>
            </div>
            <div className="hidden lg:block">
              <Image 
                src={eventManagement}
                alt="Events illustration"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
          
          <div className="mt-8 flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 rounded-lg bg-[#013191] border-[#013191] hover:border-[#01256e]-300 hover:bg-[#01256e]"
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className={`bg-white rounded-xl shadow-sm p-6 mb-8 transition-all duration-300 ${showFilters ? 'block' : 'hidden'}`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Filters</h2>
            <button onClick={() => setShowFilters(false)}>
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-3">Department</h3>
              <div className="space-y-2">
                {departments.map(dept => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`block w-full text-left px-4 py-2 rounded-lg text-sm ${
                      selectedDepartment === dept
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {["All Categories", ...Object.keys(categoryColors)].map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-4 py-2 rounded-lg text-sm ${
                      selectedCategory === category
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
        {filteredEvents.map((event) => {
          const eventCategoryColor = categoryColors[event.category] || 'gray'; // Default color
          return (
            <div 
              key={event.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-3">
                <div className={`${categoryColors[event.category]} text-white rounded-full mb-2 px-2 py-1 inline-flex items-center justify-center`}>
                    {event.category}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                <p className="text-gray-500">{event.date} | {event.time}</p>
                <p className="text-gray-600 mt-2">{event.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button 
                    onClick={() => handleRegister(event)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Register
                  </button>
                  <button onClick={() => toggleReminder(event.id)} className="text-gray-500">
                    {reminderSet[event.id] ? <Bell className="w-5 h-5 text-blue-600" /> : <Bell className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </main>

      {showRegisterModal && (
        <Dialog open={showRegisterModal} onOpenChange={setShowRegisterModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedEvent?.title}</DialogTitle>
              <DialogDescription>
                {selectedEvent?.description}
              </DialogDescription>
            </DialogHeader>
            {/* Registration form goes here */}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default EventsPage;
