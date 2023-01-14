import { MigrationInterface, QueryRunner } from "typeorm";

export class addressEntityUpdate1673713001185 implements MigrationInterface {
    name = 'addressEntityUpdate1673713001185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" RENAME COLUMN "public_place" TO "street"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" RENAME COLUMN "street" TO "public_place"`);
    }

}
