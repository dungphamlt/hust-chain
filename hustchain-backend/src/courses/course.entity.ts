import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Enrollment } from '../enrollments/enrollment.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  course_id!: number;

  @Column({
    length: 255,
    unique: true,
    nullable: false,
    collation: 'utf8mb4_vietnamese_ci',
  })
  course_name!: string;

  @Column({
    type: 'text',
    collation: 'utf8mb4_vietnamese_ci',
  })
  course_description!: string;

  @Column({
    length: 512,
    nullable: false,
    collation: 'utf8mb4_vietnamese_ci',
  })
  course_image_url!: string;

  @Column({
    length: 512,
    nullable: false,
    collation: 'utf8mb4_vietnamese_ci',
  })
  course_video_url!: string;

  @Column({
    type: 'int',
    unsigned: true,
    default: 0,
  })
  token_reward!: number;

  @Column({
    type: 'int',
    nullable: true,
    default: 0,
  })
  course_price!: number;

  @Column({
    type: 'int',
    default: 0,
  })
  view_count!: number;

  @Column({
    type: 'enum',
    enum: ['active', 'draft', 'archived'],
    default: 'draft',
    collation: 'utf8mb4_vietnamese_ci',
  })
  status!: 'active' | 'draft' | 'archived';

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at!: Date;

  @ManyToOne(() => User, (user) => user.courses_taught, {
    onDelete: 'SET NULL',
  })

  // Chỉ định tên cột khóa ngoại liên kết với bảng User
  @JoinColumn({ name: 'teacher_id' })
  teacher!: User;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.course, {
    cascade: true,
  })
  enrollments!: Enrollment[];

  // Thêm các phương thức tiện ích nếu cần
  public isActive(): boolean {
    return this.status === 'active';
  }
}
