import { Answer, AnswerProps } from '@forum/domain';
import { makeAnswer } from '@forum/domain/test';
import { Injectable } from '@nestjs/common';
import { PrismaAnswerMapper } from 'src/database/prisma/mappers/prisma-answer-mapper';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class AnswerFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaAnswer(data: Partial<AnswerProps> = {}): Promise<Answer> {
    const answer = makeAnswer(data);

    await this.prisma.answer.create({
      data: PrismaAnswerMapper.toPrisma(answer),
    });

    return answer;
  }
}
