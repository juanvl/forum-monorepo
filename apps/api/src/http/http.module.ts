import { CreateQuestionUseCase, QuestionsRepository } from '@forum/domain';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PrismaQuestionsRepository } from 'src/database/prisma/repositories/prisma-questions-repository';
import { AuthenticateController } from './controllers/authenticate.controller';
import { CreateAccountController } from './controllers/create-account.controller';
import { CreateQuestionController } from './controllers/create-question.controller';
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [
    {
      provide: CreateQuestionUseCase,
      useFactory: (repo: QuestionsRepository) =>
        new CreateQuestionUseCase(repo),
      inject: [PrismaQuestionsRepository],
    },
  ],
})
export class HttpModule {}
