'use client';
import { Moon, Sun } from 'lucide-react';
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
        key={resolvedTheme}
        aria-label="Switch to light mode"
        onClick={() => setTheme('light')}
        className="p-2 rounded-md bg-background text-text transition-all animate-[rise_0.3s_ease-out]"
      >
        <Moon size={24} />
      </button>
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <button
        key={resolvedTheme}
        aria-label="Switch to dark mode"
        onClick={() => setTheme('dark')}
        className="p-2 rounded-md bg-background text-text transition-all animate-[rise_0.3s_ease-out]"
      >
        <Sun size={24} />
      </button>
    );
  }
};
