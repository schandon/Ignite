/*
  Warnings:

  - You are about to drop the column `port_registry` on the `ship` table. All the data in the column will be lost.
  - The primary key for the `time_sheet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `date` on the `time_sheet` table. All the data in the column will be lost.
  - Made the column `flag_registry` on table `ship` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ship" DROP COLUMN "port_registry",
ALTER COLUMN "flag_registry" SET NOT NULL;

-- AlterTable
ALTER TABLE "time_sheet" DROP CONSTRAINT "time_sheet_pkey",
DROP COLUMN "date",
ADD COLUMN     "date_service" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "time_sheet_pkey" PRIMARY KEY ("id", "date_service");
