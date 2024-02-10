import { TCandidate } from "@/app/features/home/Candidates";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type TUserLine = {
  user: TCandidate;
};

const UserLine: React.FC<TUserLine> = ({ user }: TUserLine) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const deleteUser = (e: React.MouseEvent<HTMLElement>) => {
    startTransition(async () => {
      e.preventDefault();
      const id = user.id;

      try {
        await fetch("http://localhost:3000/api/user", {
          method: "DELETE",
          body: JSON.stringify({ id: id }),
        });

        router.refresh();
      } catch (error) {
        throw new Error(`impossible de supprimer un utilisateur : ${error}`);
      }
    });
  };

  const classes = user.isRemaining
    ? "text-green-500"
    : "text-slate-400 line-through";

  return (
    <li
      key={user?.id.toString()}
      className="flex justify-between items-center w-full"
    >
      <Link className={classes} href={`/users/${user?.id}`}>
        {user?.name}
      </Link>
      <button
        className="text-red-600 disabled:text-red-300 px-2 py-1 bg-slate-700 disabled:bg-slate-300 border border-red-600 rounded-lg font-bold disabled:opacity-75"
        onClick={deleteUser}
        disabled={isPending}
      >
        X
      </button>
    </li>
  );
};

export default UserLine;
