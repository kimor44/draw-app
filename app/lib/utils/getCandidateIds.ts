import { TCandidate } from "@/app/features/home/Candidates";

export const getCandidateIds = (candidates: TCandidate[]) =>
  candidates.map((candidate) => candidate.id);
