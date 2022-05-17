import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserCreateDto } from './dto/userCreate.dto';
import { UserIdDto } from './dto/userID.dto';
import { UserUpdateDto } from './dto/userUpdate.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
    @Post('/')
    async createUser(@Body() user:UserCreateDto): Promise<any>{
      return await this.userService.create(user);
    }
    @Get('/')
    async getUsers(): Promise<any>{
      return await this.userService.findAll();
    }
    @Get('/:id')
    async getUser(@Param() user:UserIdDto): Promise<any>{
      return await this.userService.findOne(user.id);
    }
    @Put('/:id')
    async updateUser(@Param() userid:UserIdDto, @Body() user:UserUpdateDto): Promise<any>{
      return await this.userService.update(userid.id, user);
    }
    @Delete('/:id')
    async deleteUser(@Param() user:UserIdDto): Promise<any>{
      return await this.userService.delete(user.id);
    }
}
