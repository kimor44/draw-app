export type TDrawModalTitle = {
  hasCandidates: boolean;
  isPending: boolean;
  chosenCandidate: string | null;
};

const DrawModalTitle = ({
  hasCandidates,
  isPending,
  chosenCandidate
}: TDrawModalTitle) => {
  const getTitle = () => {
    if (!hasCandidates && !chosenCandidate) {
      return 'No candidates remaining';
    }

    if (isPending) {
      return 'Draw in progress...';
    }

    if (chosenCandidate) {
      return 'The candidate drawn at random is';
    }

    return 'Candidates remaining';
  };
  return (
    <h1 className="text-2xl font-bold text-center text-text dark:text-background">
      {getTitle()}
    </h1>
  );
};
export { DrawModalTitle };
