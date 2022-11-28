/*
  Warnings:

  - You are about to drop the column `fk_id_service_report` on the `equipaments` table. All the data in the column will be lost.
  - The primary key for the `materials_test` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fk_id_service_report` on the `materials_test` table. All the data in the column will be lost.
  - You are about to drop the column `fk_id_service_report` on the `materials_usage` table. All the data in the column will be lost.
  - You are about to drop the column `fk_id_service_order` on the `service_report` table. All the data in the column will be lost.
  - The primary key for the `ship` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ship` table. All the data in the column will be lost.
  - The primary key for the `time_sheet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fk_id_service_report` on the `time_sheet` table. All the data in the column will be lost.
  - Added the required column `fk_service_report` to the `materials_test` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "equipaments" DROP CONSTRAINT "equipaments_fk_id_service_report_fkey";

-- DropForeignKey
ALTER TABLE "materials_test" DROP CONSTRAINT "materials_test_fk_id_service_report_fkey";

-- DropForeignKey
ALTER TABLE "materials_usage" DROP CONSTRAINT "materials_usage_fk_id_service_report_fkey";

-- DropForeignKey
ALTER TABLE "service_report" DROP CONSTRAINT "service_report_fk_id_service_order_fkey";

-- DropForeignKey
ALTER TABLE "time_sheet" DROP CONSTRAINT "time_sheet_fk_id_service_report_fkey";

-- AlterTable
ALTER TABLE "equipaments" DROP COLUMN "fk_id_service_report";

-- AlterTable
ALTER TABLE "materials_test" DROP CONSTRAINT "materials_test_pkey",
DROP COLUMN "fk_id_service_report",
ADD COLUMN     "fk_service_report" TEXT NOT NULL,
ADD CONSTRAINT "materials_test_pkey" PRIMARY KEY ("id", "model", "type", "serial_number");

-- AlterTable
ALTER TABLE "materials_usage" DROP COLUMN "fk_id_service_report";

-- AlterTable
ALTER TABLE "service_report" DROP COLUMN "fk_id_service_order";

-- AlterTable
ALTER TABLE "ship" DROP CONSTRAINT "ship_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ship_pkey" PRIMARY KEY ("mmsi", "imo");

-- AlterTable
ALTER TABLE "time_sheet" DROP CONSTRAINT "time_sheet_pkey",
DROP COLUMN "fk_id_service_report",
ADD CONSTRAINT "time_sheet_pkey" PRIMARY KEY ("id", "date");

-- CreateTable
CREATE TABLE "service_report_role" (
    "id" TEXT NOT NULL,
    "fk_service_report" TEXT NOT NULL,
    "fk_role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_report_role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_report_collaborator" (
    "id" TEXT NOT NULL,
    "fk_service_report" TEXT NOT NULL,
    "fk_collaborators" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_report_collaborator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_report_equipaments" (
    "id" TEXT NOT NULL,
    "fk_service_report" TEXT NOT NULL,
    "fk_equipaments" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_report_equipaments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "materials_test" ADD CONSTRAINT "materials_test_fk_service_report_fkey" FOREIGN KEY ("fk_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_report_role" ADD CONSTRAINT "service_report_role_fk_service_report_fkey" FOREIGN KEY ("fk_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_report_role" ADD CONSTRAINT "service_report_role_fk_role_fkey" FOREIGN KEY ("fk_role") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_report_collaborator" ADD CONSTRAINT "service_report_collaborator_fk_service_report_fkey" FOREIGN KEY ("fk_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_report_collaborator" ADD CONSTRAINT "service_report_collaborator_fk_collaborators_fkey" FOREIGN KEY ("fk_collaborators") REFERENCES "collaborators"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_report_equipaments" ADD CONSTRAINT "service_report_equipaments_fk_service_report_fkey" FOREIGN KEY ("fk_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_report_equipaments" ADD CONSTRAINT "service_report_equipaments_fk_equipaments_fkey" FOREIGN KEY ("fk_equipaments") REFERENCES "equipaments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
