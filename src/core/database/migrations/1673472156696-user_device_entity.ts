import { MigrationInterface, QueryRunner } from "typeorm";

export class userDeviceEntity1673472156696 implements MigrationInterface {
    name = 'userDeviceEntity1673472156696'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_devices" ("id" SERIAL NOT NULL, "local" character varying NOT NULL, "is_on" boolean NOT NULL, "room" character varying NOT NULL, "userId" integer, "device_id" integer, CONSTRAINT "PK_984434640f7ccaa3c1419312ff1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_devices" ADD CONSTRAINT "FK_06e84444eb36666381bf370b629" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users_devices" ADD CONSTRAINT "FK_7d3640c873c0cd3cfad4eb6de91" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_devices" DROP CONSTRAINT "FK_7d3640c873c0cd3cfad4eb6de91"`);
        await queryRunner.query(`ALTER TABLE "users_devices" DROP CONSTRAINT "FK_06e84444eb36666381bf370b629"`);
        await queryRunner.query(`DROP TABLE "users_devices"`);
    }

}
