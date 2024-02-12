"use client";
import { TCandidate } from "@/app/features/home/Candidates";
import { getRandomInt } from "@/app/lib/utils/getRandomInt";
import { waiting } from "@/app/lib/utils/waiting";
import { toggleCandidate } from "@/app/src/actions/candidate/toggleCandidate";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export type TLaunchNewDraw = {
  candidates: TCandidate[];
};

const LaunchNewDraw = ({ candidates }: TLaunchNewDraw) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const launchDraw = () => {
    startTransition(async () => {
      const randomCandidate: TCandidate =
        candidates[getRandomInt(0, candidates.length - 1)];
      waiting(2000);

      try {
        await toggleCandidate(randomCandidate.id);

        router.refresh();
      } catch (error) {
        throw new Error(`The candidata wasn't updated : ${error}`);
      }
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
