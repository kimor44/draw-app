"use server";
import { kv } from "@vercel/kv";
import { getSessionId, getSessionIdAndCreateIfMissing } from "./sessionIdModel";

export const get = async (key: string, namespace: string = "") => {
  const sessionId = await getSessionId();
  if (!sessionId) {
    return null;
  }
  return kv.hget(`session-${namespace}-${sessionId}`, key);
};

export const getAll = async (namespace: string = "") => {
  const sessionId = await getSessionId();
  if (!sessionId) {
    return null;
  }
  return kv.hgetall(`session-${namespace}-${sessionId}`);
};

export const set = async (
  key: string,
  value: string,
  namespace: string = ""
) => {
  const sessionId = await getSessionIdAndCreateIfMissing();
  return kv.hset(`session-${namespace}-${sessionId}`, { [key]: value });
};
