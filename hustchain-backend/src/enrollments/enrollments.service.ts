import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enrollment } from './enrollment.entity';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { User } from 'src/users/user.entity';
import { Course } from 'src/courses/course.entity';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollmentRepo: Repository<Enrollment>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Course)
    private readonly courseRepo: Repository<Course>,
  ) {}

  async enroll(dto: CreateEnrollmentDto): Promise<Enrollment> {
    const user = await this.userRepo.findOneBy({ user_id: dto.userId });
    const course = await this.courseRepo.findOneBy({ course_id: dto.courseId });

    if (!user || !course) {
      throw new NotFoundException('User or Course not found');
    }

    const enrollment = this.enrollmentRepo.create({
      user,
      course,
      txHash: dto.txHash || undefined,
    });

    const savedEnrollment = await this.enrollmentRepo.save(enrollment);
    return Array.isArray(savedEnrollment)
      ? savedEnrollment[0]
      : savedEnrollment;
  }

  async findByUser(userId: number): Promise<Enrollment[]> {
    return this.enrollmentRepo.find({
      where: { user: { user_id: userId } },
      relations: ['course'],
    });
  }
}
