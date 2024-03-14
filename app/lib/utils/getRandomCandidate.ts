import { TCandidate } from '@/app/features/home/Candidates';
import { getRandomInt } from '@/app/lib/utils/getRandomInt';

export const getRandomCandidate = async (
  candidates: TCandidate[],
  milliseconds: number
) => {
  const randomCandidate = new Promise<TCandidate>((resolve) => {
    setTimeout(() => {
      const randomIndex = getRandomInt(0, candidates.length - 1);
      resolve(candidates[randomIndex]);
    }, milliseconds);
  });

  return randomCandidate;
};
