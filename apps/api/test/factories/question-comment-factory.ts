import { QuestionComment, QuestionCommentProps } from '@forum/domain';
import { makeQuestionComment } from '@forum/domain/test';
import { Injectable } from '@nestjs/common';
import { PrismaQuestionCommentMapper } from 'src/database/prisma/mappers/prisma-question-comment-mapper';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class QuestionCommentFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaQuestionComment(
    data: Partial<QuestionCommentProps> = {},
  ): Promise<QuestionComment> {
    const questionComment = makeQuestionComment(data);

    await this.prisma.comment.create({
      data: PrismaQuestionCommentMapper.toPrisma(questionComment),
    });

    return questionComment;
  }
}
