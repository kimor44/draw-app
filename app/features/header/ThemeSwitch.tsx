'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <button>cocuouou</button>;
  }

  if (resolvedTheme === 'dark') {
    return (
      <button
        aria-label="Switch to light mode"
        onClick={() => setTheme('light')}
        className="p-2 rounded-md bg-gray-800 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </button>
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <button
        aria-label="Switch to dark mode"
        onClick={() => setTheme('dark')}
        className="p-2 rounded-md bg-gray-200 text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v5m0 0a2 2 0 002 2h5m5 0v5a2 2 0 01-2 2h-5m0-5a2 2 0 00-2 2v5m2-5h5a2 2 0 002-2v-5"
          />
        </svg>
      </button>
    );
  }
};
