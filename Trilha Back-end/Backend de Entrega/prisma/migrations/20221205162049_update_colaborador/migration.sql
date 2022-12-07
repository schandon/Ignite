/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `colaborador` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `colaborador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "colaborador" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "colaborador_email_key" ON "colaborador"("email");
