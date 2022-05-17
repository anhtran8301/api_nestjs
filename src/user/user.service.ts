import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/userCreate.dto';
import { UserUpdateDto } from './dto/userUpdate.dto';
import { UserRepo } from './user.repo';

import { UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(private readonly _userRepo: UserRepo) { }
  async create(user: UserCreateDto): Promise<UserDocument> {
    return await this._userRepo.create(user);
  }
  async findAll(): Promise<UserDocument[]> {
    return await this._userRepo.findAll();
  }
  async findOne(id: string): Promise<UserDocument> {
    return await this._userRepo.findOne(id);
  }
  async update(id: string, user: UserUpdateDto): Promise<UserDocument> {
    return await this._userRepo.update(id, user);
  }
  async delete(id: string): Promise<UserDocument> {
    return await this._userRepo.delete(id);
  }
}
