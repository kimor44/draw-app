"use client";
import { TCandidate } from "@/app/features/home/Candidates";
import { getRandomInt } from "@/app/lib/utils/getRandomInt";
import { waiting } from "@/app/lib/utils/waiting";
import { toggleCandidateAction } from "@/app/src/actions/candidate/toggleCandidateAction";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export type TLaunchNewDraw = {
  candidates: TCandidate[];
  onActionChange: () => void;
};

const LaunchNewDraw = ({ candidates, onActionChange }: TLaunchNewDraw) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const launchDraw = () => {
    startTransition(async () => {
      const randomCandidate: TCandidate =
        candidates[getRandomInt(0, candidates.length - 1)];
      waiting(2000);

      await toggleCandidateAction(randomCandidate.id);

      onActionChange();
      router.refresh();
    });
  };

  return (
    <button
      className="bg-green-500 text-white rounded px-4 py-2 disabled:bg-green-200 disabled:text-gray-600"
      onClick={launchDraw}
      disabled={isPending}
    >
      Launch new Draw
    </button>
  );
};
export { LaunchNewDraw };
