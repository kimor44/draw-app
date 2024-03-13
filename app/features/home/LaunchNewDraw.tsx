'use client';

export type TLaunchNewDraw = {
  launchNewDraw: () => void;
  isPending: boolean;
};

const LaunchNewDraw = ({ launchNewDraw, isPending }: TLaunchNewDraw) => {
  return (
    <button
      className="text-background dark:text-text bg-accent rounded px-4 py-2 disabled:opacity-60 disabled:text-text/20 disabled:cursor-not-allowed"
      onClick={launchNewDraw}
      disabled={isPending}
    >
      {isPending ? 'Launching...' : 'Launch New Draw'}
    </button>
  );
};
export { LaunchNewDraw };
