import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const localStorageIsDarkMode = window.localStorage.getItem('isDarkMode');

    if (localStorageIsDarkMode !== null) {
      setIsDarkMode(localStorageIsDarkMode === 'true');
    }
  }, []);

  function toggleDarkMode() {
    window.localStorage.setItem('isDarkMode', !isDarkMode);
    setIsDarkMode(!isDarkMode);
  }

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
