import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import {User} from './User'

@Entity()
export class Note extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    articleTitle: string;

    @ManyToOne(type => User, user => user.notes)
    user: User;

}
