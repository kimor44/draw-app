import { kv } from "@vercel/kv";
import { getSessionId, getSessionIdAndCreateIfMissing } from "./sessionIdModel";

export const get = (key: string, namespace: string = "") => {
  const sessionId = getSessionId();
  if (!sessionId) {
    return null;
  }
  return kv.hget(`session-${namespace}-${sessionId}`, key);
};

export const getAll = (namespace: string = "") => {
  const sessionId = getSessionId();
  if (!sessionId) {
    return null;
  }
  return kv.hgetall(`session-${namespace}-${sessionId}`);
};

export const set = (key: string, value: string, namespace: string = "") => {
  const sessionId = getSessionIdAndCreateIfMissing();
  return kv.hset(`session-${namespace}-${sessionId}`, { [key]: value });
};
