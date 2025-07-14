import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, Between, FindOptionsWhere } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { User, UserRole } from '../users/user.entity';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  // 1. Tạo khóa học mới
  async create(
    createCourseDto: CreateCourseDto,
    teacherId: number,
  ): Promise<Course> {
    const teacher = await this.usersRepository.findOneBy({
      user_id: teacherId,
    });
    if (!teacher) {
      throw new NotFoundException('Teacher not found');
    }

    const course = this.coursesRepository.create({
      ...createCourseDto,
      teacher,
    });

    return await this.coursesRepository.save(course);
  }

  // 2. Lấy danh sách khóa học (có phân trang và filter)
  async findAll(
    paginationDto: PaginationDto,
  ): Promise<{ data: Course[]; count: number }> {
    const { page = 1, limit = 10, search, status } = paginationDto;
    const where: FindOptionsWhere<Course> = {};

    if (search) {
      where.course_name = Like(`%${search}%`);
    }

    if (status) {
      where.status = status;
    }

    const [data, count] = await this.coursesRepository.findAndCount({
      where,
      relations: ['teacher'],
      skip: (page - 1) * limit,
      take: limit,
      order: { created_at: 'DESC' },
    });

    return { data, count };
  }

  // 3. Lấy chi tiết khóa học
  async findOne(id: number): Promise<Course> {
    const course = await this.coursesRepository.findOne({
      where: { course_id: id },
      relations: ['teacher'],
    });

    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    return course;
  }

  // 4. Cập nhật khóa học
  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const course = await this.findOne(id);
    const updated = this.coursesRepository.merge(course, updateCourseDto);
    return await this.coursesRepository.save(updated);
  }

  // 5. Xóa khóa học (soft delete)
  async remove(id: number): Promise<void> {
    const result = await this.coursesRepository.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
  }

  // 6. Tăng lượt xem khóa học
  async incrementViewCount(id: number): Promise<Course> {
    const course = await this.findOne(id);
    course.view_count = (course.view_count || 0) + 1;
    return await this.coursesRepository.save(course);
  }

  // 7. Lấy khóa học theo giảng viên
  async findByTeacherId(
    teacherId: number,
    { page = 1, limit = 10 }: PaginationDto, // Đặt giá trị mặc định cho page và limit
  ): Promise<{ data: Course[]; total: number; page: number; limit: number }> {
    // Kiểm tra xem giảng viên có tồn tại không
    const teacher = await this.usersRepository.findOne({
      where: { user_id: teacherId, role: UserRole.TEACHER },
    });

    if (!teacher) {
      throw new NotFoundException(`Teacher with ID ${teacherId} not found`);
    }

    // Lấy danh sách khóa học của giảng viên
    const [courses, total] = await this.coursesRepository.findAndCount({
      where: { teacher: { user_id: teacherId } },
      skip: (page - 1) * limit,
      take: limit,
      order: { created_at: 'DESC' },
    });

    return {
      data: courses,
      total,
      page,
      limit,
    };
  }

  // 8. Thay đổi trạng thái khóa học
  async changeStatus(
    id: number,
    status: 'active' | 'draft' | 'archived',
  ): Promise<Course> {
    const course = await this.findOne(id);
    course.status = status;
    return await this.coursesRepository.save(course);
  }

  // 9. Tìm kiếm nâng cao
  async searchCourses(
    keyword: string,
    minReward?: number,
    maxReward?: number,
  ): Promise<Course[]> {
    const query = this.coursesRepository
      .createQueryBuilder('course')
      .leftJoinAndSelect('course.teacher', 'teacher')
      .where('course.course_name LIKE :keyword', { keyword: `%${keyword}%` })
      .orWhere('course.course_description LIKE :keyword', {
        keyword: `%${keyword}%`,
      });

    if (minReward !== undefined) {
      query.andWhere('course.token_reward >= :minReward', { minReward });
    }

    if (maxReward !== undefined) {
      query.andWhere('course.token_reward <= :maxReward', { maxReward });
    }

    return await query.getMany();
  }

  async enrollStudent(courseId: number, userId: number) {
    // Add enrollment logic here
    return { message: 'Enrolled successfully' };
  }
}
