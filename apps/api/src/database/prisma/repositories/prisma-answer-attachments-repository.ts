import {
  AnswerAttachment,
  AnswerAttachmentsRepository,
  TransactionClient,
} from '@forum/domain';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
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

  async createMany(
    attachments: AnswerAttachment[],
    trx?: TransactionClient,
  ): Promise<void> {
    if (attachments.length === 0) {
      return;
    }

    const prismaClient = (trx ?? this.prisma) as PrismaClient;

    const data = PrismaAnswerAttachmentMapper.toPrismaUpdateMany(attachments);

    await prismaClient.attachment.updateMany(data);
  }

  async deleteMany(
    attachments: AnswerAttachment[],
    trx?: TransactionClient,
  ): Promise<void> {
    if (attachments.length === 0) {
      return;
    }

    const prismaClient = (trx ?? this.prisma) as PrismaClient;

    const attachmentIds = attachments.map((attachment) => {
      return attachment.id.toString();
    });

    await prismaClient.attachment.deleteMany({
      where: {
        id: {
          in: attachmentIds,
        },
      },
    });
  }

  async deleteManyByAnswerId(answerId: string): Promise<void> {
    await this.prisma.attachment.deleteMany({
      where: {
        answerId,
      },
    });
  }
}
