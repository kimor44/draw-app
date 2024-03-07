'use client';

import { useState } from 'react';
import { DrawModal } from './DrawModal';
import { TCandidate } from '@/app/features/home/Candidates';

type TNewDraw = {
  candidates: TCandidate[];
  onActionChange: () => void;
};

const NewDraw: React.FC<TNewDraw> = ({
  candidates,
  onActionChange
}: TNewDraw) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen((cur) => !cur);
  };

  return (
    <>
      <button
        type="submit"
        onClick={handleModal}
        className="bg-accent text-background disabled:bg-accent/25 rounded px-4 py-2 disabled:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={candidates.length === 0}
      >
        New Draw
      </button>
      <DrawModal
        isOpen={isOpen}
        handleModal={handleModal}
        candidates={candidates}
        onActionChange={onActionChange}
      />
    </>
  );
};

export { NewDraw };
