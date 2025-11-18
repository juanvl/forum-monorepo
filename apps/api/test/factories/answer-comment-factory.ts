import { AnswerComment, AnswerCommentProps } from '@forum/domain';
import { makeAnswerComment } from '@forum/domain/test';
import { Injectable } from '@nestjs/common';
import { PrismaAnswerCommentMapper } from 'src/database/prisma/mappers/prisma-answer-comment-mapper';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class AnswerCommentFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaAnswerComment(
    data: Partial<AnswerCommentProps> = {},
  ): Promise<AnswerComment> {
    const answerComment = makeAnswerComment(data);

    await this.prisma.comment.create({
      data: PrismaAnswerCommentMapper.toPrisma(answerComment),
    });

    return answerComment;
  }
}
