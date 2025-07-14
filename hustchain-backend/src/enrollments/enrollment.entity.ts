import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { User } from 'src/users/user.entity';
import { Course } from 'src/courses/course.entity';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.enrollments)
  user!: User;

  @ManyToOne(() => Course, (course) => course.enrollments)
  course!: Course;

  @CreateDateColumn()
  enrolledAt!: Date;

  @Column({ default: false })
  completed!: boolean;

  @Column({ nullable: true })
  txHash?: string;

  @Column({ type: 'float', nullable: true })
  score!: number; // optional
}
