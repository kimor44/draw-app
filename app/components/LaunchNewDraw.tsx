"use client";
import { TUser } from "@/app/components/users";
import { getRandomInt } from "@/app/utils/getRandomInt";
import { waiting } from "@/app/utils/waiting";
import { toggleRemainingUser } from "@/app/src/actions/users";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export type TLaunchNewDraw = {
  users: TUser[];
};

const LaunchNewDraw = ({ users }: TLaunchNewDraw) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const launchDraw = () => {
    startTransition(async () => {
      const randomUser: TUser = users[getRandomInt(0, users.length - 1)];
      waiting(2000);

      try {
        await toggleRemainingUser(randomUser.id);

        router.refresh();
      } catch (error) {
        throw new Error(`L'utilisateur n'a pas été modifié : ${error}`);
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
