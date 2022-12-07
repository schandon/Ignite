-- CreateTable
CREATE TABLE "Deliveryman" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Deliveryman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clients" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deliveries" (
    "id" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "fk_clients" TEXT NOT NULL,
    "fk_deliveryman" TEXT NOT NULL,

    CONSTRAINT "Deliveries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Deliveryman_username_key" ON "Deliveryman"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Clients_username_key" ON "Clients"("username");

-- AddForeignKey
ALTER TABLE "Deliveries" ADD CONSTRAINT "Deliveries_fk_clients_fkey" FOREIGN KEY ("fk_clients") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deliveries" ADD CONSTRAINT "Deliveries_fk_deliveryman_fkey" FOREIGN KEY ("fk_deliveryman") REFERENCES "Deliveryman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
