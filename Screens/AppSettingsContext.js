import React, { createContext, useState } from 'react';

export const AppSettingsContext = createContext();

export const AppSettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const increaseFontSize = () => setFontSize((prev) => Math.min(prev + 2, 24));
  const decreaseFontSize = () => setFontSize((prev) => Math.max(prev - 2, 12));

  return (
    <AppSettingsContext.Provider value={{
      darkMode,
      fontSize,
      toggleDarkMode,
      increaseFontSize,
      decreaseFontSize,
    }}>
      {children}
    </AppSettingsContext.Provider>
  );
};
