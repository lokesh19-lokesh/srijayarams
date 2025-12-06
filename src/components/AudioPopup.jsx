import React from 'react';
import { X } from 'lucide-react';
import popupImage from '../assets/popup.png';

const AudioPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="relative bg-white rounded-lg shadow-xl overflow-hidden max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full bg-white/20 hover:bg-white/40 text-gray-800 transition-colors z-10"
        >
          <X size={24} color="black" />
        </button>
        <div className="w-full h-auto">
          <img
            src={popupImage}
            alt="Welcome Popup"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPopup;
