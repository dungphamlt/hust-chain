import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { PaginationDto } from './dto/pagination.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs'; // Import bcrypt để hash mật khẩu

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

   // Hash mật khẩu trước khi lưu người dùng
   async create(userData: Partial<User>): Promise<User> {
    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 10); // Hash mật khẩu
    }
    const user = this.usersRepository.create(userData);
    return await this.usersRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: { email },
      select: ['user_id', 'name', 'email', 'password', 'role'], // Yêu cầu trả về trường password
    });
  }

  async findAll(paginationDto: PaginationDto): Promise<User[]> {
    const { limit, page } = paginationDto;
    return this.usersRepository.find({
      skip: page,
      take: limit,
    });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { user_id:id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    console.log("user.service --- FindUserById",user);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.usersRepository.remove(user);
  }

  async updateWallet(id: number, walletAddress: string): Promise<User> {
    const user = await this.findOne(id);
    user.wallet_address = walletAddress;
    return this.usersRepository.save(user);
  }
}