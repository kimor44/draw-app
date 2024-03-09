import { ThemeSwitch } from '@/app/features/header/ThemeSwitch';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-background shadow-navbar">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-text text-lg">
                  Draw app
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};
export { Navbar };
