/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: "bikash", age: 23 },
        { id: 2, name: "tapos", age: 24 }
    ]

    getAllStudent() {
        return this.students;
    }

    getStudentById(id: number) {
        const student = this.students.find((item) => item.id === id);

        if (!student) {
            throw new NotFoundException("Student Not Found");
        }
        return student
    }

    createStudent(data: { name: string, age: number }) {
        const newStudent = {
            id: Date.now(),
            ...data
        }
        this.students.push(newStudent);
        return newStudent
    }

    updateStudent(id: number, data: { name: string, age: number }) {
        const index = this.students.findIndex((i) => i.id === id);
        if (index === -1) {
            throw new NotFoundException("student not found")
        }

        this.students[index] = { id, ...data }
        return this.students[index]
    }

    patchStudent(id: number, data: Partial<{ name: string, age: number }>) {
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    deleteStudent(id: number) {
        const index = this.students.findIndex((i) => i.id === id);

        if (index === -1) {
            throw new NotFoundException("Student not found");
        }

        const deleted = this.students.splice(index, 1);
        return { message: "student Delete", student: deleted[0] }
    }

}
