import { RegisterStudentUseCase } from '@forum/domain';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});

class CreateAccountDTO extends createZodDto(createAccountBodySchema) {}

@Controller('/accounts')
export class CreateAccountController {
  constructor(private registerStudent: RegisterStudentUseCase) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: CreateAccountDTO) {
    const { name, email, password } = body;

    const result = await this.registerStudent.execute({
      name,
      email,
      password,
    });

    if (result.isLeft()) {
      throw new Error();
    }
  }
}
