import { Injectable } from '@nestjs/common';
// import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category, CategoryName } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private catRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: Category) {
    console.log('createCategoryDto :>> ', createCategoryDto);
    console.log(
      'this.catRepository.create(createCategoryDto); :>> ',
      this.catRepository.create(createCategoryDto),
    );
    const newCat = this.catRepository.create({
      role: createCategoryDto.role,
    });

    return this.catRepository.save(newCat);
  }

  createMockData(mockData: [Category]) {
    return mockData.map((data) => {
      return this.catRepository.save(data);
    });
  }

  async findAll() {
    console.log(
      'this.catRepository.find() :>> ',
      await this.catRepository.find(),
    );
    return await this.catRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
