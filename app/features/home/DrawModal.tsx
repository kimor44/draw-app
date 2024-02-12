"use client";

import { TCandidate } from "@/app/features/home/Candidates";
import { RemainingCandidates } from "./RemainingCandidates";
import { LaunchNewDraw } from "../../components/LaunchNewDraw";

type TDrawModal = {
  isOpen: boolean;
  handleModal: () => void;
  candidates: TCandidate[];
};

const DrawModal: React.FC<TDrawModal> = ({
  isOpen,
  handleModal,
  candidates,
}: TDrawModal) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center`}
    >
      <div className="bg-white w-1/2 m-auto p-4 rounded-lg flex flex-col gap-5">
        <div className="flex justify-end">
          <button
            className="text-black font-bold rounded px-4 py-2"
            onClick={() => handleModal()}
          >
            X
          </button>
        </div>
        <h1 className="text-2xl font-bold text-center">Candidates remaining</h1>
        <RemainingCandidates candidates={candidates} />
        <LaunchNewDraw users={candidates} />
      </div>
    </div>
  );
};

export { DrawModal };