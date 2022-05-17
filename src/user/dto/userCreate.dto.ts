import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class UserCreateDto {
    _id: string;
    
    @Length (3, 20)
    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @Length(8, 16)
    password: string;

  }