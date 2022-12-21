/*
  Warnings:

  - You are about to drop the column `indicate_call` on the `ship` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ship` table. All the data in the column will be lost.
  - You are about to drop the column `port_register` on the `ship` table. All the data in the column will be lost.
  - You are about to drop the column `date_ends` on the `time_sheet` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_collaborator` on the `time_sheet` table. All the data in the column will be lost.
  - You are about to drop the `materials_test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `materials_usage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name_vessel` to the `ship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `port_registry` to the `ship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arrive_job` to the `time_sheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `arrive_shop` to the `time_sheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leave_job` to the `time_sheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `men` to the `time_sheet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "materials_test" DROP CONSTRAINT "materials_test_fk_service_report_fkey";

-- DropForeignKey
ALTER TABLE "materials_usage" DROP CONSTRAINT "materials_usage_fk_service_report_fkey";

-- AlterTable
ALTER TABLE "ship" DROP COLUMN "indicate_call",
DROP COLUMN "name",
DROP COLUMN "port_register",
ADD COLUMN     "call_sign" TEXT,
ADD COLUMN     "name_vessel" TEXT NOT NULL,
ADD COLUMN     "port_registry" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "time_sheet" DROP COLUMN "date_ends",
DROP COLUMN "quantity_collaborator",
ADD COLUMN     "arrive_job" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "arrive_shop" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "leave_job" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "leave_shop" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "men" INTEGER NOT NULL;

-- DropTable
DROP TABLE "materials_test";

-- DropTable
DROP TABLE "materials_usage";

-- CreateTable
CREATE TABLE "usage_equipaments" (
    "id" TEXT NOT NULL,
    "serial_number" TEXT NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "fk_service_report" TEXT NOT NULL,

    CONSTRAINT "usage_equipaments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "test_equipaments" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "serial_number" TEXT NOT NULL,
    "fk_service_report" TEXT NOT NULL,

    CONSTRAINT "test_equipaments_pkey" PRIMARY KEY ("id","model","type","serial_number")
);

-- AddForeignKey
ALTER TABLE "usage_equipaments" ADD CONSTRAINT "usage_equipaments_fk_service_report_fkey" FOREIGN KEY ("fk_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test_equipaments" ADD CONSTRAINT "test_equipaments_fk_service_report_fkey" FOREIGN KEY ("fk_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
