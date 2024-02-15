"use client";

import { CandidateLine } from "@/app/features/home/CandidateLine";

export type TCandidate = {
  id: number;
  name: string;
  isRemaining: boolean;
  createdAt: Date;
  updatedAt?: Date;
};

type TCandidates = {
  candidates: TCandidate[];
};

const Candidates = ({ candidates }: TCandidates) => {
  return (
    <ul className="flex flex-col gap-4 w-40">
      {Object.values(candidates)?.map((candidate) => {
        return (
          <CandidateLine key={candidate?.id.toString()} candidate={candidate} />
        );
      })}
    </ul>
  );
};

export { Candidates };
