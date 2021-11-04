import {MigrationInterface, QueryRunner} from "typeorm";

export class addSubstrateChain1635805351726 implements MigrationInterface {
    name = 'addSubstrateChain1635805351726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."historical_balance" ADD "substrate_chain" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."account" ADD "substrate_chain" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."account" DROP COLUMN "substrate_chain"`);
        await queryRunner.query(`ALTER TABLE "public"."historical_balance" DROP COLUMN "substrate_chain"`);
    }

}
