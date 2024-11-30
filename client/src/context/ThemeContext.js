import React, { createContext, useState, useContext } from 'react';

// Create Context
const ThemeContext = createContext();

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);

// Provider component that wraps the app
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default is light mode

  // Function to toggle between dark and light modes
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode); // Switch between light and dark mode
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children} {/* All children will have access to this context */}
    </ThemeContext.Provider>
  );
};
