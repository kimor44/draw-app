"use client";

import { TUser } from "@/app/components/users";
import { RemainingUsers } from "./RemainingUsers";
import { LaunchNewDraw } from "./LaunchNewDraw";

type TDrawModal = {
  isOpen: boolean;
  handleModal: () => void;
  users: TUser[];
};

const DrawModal: React.FC<TDrawModal> = ({
  isOpen,
  handleModal,
  users,
}: TDrawModal) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center`}
    >
      <div className="bg-white w-1/2 m-auto p-4 rounded-lg flex flex-col gap-5">
        <div className="flex justify-end">
          <button
            className="text-black font-bold rounded px-4 py-2"
            onClick={() => handleModal()}
          >
            X
          </button>
        </div>
        <h1 className="text-2xl font-bold text-center">Users remaining</h1>
        <RemainingUsers users={users} />
        <LaunchNewDraw users={users} />
      </div>
    </div>
  );
};

export { DrawModal };
