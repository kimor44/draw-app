-- CreateTable
CREATE TABLE "Candidate" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "is_remaining" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);
