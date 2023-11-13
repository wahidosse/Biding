import React from "react";

interface FullScreenModalProps {
  onClose: () => void;
}

const Modal: React.FC<FullScreenModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="h-full w-full max-w-screen-md translate-y-0 transform rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out">
          {/* Modal Content */}
          <div className="h-full w-full">
            {/* Your modal content goes here */}
            <div className="text-center">
              <h2 className="text-2xl font-bold">Modal Title</h2>
              <p className="mt-2">Modal content goes here...</p>
              <button
                className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
