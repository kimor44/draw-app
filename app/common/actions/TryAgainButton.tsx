import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

const TryAgainButton: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  return (
    <button
      className="text-accent bg-accentForeground px-4 py-2 border border-accent-40 hover:border-accent border-md rounded-md transition-colors duration-300 ease-in-out font-bold opacity-90 hover:opacity-100"
      {...props}
    >
      Try again
    </button>
  );
};

export { TryAgainButton };
