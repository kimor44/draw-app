"use client";

import Link from "next/link";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div>
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <p>{error.digest}</p>
      <button onClick={() => reset()}>Try again</button>
      <p>
        <Link className="cursor-pointer underline" href="/">
          Back to Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorBoundary;
