import Link from "next/link";
import { getCandidates } from "@/app/src/actions/candidates";
import Candidates, { TCandidate } from "@/app/features/home/Candidates";
import NewUser from "@/app/components/new_user";
import { NewDraw } from "@/app/components/NewDraw";

export default async function Home() {
  const candidates = await getCandidates();

  const copiedCandidates: TCandidate[] = [...candidates];

  const filteredCandidatesByRemaining = (
    candidates: TCandidate[]
  ): TCandidate[] => {
    return candidates.filter((candidate) => candidate.isRemaining);
  };

  return (
    <main className="flex h-full flex-col items-center gap-10 p-12">
      <Link href="/draw">Draw</Link>
      <Candidates candidates={copiedCandidates} />
      <NewUser />
      <NewDraw users={filteredCandidatesByRemaining(copiedCandidates)} />
      <div className="h-48"></div>
    </main>
  );
}
