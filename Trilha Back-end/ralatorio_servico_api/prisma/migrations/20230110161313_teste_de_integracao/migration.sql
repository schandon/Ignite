-- CreateTable
CREATE TABLE "_collaboratorsTorole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_collaboratorsTorole_AB_unique" ON "_collaboratorsTorole"("A", "B");

-- CreateIndex
CREATE INDEX "_collaboratorsTorole_B_index" ON "_collaboratorsTorole"("B");

-- AddForeignKey
ALTER TABLE "_collaboratorsTorole" ADD CONSTRAINT "_collaboratorsTorole_A_fkey" FOREIGN KEY ("A") REFERENCES "collaborators"("matricula") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_collaboratorsTorole" ADD CONSTRAINT "_collaboratorsTorole_B_fkey" FOREIGN KEY ("B") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
