import Link from "next/link";
import { getCandidateInformation } from "./actions";

const Page = async ({ params }: { params: { id: number } }) => {
  const candidate = await getCandidateInformation(Number(params.id));

  return (
    <div>
      <h1>
        Name : <span className="">{candidate?.name}</span>
      </h1>
      <p>
        Is remaining :{" "}
        <strong>{candidate?.isRemaining ? "true" : "false"}</strong>
      </p>
      <p>Id : {candidate?.id.toString()}</p>
      <p>Created on : {candidate?.createdAt.toISOString().slice(0, 10)}</p>
      <Link className="cursor-pointer underline" href="/">
        Back to Home
      </Link>
    </div>
  );
};

export default Page;
