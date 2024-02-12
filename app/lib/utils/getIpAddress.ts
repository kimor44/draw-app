"use server";

export const getIpAddress = async () => {
  const ip = await fetch("https://api.ipify.org");

  return ip.text();
};
