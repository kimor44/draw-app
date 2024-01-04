"use client";

import { addUser } from "@/app/src/actions/users";
const newUser = () => {
  return (
    <form action={addUser}>
      <input
        className="text-black p-3 rounded-lg"
        type="text"
        name="name"
        placeholder="new user name"
      />
      <br />
      <button type="submit">New user</button>
    </form>
  );
};

export default newUser;
