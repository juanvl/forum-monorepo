import { Comment, CommentProps } from '@forum/domain';

export class CommentPresenter {
  static toHTTP(comment: Comment<CommentProps>) {
    return {
      id: comment.id.toString(),
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    };
  }
}
