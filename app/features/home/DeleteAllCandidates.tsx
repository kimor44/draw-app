"use client";
import { deleteAllCandidatesAction } from "@/app/src/actions/candidate/deleteAllCandidatesAction";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const DeleteAllCandidates = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const deleteAll = (e: React.MouseEvent<HTMLElement>) => {
    startTransition(async () => {
      e.preventDefault();
      deleteAllCandidatesAction();

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
