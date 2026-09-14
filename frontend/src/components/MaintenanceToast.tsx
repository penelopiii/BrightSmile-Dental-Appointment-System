import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface MaintenanceToastProps {
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const MaintenanceToast: React.FC<MaintenanceToastProps> = ({
  isVisible,
  onClose,
  duration = 4500,
}) => {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#0e6cb8] text-white rounded-[20px] px-6 py-4 shadow-2xl border border-white/10 relative flex items-start justify-between gap-4">
        <div>
          <p className="font-bold text-white text-[15px] leading-snug tracking-[-0.01em]">
            This feature is currently<br />
            unavailable due to maintenance.
          </p>
          <p className="text-blue-100/90 text-sm mt-1 tracking-[-0.01em]">
            Please try again later.
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-white/70 hover:text-white p-1 rounded-md transition-colors"
          aria-label="Close notification"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default MaintenanceToast;

