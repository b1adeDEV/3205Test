import { Column, Entity, PrimaryGeneratedColumn, Unique, CreateDateColumn } from 'typeorm';

@Entity()
@Unique(['shortUrl'])
@Unique(['alias'])

export class Url {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    originalUrl!: string;

    @Column({ nullable: true, unique: true, length: 20 })
    alias?: string;

    @Column({ unique: true })
    shortUrl!: string;

    @Column({ type: 'timestamp', nullable: true })
    expiresAt?: Date;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;

    @Column({ default: 0 })
    clickCount!: number;
}
