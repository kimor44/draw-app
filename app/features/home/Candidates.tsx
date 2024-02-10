"use client";

import UserLine from "@/app/components/user_line";

export type TCandidate = {
  id: number;
  name: string;
  isRemaining: boolean;
  ipAddress: string;
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
        return <UserLine key={candidate?.id.toString()} user={candidate} />;
      })}
    </ul>
  );
};

export default Candidates;
