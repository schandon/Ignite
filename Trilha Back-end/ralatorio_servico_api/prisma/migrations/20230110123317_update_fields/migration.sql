/*
  Warnings:

  - Added the required column `fk_os` to the `port` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_os` to the `service_report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_os` to the `ship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "port" ADD COLUMN     "fk_os" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "service_report" ADD COLUMN     "fk_os" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ship" ADD COLUMN     "fk_os" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "service_report" ADD CONSTRAINT "service_report_fk_os_fkey" FOREIGN KEY ("fk_os") REFERENCES "service_order"("os") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "port" ADD CONSTRAINT "port_fk_os_fkey" FOREIGN KEY ("fk_os") REFERENCES "service_order"("os") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ship" ADD CONSTRAINT "ship_fk_os_fkey" FOREIGN KEY ("fk_os") REFERENCES "service_order"("os") ON DELETE RESTRICT ON UPDATE CASCADE;
