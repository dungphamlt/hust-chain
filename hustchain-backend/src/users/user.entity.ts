import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Course } from '../courses/course.entity';
import { Enrollment } from '../enrollments/enrollment.entity';

export enum UserRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  user_id!: number; // Sử dụng non-null assertion operator

  @Column({
    length: 255,
    nullable: false,
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
  })
  name!: string;

  @Column({
    length: 255,
    unique: true,
    nullable: false,
  })
  email!: string;

  @Column({
    length: 255,
    nullable: false,
    select: false,
  })
  password!: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.STUDENT,
  })
  role!: UserRole;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: true,
  })
  avatar_url: string | null = null; // Thuộc tính nullable có thể khởi tạo null

  @Column({
    type: 'varchar',
    length: 42,
    nullable: true,
    unique: true,
  })
  wallet_address: string | null = null;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at!: Date;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at!: Date;

  @OneToMany(() => Course, (course) => course.teacher)
  @JoinColumn({ name: 'user_id' })
  courses_taught!: Course[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.user)
  @JoinColumn({ name: 'user_id' })
  enrollments!: Enrollment[];

  // Phương thức tiện ích
  public isTeacher(): boolean {
    return this.role === UserRole.TEACHER;
  }

  public isAdmin(): boolean {
    return this.role === UserRole.ADMIN;
  }

  // Constructor có thể thêm nếu cần khởi tạo phức tạp
  constructor() {
    // Không bắt buộc vì TypeORM sẽ tự xử lý
  }
}
