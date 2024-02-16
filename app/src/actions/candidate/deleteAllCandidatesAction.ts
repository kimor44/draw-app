<<<<<<<< HEAD:app/src/actions/candidate/deleteAllCandidatesAction.ts
"use server";

import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

export const deleteAllCandidatesAction = async () => {
  let sessionID = cookies().get("session-id");

  if (!sessionID) {
    const newSessionId = crypto.randomUUID();
    const newCookie = { name: "session-id", value: newSessionId };
    cookies().set(newCookie);
    sessionID = cookies().get("session-id");
  }

  const prisma = new PrismaClient();

  await prisma.candidate.deleteMany({
    where: {
      sessionID: sessionID?.value,
    },
  });
};
========
// import { cookies } from "next/headers";

// export const getSessionId = async () => {
//   let sessionID = cookies().get("session-id");

//   if (!sessionID) {
//     const newSessionId = crypto.randomUUID();
//     const newCookie = { name: "session-id", value: newSessionId };
//     cookies().set(newCookie);
//     sessionID = cookies().get("session-id");
//   }
//   return sessionID;
// };
>>>>>>>> 1390ef5 (Update for bug fix):app/lib/session/getSessionId.ts
