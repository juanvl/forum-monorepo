import { AnswerAttachment, AnswerAttachmentsRepository } from '@forum/domain';
import { Injectable } from '@nestjs/common';
import { PrismaAnswerAttachmentMapper } from '../mappers/prisma-answer-attachment-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAnswerAttachmentsRepository
  implements AnswerAttachmentsRepository
{
  constructor(private prisma: PrismaService) {}

  async findManyByAnswerId(answerId: string): Promise<AnswerAttachment[]> {
    const answerAttachments = await this.prisma.attachment.findMany({
      where: {
        answerId,
      },
    });

    return answerAttachments.map((answerAttachment) =>
      PrismaAnswerAttachmentMapper.toDomain(answerAttachment),
    );
  }

  async deleteManyByAnswerId(answerId: string): Promise<void> {
    await this.prisma.attachment.deleteMany({
      where: {
        answerId,
      },
    });
  }
}
