-- CreateTable
CREATE TABLE "service_report" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "data_service" TIMESTAMP(3) NOT NULL,
    "category_service" TEXT NOT NULL,

    CONSTRAINT "service_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_order" (
    "os" TEXT NOT NULL,
    "reported_problems" TEXT NOT NULL,
    "finished" BOOLEAN NOT NULL,
    "date_os" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_order_pkey" PRIMARY KEY ("os")
);

-- CreateTable
CREATE TABLE "port" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "port_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ship" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "mmsi" TEXT NOT NULL,
    "imo" TEXT NOT NULL,
    "port_register" TEXT NOT NULL,
    "indicate_call" TEXT NOT NULL,

    CONSTRAINT "ship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipaments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date_manufacture" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "serial_number" INTEGER NOT NULL,

    CONSTRAINT "equipaments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collaborators" (
    "matricula" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "collaborators_pkey" PRIMARY KEY ("matricula")
);

-- CreateTable
CREATE TABLE "role" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "time_sheet" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "quantity_collaborator" INTEGER NOT NULL,
    "date_start" TIMESTAMP(3) NOT NULL,
    "date_ends" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "time_sheet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "service_report_id_key" ON "service_report"("id");

-- CreateIndex
CREATE UNIQUE INDEX "service_order_os_key" ON "service_order"("os");
