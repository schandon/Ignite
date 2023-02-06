/*
  Warnings:

  - You are about to drop the column `fk_os` on the `port` table. All the data in the column will be lost.
  - Added the required column `fk_port` to the `service_order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "port" DROP CONSTRAINT "port_fk_os_fkey";

-- AlterTable
ALTER TABLE "port" DROP COLUMN "fk_os";

-- AlterTable
ALTER TABLE "service_order" ADD COLUMN     "fk_port" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "service_order" ADD CONSTRAINT "service_order_fk_port_fkey" FOREIGN KEY ("fk_port") REFERENCES "port"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
