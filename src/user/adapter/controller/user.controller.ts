import {Controller, Get, Param} from '@nestjs/common';
import { GetUserUsecase } from '../../application/usecase/getUser.usecase';

@Controller('users')
export class UserController {
  constructor(private readonly getUserUsecase: GetUserUsecase) {}

  @Get('/:email')
  getUser(@Param('email') email) {
    return this.getUserUsecase.execute(email);
  }
}
