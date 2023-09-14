// Base
import { Injectable } from '@nestjs/common';

// Repository
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

// Entity
import { Achievement } from '../entities/achievement.entity';

@Injectable()
export class AchievementService {
  constructor(
    @InjectRepository(Achievement)
    private achievementsRepository: Repository<Achievement>,
  ) {}

  async getAchievements(): Promise<Achievement[]> {
    return await this.achievementsRepository.find();
  }

  async getAchievementById(id: string): Promise<Achievement[]> {
    return await this.achievementsRepository.find({
      select: ['title', 'description'],
      where: [{ id }],
    });
  }

  async getAllAchievementOwnedByAllUsers(): Promise<Achievement[] | undefined> {
    return this.achievementsRepository.find({
      select: ['title', 'description'],
      where: [{ is_owned: true }],
      relations: {
        users: true,
      },
    });
  }

  async test(userId: string): Promise<Achievement[] | undefined> {
    return this.achievementsRepository.find({
      join: { alias: 'roles', innerJoin: { users: 'roles.users' } },
      where: (qb) => {
        qb.where({
          // Filter Role fields
          a: 1,
          b: 2,
        }).andWhere('users.name = :userName', { userName: 'John Doe' }); // Filter related field
      },
    });
  }

  saveAchievement(achievement: Achievement): Promise<Achievement> {
    return this.achievementsRepository.save(achievement);
  }

  deleteAchievement(achievement: Achievement): void {
    return this.achievementsRepository.delete(achievement) as unknown as void;
  }
}
