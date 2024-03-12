'use client';

import { TCandidate } from '@/app/features/home/Candidates';
import { RemainingCandidates } from './RemainingCandidates';
import { LaunchNewDraw } from './LaunchNewDraw';

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
              <RemainingCandidates candidates={candidates} />
              <LaunchNewDraw
                candidates={candidates}
                onActionChange={onActionChange}
              />
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export { DrawModal };
