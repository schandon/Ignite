-- DropForeignKey
ALTER TABLE "service_report_collaborator_role" DROP CONSTRAINT "service_report_collaborator_role_fk_collaborators_fkey";

-- DropForeignKey
ALTER TABLE "service_report_collaborator_role" DROP CONSTRAINT "service_report_collaborator_role_fk_role_fkey";

-- DropForeignKey
ALTER TABLE "service_report_collaborator_role" DROP CONSTRAINT "service_report_collaborator_role_fk_service_report_fkey";

-- AlterTable
ALTER TABLE "service_report_collaborator_role" ALTER COLUMN "fk_service_report" DROP NOT NULL,
ALTER COLUMN "fk_collaborators" DROP NOT NULL,
ALTER COLUMN "fk_role" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "service_report_collaborator_role" ADD CONSTRAINT "service_report_collaborator_role_fk_service_report_fkey" FOREIGN KEY ("fk_service_report") REFERENCES "service_report"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_report_collaborator_role" ADD CONSTRAINT "service_report_collaborator_role_fk_collaborators_fkey" FOREIGN KEY ("fk_collaborators") REFERENCES "collaborators"("matricula") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_report_collaborator_role" ADD CONSTRAINT "service_report_collaborator_role_fk_role_fkey" FOREIGN KEY ("fk_role") REFERENCES "role"("id") ON DELETE SET NULL ON UPDATE CASCADE;
