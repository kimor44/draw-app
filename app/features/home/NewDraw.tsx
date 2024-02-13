"use client";

import { useState } from "react";
import { DrawModal } from "./DrawModal";
import { TCandidate } from "@/app/features/home/Candidates";

type TNewDraw = {
  candidates: TCandidate[];
};

const NewDraw: React.FC<TNewDraw> = ({ candidates }: TNewDraw) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen((cur) => !cur);
  };

  return (
    <>
      <button
        type="submit"
        onClick={handleModal}
        className="bg-green-500 text-white rounded px-4 py-2 disabled:bg-green-900 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={candidates.length === 0}
      >
        New Draw
      </button>
      <DrawModal
        isOpen={isOpen}
        handleModal={handleModal}
        candidates={candidates}
      />
    </>
  );
};

export { NewDraw };
