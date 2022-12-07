/*
  Warnings:

  - Added the required column `ends_at` to the `celular` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ends_at` to the `maquina` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "celular" ADD COLUMN     "ends_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "maquina" ADD COLUMN     "ends_at" TIMESTAMP(3) NOT NULL;
