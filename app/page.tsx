import Link from "next/link";
import { getCandidates } from "@/app/src/actions/candidate/getCandidates";
import { Candidates, TCandidate } from "@/app/features/home/Candidates";
import { NewCandidate } from "@/app/features/home/NewCandidate";
import { NewDraw } from "@/app/components/NewDraw";
import { filteredCandidatesByRemaining } from "@/app/lib/utils/filterCandidatesByRemaining";

export default async function Home() {
  const candidates = await getCandidates();

  const copiedCandidates: TCandidate[] = [...candidates];

  const filteredCandidates = filteredCandidatesByRemaining(copiedCandidates);

  return (
    <main className="flex h-full flex-col items-center gap-10 p-12">
      <Link href="/draw">Draw</Link>
      <Candidates candidates={copiedCandidates} />
      <NewCandidate />
      <NewDraw candidates={filteredCandidates} />
      <div className="h-48"></div>
    </main>
  );
}
