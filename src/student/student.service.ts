/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name)
        private studentModal: Model<StudentDocument>
    ) { }

    async createStudent(data: Partial<Student>): Promise<Student> {
        const newStudent = new this.studentModal(data);
        return newStudent.save()
    }

    async getStudents(): Promise<Student[]> {
        return this.studentModal.find().exec();
    }

    async getStudentById(id: string): Promise<Student | null> {
        return this.studentModal.findById(id).exec();
    }

    async updateStudent(id: string, data: Partial<Student>): Promise<Student | null> {
        return this.studentModal.findByIdAndUpdate(id, data, { new: true }).exec()
    }

    async deleteMetadata(id: string): Promise<Student | null> {
        return this.studentModal.findByIdAndDelete(id).exec()
    }
}
