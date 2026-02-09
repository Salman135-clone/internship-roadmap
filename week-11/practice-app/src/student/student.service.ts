import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [{ id: 1, name: 'Ali', age: 22 }];

  getStudent() {
    return this.students;
  }

  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) throw new NotFoundException('Student Not Found');
    return student;
  }

  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const fetchStudent = this.getStudentById(id);
    Object.assign(fetchStudent, data);
    return fetchStudent;
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) throw new NotFoundException('Student is is invalid');
    const deleteStudent = this.students.splice(index, 1);
    return { message: 'Student Delete', data: deleteStudent };
  }
}
