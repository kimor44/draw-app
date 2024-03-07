'use client';

import Link from 'next/link';

const Error = ({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button
        className="rounded bg-primary px-4 py-2 cursor-pointer"
        onClick={reset}
      >
        Try again
      </button>
      <p>
        <Link className="cursor-pointer underline" href="/">
          Back to Home
        </Link>
      </p>
    </div>
  );
};

export default Error;
