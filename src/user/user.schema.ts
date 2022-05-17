import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { timestamp } from 'rxjs';

export type UserDocument = User & Document;

@Schema({

    timestamps: true 
})
export class User extends Document{
    @Prop({
        required: false, type: mongoose.Schema.Types.ObjectId,
        
    })
    _id: string;
    @Prop({
        required: true,
        
    })
    name: string;
    @Prop({
        required: true,
        
    })
    email: string;
    @Prop({
        required: true,
   
    })
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);