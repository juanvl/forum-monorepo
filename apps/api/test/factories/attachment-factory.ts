import { Attachment, AttachmentProps } from '@forum/domain';
import { makeAttachment } from '@forum/domain/test';
import { Injectable } from '@nestjs/common';
import { PrismaAttachmentMapper } from 'src/database/prisma/mappers/prisma-attachment-mapper';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class AttachmentFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaAttachment(
    data: Partial<AttachmentProps> = {},
  ): Promise<Attachment> {
    const attachment = makeAttachment(data);

    await this.prisma.attachment.create({
      data: PrismaAttachmentMapper.toPrisma(attachment),
    });

    return attachment;
  }
}
