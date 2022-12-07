-- CreateTable
CREATE TABLE "colaborador_celular" (
    "id" TEXT NOT NULL,
    "id_colaborador" TEXT NOT NULL,
    "id_celular" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "colaborador_celular_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "colaborador_celular" ADD CONSTRAINT "colaborador_celular_id_colaborador_fkey" FOREIGN KEY ("id_colaborador") REFERENCES "colaborador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborador_celular" ADD CONSTRAINT "colaborador_celular_id_celular_fkey" FOREIGN KEY ("id_celular") REFERENCES "celular"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
