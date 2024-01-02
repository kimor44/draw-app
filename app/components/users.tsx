"use client";

import Link from "next/link";

type TUser = {
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
    <ul>
      {Object.values(users)?.map((user) => {
        return (
          <li key={user?.id.toString()}>
            <Link href={`/users/${user?.id}`}>{user?.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
