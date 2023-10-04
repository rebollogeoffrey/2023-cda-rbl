// Base
import { Injectable } from '@nestjs/common';

// Repository
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// Entity
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUserById(id: string): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['email', 'name'],
      where: [{ id }],
    });
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ email: email });
  }

  saveUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  deleteUser(user: User): void {
    return this.usersRepository.delete(user.id) as unknown as void;
  }
}
