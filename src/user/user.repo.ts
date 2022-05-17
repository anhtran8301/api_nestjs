import mongoose, { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { UserCreateDto } from './dto/userCreate.dto';
import { UserUpdateDto } from './dto/userUpdate.dto';



@Injectable()
export class UserRepo {
  findByIdAndDelete(id: string): UserDocument | PromiseLike<UserDocument> {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(User.name) private _userModel: Model<UserDocument>) {}
  async create(user: UserCreateDto): Promise<UserDocument>{
    user._id = new mongoose.Types.ObjectId().toHexString();
    const createUser = new this._userModel(user);
    return await createUser.save();
  }
  async findAll(): Promise<UserDocument[]>{
    return await this._userModel.find().exec();
  }
  async findOne(id: string): Promise<UserDocument>{
    return await this._userModel.findById(id).exec();
  }
  async update(id: string, user: UserUpdateDto): Promise<UserDocument>{
    return await this._userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }
  async delete(id: string): Promise<UserDocument>{
    return await this._userModel.findByIdAndDelete().exec();
  }

}


