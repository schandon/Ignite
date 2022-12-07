-- CreateTable
CREATE TABLE "colaborador_maquina" (
    "id" TEXT NOT NULL,
    "id_colaborador" TEXT NOT NULL,
    "id_maquina" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "colaborador_maquina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "colaborador_maquina" ADD CONSTRAINT "colaborador_maquina_id_colaborador_fkey" FOREIGN KEY ("id_colaborador") REFERENCES "colaborador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colaborador_maquina" ADD CONSTRAINT "colaborador_maquina_id_maquina_fkey" FOREIGN KEY ("id_maquina") REFERENCES "maquina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
