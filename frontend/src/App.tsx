import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReviewsRow from './components/ReviewsRow';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import FindUsSection from './components/FindUsSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Dental Cleaning');

  const handleBookAppointment = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleVisitClinic = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-blue-100 selection:text-[#0e6cb8]">
      {/* Top Navbar */}
      <Navbar onContactClick={handleVisitClinic} />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* Hero Section with Large Typography & Floating Review Cards */}
        <Hero
          onBookAppointment={() => handleBookAppointment()}
          onVisitClinic={handleVisitClinic}
        />

        {/* 3 Review Cards directly below hero */}
        <ReviewsRow />

        {/* Our Services Section */}
        <ServicesSection
          onSelectService={(service) =>
            handleBookAppointment(service.title.replace('\n', ' '))
          }
        />

        {/* Why Choose Us Section (Full-width rich blue) */}
        <WhyChooseUsSection />

        {/* Find Us Section with Map Placeholder & Contact Details */}
        <FindUsSection />
      </main>

      {/* Footer Section (Full-width rich blue) */}
      <Footer />

      {/* Interactive Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
