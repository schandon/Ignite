/*
  Warnings:

  - A unique constraint covering the columns `[no_]` on the table `celular` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "celular_no__key" ON "celular"("no_");
