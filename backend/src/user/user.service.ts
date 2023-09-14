// Base
import { Injectable } from '@nestjs/common';

// Repository
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// Entity
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: string): Promise<User[]> {
    return await this.userRepository.find({
      select: ['email', 'name'],
      where: [{ id }],
    });
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ email: email });
  }

  saveUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  deleteUser(user: User): void {
    return this.userRepository.delete(user) as unknown as void;
  }
}
