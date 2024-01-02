import { getUserInformation } from "@/app/users/[id]/actions";
import Link from "next/link";

const Page = async ({ params }: { params: { id: number } }) => {
  const user = await getUserInformation(Number(params.id));

  return (
    <div>
      <h1>
        Name : <span className="">{user?.name}</span>
      </h1>
      <p>Is remaining : {user?.isRemaining ? "true" : "false"}</p>
      <p>Id : {user?.id.toString()}</p>
      <p>Created on : {user?.createdAt.toISOString().slice(0, 10)}</p>
      <Link className="cursor-pointer underline" href="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Page;
