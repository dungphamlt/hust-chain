import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
  Query,
  UseGuards,
  Req,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PaginationDto } from './dto/pagination.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RequestWithUser } from '../auth/interfaces/request-with-user.interface';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Course } from './course.entity';

@ApiTags('Courses')
@ApiBearerAuth()
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  // 1. Tạo khóa học mới
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('teacher', 'admin')
  @ApiOperation({ summary: 'Create new course' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Course })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden' })
  async create(
    @Body() createCourseDto: CreateCourseDto,
    @Req() req: RequestWithUser,
  ) {
    console.log('Received course data:', createCourseDto);
    console.log('User from token:', req.user); // Kiểm tra có user_id không
    return this.coursesService.create(createCourseDto, req.user.user_id);
  }

  // 2. Lấy danh sách khóa học (có phân trang và filter)
  @Get()
  @ApiOperation({ summary: 'Get all courses with pagination' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: [Course],
    description: 'List of courses',
  })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.coursesService.findAll(paginationDto);
  }

  // 3. Lấy chi tiết khóa học
  @Get(':id')
  @ApiOperation({ summary: 'Get course by ID' })
  @ApiResponse({ status: HttpStatus.OK, type: Course })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Course not found',
  })
  async findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  // 4. Cập nhật khóa học
  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('teacher', 'admin')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Update course' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Course updated successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Course not found',
  })
  async update(
    @Param('id') id: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  // 5. Xóa khóa học
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete course' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Course deleted successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Course not found',
  })
  async remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }

  // 6. Đăng ký khóa học
  @Post(':id/enroll')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Enroll in a course' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Enrolled successfully',
  })
  async enroll(@Param('id') courseId: string, @Req() req: RequestWithUser) {
    return this.coursesService.enrollStudent(+courseId, req.user.user_id);
  }

  // Lấy khoá học của giảng viên
  @Get('teacher/:teacherId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('teacher', 'admin')
  @ApiOperation({ summary: 'Get courses by teacher ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns list of courses by teacher',
    type: [Course], // Đảm bảo đã định nghĩa Course entity trong Swagger
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Teacher not found',
  })
  async getCoursesByTeacher(
    @Param('teacherId') teacherId: string,
    @Query() paginationParams: PaginationDto, // Tùy chọn phân trang
  ) {
    return this.coursesService.findByTeacherId(+teacherId, paginationParams);
  }
}
