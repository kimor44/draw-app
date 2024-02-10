import Link from "next/link";
import { getCandidates } from "./src/actions/candidates";
import Users, { TUser } from "@/app/components/users";
import NewUser from "@/app/components/new_user";
import { NewDraw } from "@/app/components/NewDraw";

export default async function Home() {
  const candidates = await getCandidates();

  const copiedCandidates: TUser[] = [...candidates];

  const filteredUsersByRemaining = (users: TUser[]): TUser[] => {
    return users.filter((user) => user.isRemaining);
  };

  return (
    <main className="flex h-full flex-col items-center gap-10 p-12">
      <Link href="/draw">Draw</Link>
      <Users users={copiedCandidates} />
      <NewUser />
      <NewDraw users={filteredUsersByRemaining(copiedCandidates)} />
      <div className="h-48"></div>
    </main>
  );
}
