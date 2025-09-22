/*
  Warnings:

  - Added the required column `address` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Asset" ADD COLUMN     "address" TEXT NOT NULL;
