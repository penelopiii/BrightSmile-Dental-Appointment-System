import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [selectedService, setSelectedService] = useState(
    initialService || 'Dental Cleaning'
  );
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('09:00 AM');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#102a45] mb-2 tracking-[-0.02em]">
              Appointment Requested!
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed tracking-[-0.01em]">
              Thank you, <strong className="text-slate-800">{fullName || 'Valued Patient'}</strong>. We have received your booking for{' '}
              <strong className="text-[#0e6cb8]">{selectedService}</strong> on{' '}
              <strong>{selectedDate || 'your selected date'}</strong> at{' '}
              <strong>{selectedTime}</strong>. Our receptionist will call you shortly to confirm.
            </p>
            <button
              onClick={resetAndClose}
              className="w-full bg-[#0e6cb8] hover:bg-[#0c5ba0] text-white font-semibold py-3 rounded-xl transition tracking-[-0.01em]"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-[#102a45] tracking-[-0.02em]">
                Book an Appointment
              </h3>
              <p className="text-slate-500 text-sm mt-1 tracking-[-0.01em]">
                Choose your desired treatment and schedule your visit.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Treatment
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0e6cb8]/30 focus:border-[#0e6cb8]"
                >
                  <option value="Dental Cleaning">Dental Cleaning (₱999 - 45 min)</option>
                  <option value="Tooth Extraction">Tooth Extraction (₱3200 - 60 min)</option>
                  <option value="Brace Consultation">Brace Consultation (₱2500 - 120 min)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Calendar size={13} className="text-[#0e6cb8]" />
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0e6cb8]/30 focus:border-[#0e6cb8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Clock size={13} className="text-[#0e6cb8]" />
                    Preferred Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0e6cb8]/30 focus:border-[#0e6cb8]"
                  >
                    <option>09:00 AM</option>
                    <option>10:30 AM</option>
                    <option>01:00 PM</option>
                    <option>02:30 PM</option>
                    <option>04:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maria Santos"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0e6cb8]/30 focus:border-[#0e6cb8]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(09xx) xxx-xxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0e6cb8]/30 focus:border-[#0e6cb8]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0e6cb8] hover:bg-[#0c5ba0] active:scale-[0.99] text-white font-semibold py-3.5 rounded-xl shadow-sm hover:shadow transition-all"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;

