"use client";

import { useState } from "react";
import { DrawModal } from "./DrawModal";
import { TUser } from "@/app/components/users";

type TNewDraw = {
  users: TUser[];
};

const NewDraw: React.FC<TNewDraw> = ({ users }: TNewDraw) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    setIsOpen((cur) => !cur);
  };

  return (
    <>
      <button
        type="submit"
        onClick={handleModal}
        className="bg-green-500 text-white rounded px-4 py-2"
      >
        New Draw
      </button>
      <DrawModal isOpen={isOpen} handleModal={handleModal} users={users} />
    </>
  );
};

export { NewDraw };
