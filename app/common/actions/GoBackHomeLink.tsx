import Link from 'next/link';

const GoBackHomeLink = () => {
  return (
    <Link
      href="/"
      className="border border-text-40 hover:border-text px-4 py-2 rounded-md text-text opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out"
    >
      Go back home
    </Link>
  );
};
export { GoBackHomeLink };
