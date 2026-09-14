import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      onClose();
    }, 2000);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-[24px] max-w-lg w-full p-8 sm:p-10 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#102a45] mb-2 tracking-[-0.02em]">
              Message Sent!
            </h3>
            <p className="text-slate-600 text-sm tracking-[-0.01em]">
              Thank you for reaching out. We will get back to you shortly.
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="pb-5 mb-6 border-b border-slate-100">
              <h2 className="text-2xl sm:text-[28px] font-bold text-[#0e6cb8] tracking-[-0.02em] leading-tight">
                Contact Us
              </h2>
              <p className="text-slate-500 text-sm sm:text-[15px] mt-1.5 tracking-[-0.01em]">
                Fill in the details to create a new contact
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Contact Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2 tracking-[-0.01em]">
                  Contact Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0e6cb8]/20 focus:border-[#0e6cb8] transition-all tracking-[-0.01em]"
                />
              </div>

              {/* Email address */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2 tracking-[-0.01em]">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0e6cb8]/20 focus:border-[#0e6cb8] transition-all tracking-[-0.01em]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-2 tracking-[-0.01em]">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder=""
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0e6cb8]/20 focus:border-[#0e6cb8] transition-all resize-none tracking-[-0.01em]"
                />
              </div>

              {/* Action Buttons: Cancel and Send */}
              <div className="pt-3 flex items-center justify-end gap-3.5">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl border border-[#0e6cb8] text-[#0e6cb8] font-semibold text-[15px] hover:bg-blue-50/60 active:scale-[0.98] transition-all tracking-[-0.01em]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-xl bg-[#0e6cb8] hover:bg-[#0c5ba0] active:scale-[0.98] text-white font-semibold text-[15px] shadow-sm hover:shadow transition-all tracking-[-0.01em]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;

