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

  let classes = candidate.isRemaining
    ? "text-green-500"
    : "text-slate-400 line-through";

  if (isPending) {
    classes += " opacity-75 text-slate-400 line-through";
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
        className="px-2 py-1 text-red-600 disabled:text-red-200 font-bold disabled:opacity-75"
        onClick={deleteCandidate}
        disabled={isPending}
      >
        x
      </button>
    </li>
  );
};

export { CandidateLine };
