import { Injectable } from '@nestjs/common';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';
import { Student } from './entities/student.entity';
import { v4 } from 'uuid';
import { ApolloError } from 'apollo-server-express';

@Injectable()
export class StudentService {
	private students: Student[] = [
		{ id: v4(), fullName: "Eshmat Toshmatov", email: "eshmat@gmail.com", age: 24 },
		{ id: v4(), fullName: "Toshmat Eshmatov", email: "toshmat@gmail.com", age: 15 },
	]

	create(createStudentInput: CreateStudentInput) {
		const newStudent = { id: v4(), ...createStudentInput };
		this.students.push(newStudent);
		return newStudent;
	}

	findAll() {
		return this.students;
	}

	findOne(id: string) {
		const student = this.students.find(student => student.id === id);
		if (!student) {
			throw new ApolloError('Student not found', '404');
		}
		return student;
	}

	update(id: string, updateStudentInput: UpdateStudentInput) {
		const index = this.students.findIndex(student => student.id === id);
		if (index === -1) {
			throw new ApolloError('Student not found', '404');
		}
		this.students[index] = updateStudentInput;
		return this.students[index];
	}

	remove(id: string) {
		const index = this.students.findIndex(student => student.id === id);
		if (index === -1) {
			throw new ApolloError('Student not found', '404');
		}
		this.students.splice(index, 1);
		return this.students;
	}
}
