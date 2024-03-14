'use client';

import { TCandidate } from '@/app/features/home/Candidates';
import { LaunchNewDraw } from '@/app/features/home/LaunchNewDraw';
import { RemainingCandidates } from '@/app/features/home/RemainingCandidates';
import { getRandomInt } from '@/app/lib/utils/getRandomInt';
import { waiting } from '@/app/lib/utils/waiting';
import { toggleCandidateAction } from '@/app/src/actions/candidate/toggleCandidateAction';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';
import Image from 'next/image';

type TDrawModal = {
  isOpen: boolean;
  handleModal: () => void;
  candidates: TCandidate[];
  onActionChange: () => void;
};

const DrawModal: React.FC<TDrawModal> = ({
  isOpen,
  handleModal,
  candidates,
  onActionChange
}: TDrawModal) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const launchDraw = () => {
    startTransition(async () => {
      const randomCandidate: TCandidate =
        candidates[getRandomInt(0, candidates.length - 1)];
      waiting(4000);

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

  const hasCandidates = candidates.length > 0;
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center`}
    >
      <div
        className={`bg-background dark:bg-text w-1/2 m-auto p-4 rounded-lg ${hasCandidates ? '' : 'pb-10'}`}
      >
        <div className="flex justify-end">
          <button
            className="text-text dark:text-background font-bold rounded px-4 py-2"
            onClick={() => handleModal()}
          >
            X
          </button>
        </div>
        <section className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-center text-text dark:text-background">
            {hasCandidates ? 'Candidates remaining' : 'No candidates remaining'}
          </h1>
          {hasCandidates && (
            <>
              {isPending ? (
                <div className="flex flex-col justify-center text-center items-center">
                  <Image
                    src="/spinner.svg"
                    alt="Spinner"
                    width={100}
                    height={100}
                    className="animate-spin"
                  />
                  <h3 className="text-center text-text dark:text-background text-xl">
                    Draw in progress...
                  </h3>
                </div>
              ) : (
                <RemainingCandidates candidates={candidates} />
              )}
              <LaunchNewDraw launchNewDraw={launchDraw} isPending={isPending} />
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export { DrawModal };
