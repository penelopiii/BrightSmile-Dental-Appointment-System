import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import FindUsSection from './components/FindUsSection';
import Footer from './components/Footer';
import MaintenanceToast from './components/MaintenanceToast';
import ContactModal from './components/ContactModal';

function App() {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Trigger maintenance toast on booking click
  const handleBookAppointment = () => {
    setIsToastOpen(false);
    // slight timeout to trigger animation if already visible
    setTimeout(() => {
      setIsToastOpen(true);
    }, 50);
  };

  // Open Contact Us modal on contact click in navbar
  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  // Scroll down to Find Us / Clinic map section
  const handleVisitClinic = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-blue-100 selection:text-[#0e6cb8]">
      {/* Top Navbar */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* Expanded Hero Section with Luminous Sky-Blue Gradient & 6 Floating Cards */}
        <Hero
          onBookAppointment={handleBookAppointment}
          onVisitClinic={handleVisitClinic}
        />

        {/* Our Services Section */}
        <ServicesSection onSelectService={handleBookAppointment} />

        {/* Why Choose Us Section (Full-width rich blue) */}
        <WhyChooseUsSection />

        {/* Find Us Section with Map Placeholder & Contact Details */}
        <FindUsSection />
      </main>

      {/* Footer Section (Full-width rich blue) */}
      <Footer />

      {/* Maintenance Toast Notification when clicking Book Appointment */}
      <MaintenanceToast
        isVisible={isToastOpen}
        onClose={() => setIsToastOpen(false)}
      />

      {/* Contact Us Modal when clicking Contact Us in Navbar */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
