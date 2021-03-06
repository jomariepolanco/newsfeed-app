import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import {Note} from './Note'

@Entity("users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', unique: true})
    name: string;

    @OneToMany(type => Note, note => note.user)
    notes: Note[];

}
