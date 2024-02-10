"use client";

import { addCandidate } from "@/app/src/actions/candidates";

const NewCandidate = () => {
  return (
    <form action={addCandidate} className="flex gap-4">
      <input
        className="text-black p-3 rounded-lg"
        type="text"
        name="name"
        placeholder="new candidate name"
      />
      <button type="submit" className="bg-black text-white rounded px-4 py-2">
        Add candidate
      </button>
    </form>
  );
};

export { NewCandidate };
