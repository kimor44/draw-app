import { TCandidate } from './Candidates';
import { RemainingCandidates } from './RemainingCandidates';

export type TDrawContentToDisplay = {
  candidates: TCandidate[];
  chosenCandidate: string | null;
};

const DrawContentToDisplay = ({
  candidates,
  chosenCandidate
}: TDrawContentToDisplay) => {
  return chosenCandidate ? (
    <h2 className="text-center text-background bg-text dark:bg-background dark:text-text flex justify-center items-center align-middle font-bold text-xl py-2 rounded-md">
      {chosenCandidate}
    </h2>
  ) : (
    <RemainingCandidates candidates={candidates} />
  );
};
export { DrawContentToDisplay };
