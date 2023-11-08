import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePoints1699381651078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "points",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "location",
                        type: "geography",
                        spatialFeatureType: "Point",
                        srid: 4326
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("points")
    }

}
