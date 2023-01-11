import { MigrationInterface, QueryRunner } from 'typeorm';

export class devicesEntity1673447195672 implements MigrationInterface {
  name = 'devicesEntity1673447195672';
  z;
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "devices" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "type" character varying NOT NULL, "madeBy" character varying NOT NULL, "photoUrl" character varying NOT NULL, CONSTRAINT "PK_b1514758245c12daf43486dd1f0" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "devices"`);
  }
}
