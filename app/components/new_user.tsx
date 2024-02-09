"use client";

import { addUser } from "@/app/src/actions/users";
const newUser = () => {
  return (
    <form action={addUser} className="flex gap-4">
      <input
        className="text-black p-3 rounded-lg"
        type="text"
        name="name"
        placeholder="new user name"
      />
      <button type="submit" className="bg-black text-white rounded px-4 py-2">
        Add User
      </button>
    </form>
  );
};

export default newUser;
