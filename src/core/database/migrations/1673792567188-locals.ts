import { MigrationInterface, QueryRunner } from "typeorm";

export class locals1673792567188 implements MigrationInterface {
    name = 'locals1673792567188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_devices" RENAME COLUMN "local" TO "localId"`);
        await queryRunner.query(`CREATE TABLE "locals" ("id" SERIAL NOT NULL, "description" character varying(50) NOT NULL, CONSTRAINT "PK_56d0b7be926a53ceddcfe4abb1a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_devices" DROP COLUMN "localId"`);
        await queryRunner.query(`ALTER TABLE "users_devices" ADD "localId" integer`);
        await queryRunner.query(`ALTER TABLE "users_devices" ADD CONSTRAINT "FK_fb2538bcde94d23d5581c8eaf17" FOREIGN KEY ("localId") REFERENCES "locals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_devices" DROP CONSTRAINT "FK_fb2538bcde94d23d5581c8eaf17"`);
        await queryRunner.query(`ALTER TABLE "users_devices" DROP COLUMN "localId"`);
        await queryRunner.query(`ALTER TABLE "users_devices" ADD "localId" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "locals"`);
        await queryRunner.query(`ALTER TABLE "users_devices" RENAME COLUMN "localId" TO "local"`);
    }

}
