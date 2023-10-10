import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export type UserRoleType = 'admin' | 'editor' | 'ghost';
export type Status = '0' | '1' | '2';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column({
    unique: true,
  })
  email: string;
  @Column()
  password: string;
  @Column()
  t_and_c: boolean;
  @Column({
    type: 'enum',
    enum: ['0', '1', '2'],
    default: '0',
  })
  // 0 Disable
  // 1 Active
  status: Status;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
  @VersionColumn()
  version: number;

  get user_signup_response() {
    return {
      id: this.id,
      full_name: `${this.first_name} ${this.last_name}`,
      email: this.email,
    };
  }
  get user_profile_view() {
    return {
      id: this.id,
      full_name: `${this.first_name} ${this.last_name}`,
      email: this.email,
      status: this.status,
      created_at: this.created_at,
      updated_at: this.updated_at,
      version: this.version,
    };
  }
}
