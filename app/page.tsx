import Link from "next/link";
import { getUsers } from "@/app/src/actions/users";
import Users, { TUser } from "@/app/components/users";
import NewUser from "@/app/components/new_user";
import { NewDraw } from "@/app/components/NewDraw";

export default async function Home() {
  const users = await getUsers();

  const copiedUsers = [...users];

  const filteredUsersByRemaining = (users: TUser[]): TUser[] => {
    return users.filter((user) => user.isRemaining);
  };

  return (
    <main className="flex h-full flex-col items-center gap-10 p-12">
      <Link href="/draw">Draw</Link>

      <Users users={users} />
      <NewUser />
      <NewDraw users={filteredUsersByRemaining(copiedUsers)} />
      <div className="h-48"></div>
    </main>
  );
}
