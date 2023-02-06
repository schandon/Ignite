-- CreateTable
CREATE TABLE "collaborators_role" (
    "id" TEXT NOT NULL,
    "fk_collaborators" TEXT NOT NULL,
    "fk_role" TEXT NOT NULL,

    CONSTRAINT "collaborators_role_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "collaborators_role" ADD CONSTRAINT "collaborators_role_fk_role_fkey" FOREIGN KEY ("fk_role") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "collaborators_role" ADD CONSTRAINT "collaborators_role_fk_collaborators_fkey" FOREIGN KEY ("fk_collaborators") REFERENCES "collaborators"("matricula") ON DELETE RESTRICT ON UPDATE CASCADE;
