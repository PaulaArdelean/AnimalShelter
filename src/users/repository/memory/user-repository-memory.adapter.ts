import { users } from './fixtures/users';
import { UserRepository } from '../user-repository';
import { User } from 'src/users/entity/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class UserRepositoryMemoryAdapter extends UserRepository {
  private users = users;

  async findOneById(id: string): Promise<User> {
    return this.users.find(user => user.id === id);
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async create(id: string, payload: CreateUserDto): Promise<void> {
    const { firstName, lastName } = payload;
    const newUser = new User(id, firstName, lastName);
    this.users.push(newUser);
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter(user => id !== user.id);
  }

  // async update(id: string, payload: UpdateUserDto): Promise<void> {
  //   const { firstName, lastName } = payload;
  //   const newUser = new User(id, firstName, lastName);
  //   this.users = this.users.filter(user => id !== user.id);
  //   this.users.push(newUser);
  // }
}