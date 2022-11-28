/*
  Warnings:

  - Added the required column `fk_service_report` to the `materials_usage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "materials_usage" ADD COLUMN     "fk_service_report" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "materials_usage" ADD CONSTRAINT "materials_usage_fk_service_report_fkey" FOREIGN KEY ("fk_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
