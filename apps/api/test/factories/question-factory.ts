import { Question, QuestionProps } from '@forum/domain';
import { makeQuestion } from '@forum/domain/test';
import { Injectable } from '@nestjs/common';
import { PrismaQuestionMapper } from 'src/database/prisma/mappers/prisma-question-mapper';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class QuestionFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaQuestion(
    data: Partial<QuestionProps> = {},
  ): Promise<Question> {
    const question = makeQuestion(data);

    await this.prisma.question.create({
      data: PrismaQuestionMapper.toPrisma(question),
    });

    return question;
  }
}
