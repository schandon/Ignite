-- AlterTable
ALTER TABLE "colaborador" ALTER COLUMN "date_hire" DROP NOT NULL,
ALTER COLUMN "date_hire" DROP DEFAULT,
ALTER COLUMN "date_hire" SET DATA TYPE TEXT;
