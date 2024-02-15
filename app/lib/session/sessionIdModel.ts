"use server";
import { cookies } from "next/headers";

type SessionId = string;

export const getSessionId = async () => {
  const cookieStore = cookies();
  return cookieStore.get("session-id")?.value;
};

const setSessionId = async (sessionId: SessionId) => {
  const cookieStore = cookies();
  cookieStore.set("session-id", sessionId);
};

export const getSessionIdAndCreateIfMissing = async () => {
  const sessionId = getSessionId();
  if (!sessionId) {
    const newSessionId = crypto.randomUUID();
    setSessionId(newSessionId);

    return newSessionId;
  }

  return sessionId;
};
