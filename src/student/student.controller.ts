/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';


@Controller('student')
export class StudentController {
    constructor(private readonly studentServices: StudentService) { };

    @Post()
    async createStudent(@Body() data: Partial<Student>) {
        return this.studentServices.createStudent(data)
    }

    @Get()
    async getStudents() {
        return this.studentServices.getStudents();
    }

    @Get(":id")
    async getStudentById(@Param('id') id: string) {
        return this.studentServices.getStudentById(id)
    }

    @Patch(':id')
    async updateData(@Param('id') id: string, @Body() data: Partial<Student>) {
        return this.studentServices.updateStudent(id, data)
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id: string) {
        return this.studentServices.deleteMetadata(id)
    }
}
