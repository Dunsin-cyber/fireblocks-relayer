/*
  Warnings:

  - You are about to drop the column `externalId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[upstreamUserId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `upstreamUserId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."User_externalId_key";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "externalId",
ADD COLUMN     "upstreamUserId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_upstreamUserId_key" ON "public"."User"("upstreamUserId");
