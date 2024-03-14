'use client';

import { TCandidate } from '@/app/features/home/Candidates';
import { LaunchNewDraw } from '@/app/features/home/LaunchNewDraw';
import { RemainingCandidates } from '@/app/features/home/RemainingCandidates';
import { getRandomCandidate } from '@/app/lib/utils/getRandomCandidate';
import { toggleCandidateAction } from '@/app/src/actions/candidate/toggleCandidateAction';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { DrawModalTitle } from './DrawModalTitle';

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
  const [chosenCandidate, setChosenCandidate] = useState<string | null>(null);
  const router = useRouter();

  const launchDraw = () => {
    startTransition(async () => {
      const randomCandidate: TCandidate = await getRandomCandidate(
        candidates,
        2000
      );

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

      setChosenCandidate(randomCandidate.name);
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
            onClick={() => {
              setChosenCandidate(null);
              handleModal();
            }}
          >
            X
          </button>
        </div>
        <section className="flex flex-col gap-5">
          <DrawModalTitle
            hasCandidates={hasCandidates}
            isPending={isPending}
            chosenCandidate={chosenCandidate}
          />
          {(hasCandidates || chosenCandidate) && (
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
                </div>
              ) : chosenCandidate ? (
                <h2 className="text-center text-background bg-text dark:bg-background dark:text-text flex justify-center items-center align-middle font-bold text-xl py-2 rounded-md">
                  {chosenCandidate}
                </h2>
              ) : (
                <RemainingCandidates candidates={candidates} />
              )}
              {!chosenCandidate && (
                <LaunchNewDraw
                  launchNewDraw={launchDraw}
                  isPending={isPending}
                />
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export { DrawModal };
