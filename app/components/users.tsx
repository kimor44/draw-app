"use client";

import UserLine from "@/app/components/user_line";

export type TUser = {
  id: number;
  name: string;
  isRemaining: boolean;
  createdAt: Date;
  updatedAt?: Date;
};

type TUsers = {
  users: TUser[];
};

const Users = ({ users }: TUsers) => {
  return (
    <ul className="flex flex-col gap-4">
      {Object.values(users)?.map((user) => {
        return <UserLine key={user?.id.toString()} user={user} />;
      })}
    </ul>
  );
};

export default Users;
