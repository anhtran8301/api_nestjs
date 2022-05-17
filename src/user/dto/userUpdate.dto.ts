import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { UserIdDto } from "./userID.dto";

export class UserUpdateDto {
    @Length(3, 20)
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @Length(5, 20)
    password: string;
}