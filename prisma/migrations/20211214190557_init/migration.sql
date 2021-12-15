-- CreateTable
CREATE TABLE `Medico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `crm` INTEGER NOT NULL,
    `telefone_fixo` INTEGER NOT NULL,
    `telefone_cel` INTEGER NOT NULL,
    `cep` INTEGER NOT NULL,

    UNIQUE INDEX `Medico_crm_key`(`crm`),
    UNIQUE INDEX `Medico_telefone_cel_key`(`telefone_cel`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Especialidade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Especialidade_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_EspecialidadeToMedico` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_EspecialidadeToMedico_AB_unique`(`A`, `B`),
    INDEX `_EspecialidadeToMedico_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_EspecialidadeToMedico` ADD FOREIGN KEY (`A`) REFERENCES `Especialidade`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EspecialidadeToMedico` ADD FOREIGN KEY (`B`) REFERENCES `Medico`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
