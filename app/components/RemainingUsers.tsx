"use client";

import { TCandidate } from "@/app/features/home/Candidates";

type TRemainingUsers = {
  users: TCandidate[];
};

const RemainingUsers: React.FC<TRemainingUsers> = ({
  users,
}: TRemainingUsers) => {
  return (
    <ul className="flex flex-col gap-4 w-full">
      {Object.values(users)?.map((user) => {
        return (
          <li key={user?.id.toString()} className="text-center">
            {user?.name}
          </li>
        );
      })}
    </ul>
  );
};
export { RemainingUsers };
