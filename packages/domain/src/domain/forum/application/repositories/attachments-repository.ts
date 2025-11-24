import type { Attachment } from "../../enterprise";

export abstract class AttachmentsRepository {
  abstract create(attachment: Attachment): Promise<void>;
}
