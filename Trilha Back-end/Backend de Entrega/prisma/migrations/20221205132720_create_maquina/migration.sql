-- CreateTable
CREATE TABLE "maquina" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "service_tag" TEXT NOT NULL,
    "so" TEXT NOT NULL,
    "memory" INTEGER NOT NULL,
    "hd" INTEGER,
    "ssd" INTEGER,
    "ip" TEXT NOT NULL,
    "mac_address" TEXT NOT NULL,
    "manager" TEXT NOT NULL,
    "cod_jdb" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_sale" TIMESTAMP(3),

    CONSTRAINT "maquina_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "maquina_name_key" ON "maquina"("name");

-- CreateIndex
CREATE UNIQUE INDEX "maquina_service_tag_key" ON "maquina"("service_tag");
