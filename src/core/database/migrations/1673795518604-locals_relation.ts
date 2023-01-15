import { MigrationInterface, QueryRunner } from "typeorm";

export class localsRelation1673795518604 implements MigrationInterface {
    name = 'localsRelation1673795518604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_devices" DROP CONSTRAINT "FK_fb2538bcde94d23d5581c8eaf17"`);
        await queryRunner.query(`ALTER TABLE "users_devices" RENAME COLUMN "localId" TO "local_id"`);
        await queryRunner.query(`ALTER TABLE "users_devices" ADD CONSTRAINT "FK_085e7220bc62c382d8491281337" FOREIGN KEY ("local_id") REFERENCES "locals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_devices" DROP CONSTRAINT "FK_085e7220bc62c382d8491281337"`);
        await queryRunner.query(`ALTER TABLE "users_devices" RENAME COLUMN "local_id" TO "localId"`);
        await queryRunner.query(`ALTER TABLE "users_devices" ADD CONSTRAINT "FK_fb2538bcde94d23d5581c8eaf17" FOREIGN KEY ("localId") REFERENCES "locals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
