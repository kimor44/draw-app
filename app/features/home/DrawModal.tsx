'use client';

import { TCandidate } from '@/app/features/home/Candidates';
import { getRandomCandidate } from '@/app/lib/utils/getRandomCandidate';
import { toggleCandidateAction } from '@/app/src/actions/candidate/toggleCandidateAction';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { DrawModalTitle } from './DrawModalTitle';
import { DrawModalContent } from './DrawModalContent';

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
        className={`bg-background dark:bg-text w-full md:w-1/2 m-auto p-4 rounded-lg ${hasCandidates ? '' : 'pb-10'}`}
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
            <DrawModalContent
              candidates={candidates}
              launchDraw={launchDraw}
              isPending={isPending}
              chosenCandidate={chosenCandidate}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export { DrawModal };
