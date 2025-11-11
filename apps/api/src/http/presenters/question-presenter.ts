import { Question } from '@forum/domain';

export class QuestionPresenter {
  static toHTTP(question: Question) {
    return {
      id: question.id.toString(),
      title: question.title,
      slug: question.slug.value,
      bestAnswer: question.bestAnswerId
        ? question.bestAnswerId.toString()
        : null,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
    };
  }
}
