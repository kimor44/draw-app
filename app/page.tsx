import Link from "next/link";
import { getUsers } from "@/app/actions";
import Users from "./components/users";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/draw">Draw</Link>

      <Users users={users} />
      <p className="h-48 bg-red-500" />
      <div className="h-48"></div>
    </main>
  );
}
