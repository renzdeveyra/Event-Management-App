// ./components/ui/Dialog.js

import React from 'react';

export const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  const handleOverlayClick = () => {
    onOpenChange(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export const DialogContent = ({ children }) => (
  <div className="p-6">{children}</div>
);

export const DialogHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const DialogTitle = ({ children }) => (
  <h3 className="text-lg font-semibold">{children}</h3>
);

export const DialogDescription = ({ children }) => (
  <p className="text-sm text-gray-600">{children}</p>
);
