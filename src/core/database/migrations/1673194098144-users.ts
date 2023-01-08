import { MigrationInterface, QueryRunner } from "typeorm";

export class users1673194098144 implements MigrationInterface {
    name = 'users1673194098144'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying NOT NULL, "salt" character varying NOT NULL, "confirmationToken" character varying(64) NOT NULL, "recoverToken" character varying(64) NOT NULL, "phone" character varying(50) NOT NULL, "addressId" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "zip_code" character varying(50) NOT NULL, "public_place" character varying(50) NOT NULL, "number" character varying(50) NOT NULL, "neighborhood" character varying(50) NOT NULL, "city" character varying(50) NOT NULL, "state" character varying(50) NOT NULL, "complement" character varying(50), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
