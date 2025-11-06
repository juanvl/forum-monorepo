import {
  QuestionCommentsRepository,
  QuestionComment,
  PaginationParams,
} from '@forum/domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaQuestionCommentsRepository
  implements QuestionCommentsRepository
{
  findById(id: string): Promise<QuestionComment | null> {
    throw new Error('Method not implemented.');
  }

  findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<QuestionComment[]> {
    throw new Error('Method not implemented.');
  }

  create(questionComment: QuestionComment): Promise<void> {
    throw new Error('Method not implemented.');
  }

  delete(questionComment: QuestionComment): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
