'use client';
import { deleteAllCandidatesAction } from '@/app/src/actions/candidate/deleteAllCandidatesAction';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';

type TDeleteAllCandidates = {
  ids: number[];
  onActionChange: () => void;
};

const DeleteAllCandidates = ({ onActionChange, ids }: TDeleteAllCandidates) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const deleteAll = async (e: React.MouseEvent<HTMLElement>) => {
    startTransition(async () => {
      e.preventDefault();
      const allCandidatesDeleted = await deleteAllCandidatesAction(ids);

      if (allCandidatesDeleted?.error) {
        toast.warning(allCandidatesDeleted.error);
        return;
      }

      if (allCandidatesDeleted?.warning) {
        toast.warning(allCandidatesDeleted.warning);
        return;
      }

      toast.success(allCandidatesDeleted.success);

      onActionChange();

      router.refresh();
    });
  };

  return (
    <button
      className="px-3 py-2 bg-text text-background font-bold disabled:opacity-75 disabled:bg-text/70 rounded transition"
      onClick={deleteAll}
      disabled={isPending}
    >
      Delete All
    </button>
  );
};
export { DeleteAllCandidates };
