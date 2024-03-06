'use server';

import { prisma } from '@/app/lib/prisma/_base';
import { cookies } from 'next/headers';

export const deleteCandidateAction = async (id: number) => {
  const sessionID = cookies().get('session-id');

  if (!sessionID) {
    return {
      error: 'Unable to delete the candidate. Session ID not found'
    };
  }

  try {
    const candidateToDelete = await prisma.candidate.findUnique({
      where: {
        id,
        sessionID: sessionID?.value
      }
    });

    if (!candidateToDelete) {
      return {
        warning: 'Something went wrong. Unable to delete the candidate'
      };
    }

    await prisma.candidate.delete({
      where: {
        id,
        sessionID: sessionID?.value
      }
    });

    return {
      success: `"${candidateToDelete.name}" was deleted successfully !`
    };
  } catch {
    return {
      error: 'Unable to delete the candidate.'
    };
  }
};
