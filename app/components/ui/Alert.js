// ./components/ui/Alert.js

import React from 'react';

export const Alert = ({ children }) => (
  <div className="bg-red-100 text-red-700 border border-red-300 rounded-md p-4 mb-4">
    {children}
  </div>
);

export const AlertDescription = ({ children }) => (
  <p>{children}</p>
);
