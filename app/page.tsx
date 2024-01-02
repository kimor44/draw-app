import Link from "next/link";
import { getUsers } from "@/app/actions";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/draw">Draw</Link>

      <ul>
        {Object.values(users)?.map((user) => {
          return (
            <li key={user.id.toString()}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
      <p className="h-48 bg-red-500" />
      <div className="h-48"></div>
    </main>
  );
}
