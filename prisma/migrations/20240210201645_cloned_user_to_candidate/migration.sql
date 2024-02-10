/*
  Warnings:

  - You are about to drop the column `is_remaining` on the `Candidate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Candidate"
RENAME COLUMN "is_remaining" TO "isRemaining";