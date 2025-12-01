import type { TransactionClient } from "@/core";
import type { AnswerAttachment } from "../../enterprise/entities/answer-attachment";

export abstract class AnswerAttachmentsRepository {
  abstract createMany(
    attachments: AnswerAttachment[],
    trx?: TransactionClient,
  ): Promise<void>;
  abstract deleteMany(
    attachments: AnswerAttachment[],
    trx?: TransactionClient,
  ): Promise<void>;
  abstract findManyByAnswerId(answerId: string): Promise<AnswerAttachment[]>;
  abstract deleteManyByAnswerId(answerId: string): Promise<void>;
}
