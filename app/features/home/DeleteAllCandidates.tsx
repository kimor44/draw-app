"use client";
import { deleteAllCandidatesAction } from "@/app/src/actions/candidate/deleteAllCandidatesAction";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

type TDeleteAllCandidates = {
  onActionChange: () => void;
};

const DeleteAllCandidates = ({ onActionChange }: TDeleteAllCandidates) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const deleteAll = async (e: React.MouseEvent<HTMLElement>) => {
    startTransition(async () => {
      e.preventDefault();
      const allCandidatesDeleted = await deleteAllCandidatesAction();

      if (allCandidatesDeleted?.error) {
        toast.warning(allCandidatesDeleted.error);
        return;
      }

      toast.success(allCandidatesDeleted.success);

      onActionChange();

      router.refresh();
    });
  };

  return (
    <button
      className="px-3 py-2 bg-red-500 text-slate-100 font-bold disabled:opacity-75 disabled:bg-red-300 rounded"
      onClick={deleteAll}
      disabled={isPending}
    >
      Delete All
    </button>
  );
};
export { DeleteAllCandidates };
