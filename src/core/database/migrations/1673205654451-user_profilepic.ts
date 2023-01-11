import { MigrationInterface, QueryRunner } from 'typeorm';

export class userProfilepic1673205654451 implements MigrationInterface {
  name = 'userProfilepic1673205654451';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "profile_pic" character varying NOT NULL DEFAULT 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTEzzR TABLE "users" DROP COLUMN "profile_pic"`);
  }
}
