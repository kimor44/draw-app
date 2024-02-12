import { TCandidate } from "@/app/features/home/Candidates";
import { getIpAddress } from "@/app/lib/utils/getIpAddress";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type TCandidateLine = {
  candidate: TCandidate;
};

const CandidateLine: React.FC<TCandidateLine> = ({
  candidate,
}: TCandidateLine) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const deleteCandidate = (e: React.MouseEvent<HTMLElement>) => {
    startTransition(async () => {
      e.preventDefault();
      const id = candidate.id;

      try {
        await fetch("http://localhost:3000/api/candidate", {
          method: "DELETE",
          body: JSON.stringify({ id: id, ipAddress: getIpAddress() }),
        });

        router.refresh();
      } catch (error) {
        throw new Error(`impossible de supprimer un utilisateur : ${error}`);
      }
    });
  };

  const classes = candidate.isRemaining
    ? "text-green-500"
    : "text-slate-400 line-through";

  return (
    <li
      key={candidate?.id.toString()}
      className="flex justify-between items-center w-full"
    >
      <Link className={classes} href={`/candidates/${candidate?.id}`}>
        {candidate?.name}
      </Link>
      <button
        className="text-red-600 disabled:text-red-300 px-2 py-1 bg-slate-700 disabled:bg-slate-300 border border-red-600 rounded-lg font-bold disabled:opacity-75"
        onClick={deleteCandidate}
        disabled={isPending}
      >
        X
      </button>
    </li>
  );
};

export { CandidateLine };
