export type TDrawModalTitle = {
  hasCandidates: boolean;
  isPending: boolean;
  chosenCandidate: string | null;
  setChosenCandidate: (candidate: string | null) => void;
  handleModal: () => void;
};

const DrawModalTitle = ({
  hasCandidates,
  isPending,
  chosenCandidate,
  setChosenCandidate,
  handleModal
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
    <h1 className="text-2xl font-bold text-center text-text dark:text-background relative">
      {getTitle()}
      <button
        className="absolute right-0 text-base text-text dark:text-background font-bold"
        onClick={() => {
          setChosenCandidate(null);
          handleModal();
        }}
      >
        X
      </button>
    </h1>
  );
};

export { DrawModalTitle };
