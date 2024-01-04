import Link from "next/link";
import { getUsers } from "@/app/src/actions/users";
import Users from "@/app/components/users";
import NewUser from "@/app/components/new_user";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/draw">Draw</Link>

      <Users users={users} />
      <NewUser />
      <div className="h-48"></div>
    </main>
  );
}
