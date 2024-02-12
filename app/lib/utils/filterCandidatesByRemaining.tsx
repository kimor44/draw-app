import { TCandidate } from "@/app/features/home/Candidates";

export const filteredCandidatesByRemaining = (
  candidates: TCandidate[]
): TCandidate[] => {
  return candidates.filter((candidate) => candidate.isRemaining);
};
