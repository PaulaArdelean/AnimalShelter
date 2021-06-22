import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entity/user.entity';

export abstract class UserRepository {
  abstract async findOneById(id: string): Promise<User>;
  abstract async findAll(): Promise<User[]>;

  abstract async create(id: string, payload: CreateUserDto): Promise<void>;
  abstract async delete(id: string): Promise<void>;
  // abstract async update(id: string, payload: UpdateBookDto): Promise<void>;
}