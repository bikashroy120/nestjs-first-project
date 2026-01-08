/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentServices: StudentService) { };

    @Get()
    getAll() {
        return this.studentServices.getAllStudent();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.studentServices.getStudentById(Number(id));
    }

    @Post()
    create(@Body() body: { name: string, age: number }) {
        return this.studentServices.createStudent(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: { name: string, age: number }) {
        return this.studentServices.updateStudent(Number(id), body);
    }

    @Patch(":id")
    patchStudent(@Param("id") id: string, @Body() body: Partial<{ name: string, age: number }>) {
        return this.studentServices.patchStudent(Number(id), body);
    }
}
