/*
  Warnings:

  - Added the required column `office` to the `colaborador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "colaborador" ADD COLUMN     "office" TEXT NOT NULL;
