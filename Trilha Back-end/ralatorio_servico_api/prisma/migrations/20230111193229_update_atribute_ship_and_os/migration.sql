/*
  Warnings:

  - You are about to drop the column `fk_os` on the `ship` table. All the data in the column will be lost.
  - Added the required column `fk_ship_imo` to the `service_order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_ship_mmsi` to the `service_order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ship" DROP CONSTRAINT "ship_fk_os_fkey";

-- AlterTable
ALTER TABLE "service_order" ADD COLUMN     "fk_ship_imo" TEXT NOT NULL,
ADD COLUMN     "fk_ship_mmsi" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ship" DROP COLUMN "fk_os";

-- AddForeignKey
ALTER TABLE "service_order" ADD CONSTRAINT "service_order_fk_ship_imo_fk_ship_mmsi_fkey" FOREIGN KEY ("fk_ship_imo", "fk_ship_mmsi") REFERENCES "ship"("imo", "mmsi") ON DELETE RESTRICT ON UPDATE CASCADE;
