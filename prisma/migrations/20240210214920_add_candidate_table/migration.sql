-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "isRemaining" BOOLEAN NOT NULL DEFAULT true,
    "ipAddress" TEXT NOT NULL DEFAULT '0.0.0.0',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);
