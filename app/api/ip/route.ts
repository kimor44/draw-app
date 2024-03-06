import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  // const ip = req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for");

  const ip = req.ip;

  return new Response(ip, { status: 200 });
};
