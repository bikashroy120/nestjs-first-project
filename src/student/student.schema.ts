/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type StudentDocument = Student & Document;


@Schema({ timestamps: true })
export class Student {
    @Prop({ required: true })
    name!: string;

    @Prop({ required: true })
    age!: string;

    @Prop()
    email?: string;

    @Prop()
    address?: string;
}


export const StudentSchema = SchemaFactory.createForClass(Student)