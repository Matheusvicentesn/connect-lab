import { MigrationInterface, QueryRunner } from "typeorm";

export class updateUserProfilePic1673717045590 implements MigrationInterface {
    name = 'updateUserProfilePic1673717045590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "profile_pic" SET DEFAULT 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "profile_pic" SET DEFAULT 'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "profile_pic" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "profile_pic" DROP DEFAULT`);
    }

}
