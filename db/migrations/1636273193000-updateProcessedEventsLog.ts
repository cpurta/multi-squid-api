import {MigrationInterface, QueryRunner} from "typeorm";

export class updateProcessedEventsLog1636273193000 implements MigrationInterface {
    name = 'updateProcessedEventsLog1636273193000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."processed_events_log" ADD "substrate_chain" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."processed_events_log" DROP COLUMN "substrate_chain"`);
    }

}
