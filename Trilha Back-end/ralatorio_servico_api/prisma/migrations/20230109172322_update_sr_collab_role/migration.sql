/*
  Warnings:

  - You are about to drop the column `fk_collaborators` on the `service_report_collaborator_role` table. All the data in the column will be lost.
  - You are about to drop the column `fk_role` on the `service_report_collaborator_role` table. All the data in the column will be lost.
  - Added the required column `fk_collaborators_role` to the `service_report_collaborator_role` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "service_report_collaborator_role" DROP CONSTRAINT "service_report_collaborator_role_fk_collaborators_fkey";

-- DropForeignKey
ALTER TABLE "service_report_collaborator_role" DROP CONSTRAINT "service_report_collaborator_role_fk_role_fkey";

-- AlterTable
ALTER TABLE "service_report_collaborator_role" DROP COLUMN "fk_collaborators",
DROP COLUMN "fk_role",
ADD COLUMN     "fk_collaborators_role" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "service_report_collaborator_role" ADD CONSTRAINT "service_report_collaborator_role_fk_collaborators_role_fkey" FOREIGN KEY ("fk_collaborators_role") REFERENCES "collaborators_role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
