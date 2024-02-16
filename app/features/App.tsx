"use client";

import Link from "next/link";
import { Candidates, TCandidate } from "./home/Candidates";
import { DeleteAllCandidates } from "./home/DeleteAllCandidates";
import { NewCandidate } from "./home/NewCandidate";
import { NewDraw } from "./home/NewDraw";
import { useEffect, useState } from "react";
import { filteredCandidatesByRemaining } from "../lib/utils/filterCandidatesByRemaining";

export const App = () => {
  const [candidates, setCandidates] = useState<TCandidate[]>([]);
  const [isRendered, setIsRendered] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      fetch("/api/candidate", { method: "GET" }).then((res) =>
        res
          .json()
          .then((data) => {
            if (isRendered) {
              setCandidates(data);
              setIsRendered(false);
            }
          })
          .catch((err) => {
            throw new Error(err);
          })
      );
    };

    fetchData();

    return () => {
      setIsRendered(false);
    };
  }, [isRendered]);

  const copiedCandidates: TCandidate[] = [...candidates];
  const filteredCandidates = filteredCandidatesByRemaining(copiedCandidates);

  const onActionChange = () => {
    setIsRendered((cur) => !cur);
  };

  return (
    <main className="flex h-full flex-col items-center gap-10 p-12">
      <Link href="/draw">Draw</Link>
      <DeleteAllCandidates onActionChange={onActionChange} />
      <Candidates
        candidates={copiedCandidates}
        onActionChange={onActionChange}
      />
      <NewCandidate onActionChange={onActionChange} />
      <NewDraw
        candidates={filteredCandidates}
        onActionChange={onActionChange}
      />
      <div className="h-48"></div>
    </main>
  );
};
