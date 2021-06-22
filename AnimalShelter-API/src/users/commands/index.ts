import { CreateUserHandler } from './create-user/create-user.handler';
import { DeleteUserHandler } from './delete-user/delete-user.handler';

export const CommandHandlers = [
  CreateUserHandler,
  DeleteUserHandler,
];