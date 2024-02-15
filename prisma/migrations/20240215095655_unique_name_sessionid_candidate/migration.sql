/*
  Warnings:

  - A unique constraint covering the columns `[name,sessionID]` on the table `Candidate` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Candidate_name_ipAddress_key";

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_name_sessionID_key" ON "Candidate"("name", "sessionID");
