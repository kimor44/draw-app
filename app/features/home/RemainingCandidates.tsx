"use client";

import { TCandidate } from "@/app/features/home/Candidates";

type TRemainingCandidates = {
  candidates: TCandidate[];
};

const RemainingCandidates: React.FC<TRemainingCandidates> = ({
  candidates,
}: TRemainingCandidates) => {
  return (
    <ul className="flex flex-col gap-4 w-full">
      {Object.values(candidates)?.map((candidate) => {
        return (
          <li key={candidate?.id.toString()} className="text-center">
            {candidate?.name}
          </li>
        );
      })}
    </ul>
  );
};
export { RemainingCandidates };
