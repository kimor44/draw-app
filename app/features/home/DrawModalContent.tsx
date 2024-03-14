import Image from 'next/image';
import { TCandidate } from './Candidates';
import { LaunchNewDraw } from './LaunchNewDraw';
import { DrawContentToDisplay } from './DrawContentToDisplay';

export type TDrawModalContent = {
  candidates: TCandidate[];
  launchDraw: () => void;
  isPending: boolean;
  chosenCandidate: string | null;
};

const DrawModalContent = ({
  candidates,
  launchDraw,
  isPending,
  chosenCandidate
}: TDrawModalContent) => {
  return (
    <>
      {isPending ? (
        <div className="flex flex-col justify-center text-center items-center">
          <Image
            src="/spinner.svg"
            alt="Spinner"
            width={100}
            height={100}
            className="animate-spin"
          />
        </div>
      ) : (
        <DrawContentToDisplay
          candidates={candidates}
          chosenCandidate={chosenCandidate}
        />
      )}
      {!chosenCandidate && (
        <LaunchNewDraw launchNewDraw={launchDraw} isPending={isPending} />
      )}
    </>
  );
};
export { DrawModalContent };
