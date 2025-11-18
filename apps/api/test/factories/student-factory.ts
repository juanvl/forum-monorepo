import { Student, StudentProps } from '@forum/domain';
import { makeStudent } from '@forum/domain/test';
import { Injectable } from '@nestjs/common';
import { PrismaStudentMapper } from 'src/database/prisma/mappers/prisma-student-mapper';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class StudentFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaStudent(data: Partial<StudentProps> = {}): Promise<Student> {
    const student = makeStudent(data);

    await this.prisma.user.create({
      data: PrismaStudentMapper.toPrisma(student),
    });

    return student;
  }
}
