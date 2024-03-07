import { MILLISECONDS_IN_THREE_DAYS } from '@/app/lib/numbers/millisecondsInthreeDays';
import { prisma } from '@/app/lib/prisma/_base';
import type { NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401
    });
  }

  const deletedCandidates = await prisma.candidate.deleteMany({
    where: {
      createdAt: {
        lte: new Date(Date.now() - MILLISECONDS_IN_THREE_DAYS)
      }
    }
  });

  if (deletedCandidates.count > 0) {
    return Response.json({ success: true, deletedCandidates });
  }

  return Response.json({ success: true });
};
