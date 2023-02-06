-- DropForeignKey
ALTER TABLE "service_order" DROP CONSTRAINT "service_order_fk_port_fkey";

-- AlterTable
ALTER TABLE "service_order" ALTER COLUMN "fk_port" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "service_order" ADD CONSTRAINT "service_order_fk_port_fkey" FOREIGN KEY ("fk_port") REFERENCES "port"("id") ON DELETE SET NULL ON UPDATE CASCADE;
