-- CreateTable
CREATE TABLE "software" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "product_key" TEXT,
    "qtd_purchase" INTEGER NOT NULL,
    "qtd_used" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "software_pkey" PRIMARY KEY ("id")
);
