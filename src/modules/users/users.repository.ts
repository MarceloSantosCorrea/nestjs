import { Repository } from '../../repositories/repository_interface';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

export class UsersRepository implements Repository<CreateUserDto, User> {
  users: User[] = [];

  insert(input: User): User {
    const user: User = new User();
    user.name = input.name;
    user.email = input.email;
    this.users.push(user);
    return user;
  }
}
