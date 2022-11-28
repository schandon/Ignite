-- CreateTable
CREATE TABLE "service_report" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "data_service" TIMESTAMP(3) NOT NULL,
    "category_service" TEXT NOT NULL,
    "fk_id_service_order" TEXT NOT NULL,

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
    "indicate_call" TEXT,

    CONSTRAINT "ship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "equipaments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date_manufacture" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "serial_number" INTEGER NOT NULL,
    "fk_id_service_report" TEXT NOT NULL,

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
    "fk_id_service_report" TEXT NOT NULL,

    CONSTRAINT "time_sheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materials_usage" (
    "id" TEXT NOT NULL,
    "number_items" INTEGER NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "fk_id_service_report" TEXT NOT NULL,

    CONSTRAINT "materials_usage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materials_test" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "serial_number" TEXT NOT NULL,
    "fk_id_service_report" TEXT NOT NULL,

    CONSTRAINT "materials_test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "service_report_id_key" ON "service_report"("id");

-- CreateIndex
CREATE UNIQUE INDEX "service_order_os_key" ON "service_order"("os");

-- AddForeignKey
ALTER TABLE "service_report" ADD CONSTRAINT "service_report_fk_id_service_order_fkey" FOREIGN KEY ("fk_id_service_order") REFERENCES "service_order"("os") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "equipaments" ADD CONSTRAINT "equipaments_fk_id_service_report_fkey" FOREIGN KEY ("fk_id_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_sheet" ADD CONSTRAINT "time_sheet_fk_id_service_report_fkey" FOREIGN KEY ("fk_id_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "materials_usage" ADD CONSTRAINT "materials_usage_fk_id_service_report_fkey" FOREIGN KEY ("fk_id_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "materials_test" ADD CONSTRAINT "materials_test_fk_id_service_report_fkey" FOREIGN KEY ("fk_id_service_report") REFERENCES "service_report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
