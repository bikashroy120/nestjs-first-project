/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"
import { Address } from "./address.schema";

export type UserDocument = HydratedDocument<User>

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true, unique: true })
    email!: string;

    @Prop({ required: true })
    name!: string;

    @Prop()
    age?: number;

    @Prop({ type: Address })
    address!: Address;
}


export const UserSchema = SchemaFactory.createForClass(User)