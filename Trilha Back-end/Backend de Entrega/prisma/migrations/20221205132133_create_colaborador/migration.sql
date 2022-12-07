/*
  Warnings:

  - You are about to drop the `Clients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Deliveries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Deliveryman` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Deliveries" DROP CONSTRAINT "Deliveries_fk_clients_fkey";

-- DropForeignKey
ALTER TABLE "Deliveries" DROP CONSTRAINT "Deliveries_fk_deliveryman_fkey";

-- DropTable
DROP TABLE "Clients";

-- DropTable
DROP TABLE "Deliveries";

-- DropTable
DROP TABLE "Deliveryman";

-- CreateTable
CREATE TABLE "colaborador" (
    "id" TEXT NOT NULL,
    "user_domain" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "acess_server" TEXT NOT NULL,
    "perm_acess_internet" BOOLEAN NOT NULL,
    "perm_install_software" BOOLEAN NOT NULL,
    "trainee" BOOLEAN DEFAULT false,
    "date_hire" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_resignation" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "colaborador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "colaborador_user_domain_key" ON "colaborador"("user_domain");

-- CreateIndex
CREATE UNIQUE INDEX "colaborador_full_name_key" ON "colaborador"("full_name");

-- CreateIndex
CREATE UNIQUE INDEX "colaborador_acess_server_key" ON "colaborador"("acess_server");
