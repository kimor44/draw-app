'use client';

import Link from 'next/link';
import { Candidates, TCandidate } from '@/app/features/home/Candidates';
import { DeleteAllCandidates } from '@/app/features/home/DeleteAllCandidates';
import { NewCandidate } from '@/app/features/home/NewCandidate';
import { NewDraw } from '@/app/features/home/NewDraw';
import { useEffect, useState } from 'react';
import { filteredCandidatesByRemaining } from '@/app/lib/utils/filterCandidatesByRemaining';
import { toast } from 'sonner';
import { getErrorMessage } from '@/app/lib/errors/getErrorMessage';
import { getCandidateIds } from '@/app/lib/utils/getCandidateIds';

export const App = () => {
  const [candidates, setCandidates] = useState<TCandidate[]>([]);
  const [isRendered, setIsRendered] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/candidate', { method: 'GET' });
        const data = await response.json();
        if (isRendered) {
          setCandidates(data);
          setIsRendered(false);
        }
      } catch (error) {
        toast.error(getErrorMessage(error));
      }
    };

    fetchData();

    return () => {
      setIsRendered(false);
    };
  }, [isRendered]);

  const copiedCandidates: TCandidate[] = [...candidates];
  const filteredCandidates = filteredCandidatesByRemaining(copiedCandidates);
  const candidatesIds = getCandidateIds(copiedCandidates);

  const onActionChange = () => {
    setIsRendered((cur) => !cur);
  };

  return (
    <main className="flex h-full flex-col items-center gap-10 p-12">
      <Link className="text-text" href="/draw">
        Draw
      </Link>
      {candidates.length > 0 && (
        <DeleteAllCandidates
          onActionChange={onActionChange}
          ids={candidatesIds}
        />
      )}
      {isRendered && <p>Loading...</p>}
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
