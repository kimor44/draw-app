import { TUser } from "@/app/components/users";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type TUserLine = {
  user: TUser;
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

  return (
    <li key={user?.id.toString()} className="flex gap-3 items-center">
      <Link href={`/users/${user?.id}`}>{user?.name}</Link>
      <button
        className="text-red-600 px-4 py-2 bg-slate-700 border border-red-600 rounded-lg"
        onClick={deleteUser}
        disabled={isPending}
      >
        X
      </button>
    </li>
  );
};

export default UserLine;
