/*
  Warnings:

  - You are about to drop the column `fk_collaborators_role` on the `service_report_collaborator_role` table. All the data in the column will be lost.
  - You are about to drop the `_collaboratorsTorole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `collaborators_role` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fk_collaborators` to the `service_report_collaborator_role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fk_role` to the `service_report_collaborator_role` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_collaboratorsTorole" DROP CONSTRAINT "_collaboratorsTorole_A_fkey";

-- DropForeignKey
ALTER TABLE "_collaboratorsTorole" DROP CONSTRAINT "_collaboratorsTorole_B_fkey";

-- DropForeignKey
ALTER TABLE "collaborators_role" DROP CONSTRAINT "collaborators_role_fk_collaborators_fkey";

-- DropForeignKey
ALTER TABLE "collaborators_role" DROP CONSTRAINT "collaborators_role_fk_role_fkey";

-- DropForeignKey
ALTER TABLE "service_report_collaborator_role" DROP CONSTRAINT "service_report_collaborator_role_fk_collaborators_role_fkey";

-- AlterTable
ALTER TABLE "service_report_collaborator_role" DROP COLUMN "fk_collaborators_role",
ADD COLUMN     "fk_collaborators" TEXT NOT NULL,
ADD COLUMN     "fk_role" TEXT NOT NULL;

-- DropTable
DROP TABLE "_collaboratorsTorole";

-- DropTable
DROP TABLE "collaborators_role";

-- AddForeignKey
ALTER TABLE "service_report_collaborator_role" ADD CONSTRAINT "service_report_collaborator_role_fk_role_fkey" FOREIGN KEY ("fk_role") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_report_collaborator_role" ADD CONSTRAINT "service_report_collaborator_role_fk_collaborators_fkey" FOREIGN KEY ("fk_collaborators") REFERENCES "collaborators"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;
