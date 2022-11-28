/*
  Warnings:

  - You are about to drop the column `number_items` on the `materials_usage` table. All the data in the column will be lost.
  - Added the required column `serial_number` to the `materials_usage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "materials_usage" DROP COLUMN "number_items",
ADD COLUMN     "serial_number" TEXT NOT NULL;
