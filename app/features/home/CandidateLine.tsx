import { TCandidate } from '@/app/features/home/Candidates';
import { deleteCandidateAction } from '@/app/src/actions/candidate/deleteCandidateAction';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

type TCandidateLine = {
  candidate: TCandidate;
  onActionChange: () => void;
};

const CandidateLine: React.FC<TCandidateLine> = ({
  candidate,
  onActionChange
}: TCandidateLine) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const deleteCandidate = (e: React.MouseEvent<HTMLElement>) => {
    startTransition(async () => {
      e.preventDefault();
      const id = Number(candidate.id);
      const deletedCandidate = await deleteCandidateAction(id);

      if (!deletedCandidate) {
        return;
      }

      if (deletedCandidate.error) {
        toast.error(deletedCandidate.error);
        return;
      }

      if (deletedCandidate.warning) {
        toast.warning(deletedCandidate.warning);
        return;
      }

      onActionChange();

      router.refresh();

      toast.success(deletedCandidate.success);
    });
  };

  let classes = candidate.isRemaining
    ? 'text-accent'
    : 'text-text opacity-40 line-through';

  if (isPending) {
    classes += ' text-text opacity-40 line-through';
  }

  return (
    <li
      key={candidate?.id.toString()}
      className="flex justify-between items-center w-full"
    >
      <Link className={classes} href={`/candidates/${candidate?.id}`}>
        {candidate?.name}
      </Link>
      <button
        className="px-2 py-1 text-text disabled:text-text/80 font-bold disabled:opacity-75"
        onClick={deleteCandidate}
        disabled={isPending}
      >
        x
      </button>
    </li>
  );
};

export { CandidateLine };
