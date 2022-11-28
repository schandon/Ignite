/*
  Warnings:

  - You are about to drop the `service_report_collaborator` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `service_report_role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "service_report_collaborator" DROP CONSTRAINT "service_report_collaborator_fk_collaborators_fkey";

-- DropForeignKey
ALTER TABLE "service_report_collaborator" DROP CONSTRAINT "service_report_collaborator_fk_service_report_fkey";

-- DropForeignKey
ALTER TABLE "service_report_role" DROP CONSTRAINT "service_report_role_fk_role_fkey";

-- DropForeignKey
ALTER TABLE "service_report_role" DROP CONSTRAINT "service_report_role_fk_service_report_fkey";

-- DropTable
DROP TABLE "service_report_collaborator";

-- DropTable
DROP TABLE "service_report_role";

-- CreateTable
CREATE TABLE "service_report_collaborator_role" (
    "id" TEXT NOT NULL,
    "fk_service_report" TEXT NOT NULL,
    "fk_collaborators" TEXT NOT NULL,
    "fk_role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_report_collaborator_role_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "service_report_collaborator_role" ADD CONSTRAINT "service_report_collaborator_role_fk_service_report_fkey" FOREIGN KEY ("fk_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_report_collaborator_role" ADD CONSTRAINT "service_report_collaborator_role_fk_collaborators_fkey" FOREIGN KEY ("fk_collaborators") REFERENCES "collaborators"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_report_collaborator_role" ADD CONSTRAINT "service_report_collaborator_role_fk_role_fkey" FOREIGN KEY ("fk_role") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
