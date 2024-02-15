import "server-only";
import { cookies } from "next/headers";

type SessionId = string;

export const getSessionId = (): SessionId | undefined => {
  const cookieStore = cookies();
  return cookieStore.get("session-id")?.value;
};

const setSessionId = (sessionId: SessionId): void => {
  const cookieStore = cookies();
  cookieStore.set("session-id", sessionId);
};

export const getSessionIdAndCreateIfMissing = () => {
  const sessionId = getSessionId();
  if (!sessionId) {
    const newSessionId = crypto.randomUUID();
    setSessionId(newSessionId);

    return newSessionId;
  }

  return sessionId;
};
