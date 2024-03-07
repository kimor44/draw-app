'use client';
import { TCandidate } from '@/app/features/home/Candidates';
import { getRandomInt } from '@/app/lib/utils/getRandomInt';
import { waiting } from '@/app/lib/utils/waiting';
import { toggleCandidateAction } from '@/app/src/actions/candidate/toggleCandidateAction';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

export type TLaunchNewDraw = {
  candidates: TCandidate[];
  onActionChange: () => void;
};

const LaunchNewDraw = ({ candidates, onActionChange }: TLaunchNewDraw) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const launchDraw = () => {
    startTransition(async () => {
      const randomCandidate: TCandidate =
        candidates[getRandomInt(0, candidates.length - 1)];
      waiting(2000);

      const toggleCandidate = await toggleCandidateAction(randomCandidate.id);

      if (toggleCandidate?.error) {
        toast.warning(
          `Unable to toggle the candidate. Session ID not found : ${toggleCandidate.error}`
        );
        return;
      }

      if (toggleCandidate?.warning) {
        toast.warning(toggleCandidate.warning);
        return;
      }

      onActionChange();
      router.refresh();
      toast.success(toggleCandidate?.success);
    });
  };

  return (
    <button
      className="text-background dark:text-text bg-accent rounded px-4 py-2 disabled:opacity-60 disabled:text-text/20 disabled:cursor-not-allowed"
      onClick={launchDraw}
      disabled={isPending}
    >
      {isPending ? 'Launching...' : 'Launch New Draw'}
    </button>
  );
};
export { LaunchNewDraw };
