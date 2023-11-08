import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm"

@Entity("Points")
class Point {
    @PrimaryGeneratedColumn("increment")
    id: String

    @Column()
    name: String

    @Column()
    location: String
}

export default Point