import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';

export abstract class UserRepository {
  abstract findOneById(id: string): Promise<User>;
  abstract findAll(): Promise<User[]>;

  abstract create(id: string, payload: CreateUserDto): Promise<void>;
  abstract delete(id: string): Promise<void>;
  // abstract async update(id: string, payload: UpdateBookDto): Promise<void>;
}