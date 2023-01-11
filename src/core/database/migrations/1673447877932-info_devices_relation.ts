import { MigrationInterface, QueryRunner } from 'typeorm';

export class infoDevicesRelation1673447877932 implements MigrationInterface {
  name = 'infoDevicesRelation1673447877932';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "info" ("id" SERIAL NOT NULL, "virtual_id" character varying(50) NOT NULL, "ip_address" character varying NOT NULL, "mac_address" character varying NOT NULL, "signal" character varying NOT NULL, CONSTRAINT "PK_687dc5e25f4f1ee093a45b68bb7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "devices" ADD "infoId" integer`);
    await queryRunner.query(
      `ALTER TABLE "devices" ADD CONSTRAINT "UQ_6df3cf282ce068b28537cc7c8a2" UNIQUE ("infoId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "devices" ADD CONSTRAINT "FK_6df3cf282ce068b28537cc7c8a2" FOREIGN KEY ("infoId") REFERENCES "info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "devices" DROP CONSTRAINT "FK_6df3cf282ce068b28537cc7c8a2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "devices" DROP CONSTRAINT "UQ_6df3cf282ce068b28537cc7c8a2"`,
    );
    await queryRunner.query(`ALTER TABLE "devices" DROP COLUMN "infoId"`);
    await queryRunner.query(`DROP TABLE "info"`);
  }
}
