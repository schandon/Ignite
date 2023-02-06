/*
  Warnings:

  - You are about to drop the column `date_start` on the `time_sheet` table. All the data in the column will be lost.
  - Added the required column `fk_service_report` to the `time_sheet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "time_sheet" DROP COLUMN "date_start",
ADD COLUMN     "fk_service_report" TEXT NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "leave_shop" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "time_sheet" ADD CONSTRAINT "time_sheet_fk_service_report_fkey" FOREIGN KEY ("fk_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
