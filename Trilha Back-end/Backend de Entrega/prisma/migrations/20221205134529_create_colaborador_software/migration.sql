-- AlterTable
ALTER TABLE "celular" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "colaborador_software" (
    "id" TEXT NOT NULL,
    "id_colaborador" TEXT NOT NULL,
    "id_software" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "colaborador_software_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "colaborador_software" ADD CONSTRAINT "colaborador_software_id_colaborador_fkey" FOREIGN KEY ("id_colaborador") REFERENCES "colaborador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborador_software" ADD CONSTRAINT "colaborador_software_id_software_fkey" FOREIGN KEY ("id_software") REFERENCES "software"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
