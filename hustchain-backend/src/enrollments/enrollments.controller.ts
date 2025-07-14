import { Controller, Post, Body, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @Post()
  async enroll(@Body() dto: CreateEnrollmentDto) {
    console.log('Received body:', dto);
    console.log('typeof userId:', typeof dto.userId);
    console.log('typeof courseId:', typeof dto.courseId);
    return this.enrollmentsService.enroll(dto);
  }

  @Get('user/:userId')
  async getUserEnrollments(@Param('userId', ParseIntPipe) userId: number) {
    return this.enrollmentsService.findByUser(userId);
  }
}
