"use server";

import { headers } from "next/headers";

export const getIpAddress = () => {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-host");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
};

export const getIpAddress2 = async () => {
  const ip = await fetch("http://localhost:3000/api/ip", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return ip.text();
};
