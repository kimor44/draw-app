'use client';

import Link from 'next/link';

const ErrorBoundary = ({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="flex flex-col justify-center align-middle gap-14">
      <section className="flex flex-col gap-7 pt-2 md:pt-4 lg:pt-8 xl:pt-14">
        <p className="text-accent text-xl text-center">There was a problem</p>
        <h1 className="text-6xl text-center font-bold">{error.message}</h1>
        <p className="text-center text-text opacity-70 text-xl">
          Please try again later or contact support if the problem persists
        </p>
      </section>
      <div className="actions flex justify-center gap-16">
        <button
          className="text-accent bg-accentForeground px-4 py-2 border border-accent-40 hover:border-accent border-md rounded-md transition-colors duration-300 ease-in-out font-bold opacity-90 hover:opacity-100"
          onClick={() => reset()}
        >
          Try again
        </button>
        <Link
          href="/"
          className="border border-text-40 hover:border-text px-4 py-2 rounded-md text-text opacity-90 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        >
          Go back ghome
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundary;
