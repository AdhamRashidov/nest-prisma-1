import { Injectable } from '@nestjs/common';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';
import { University } from './entities/university.entity';
import { v4 } from 'uuid';
import { ApolloError } from 'apollo-server-express';

@Injectable()
export class UniversityService {
	private universities: University[] = [
		{ id: v4(), name: 'TATU', number: 56, address: 'Minor' },
		{ id: v4(), name: 'JT', number: 75, address: 'Uchtepa' },
	]

	create(createUniversityInput: CreateUniversityInput) {
		const newUniver = { id: v4(), ...createUniversityInput };
		this.universities.push(newUniver);
		return newUniver;
	}

	findAll() {
		return this.universities;
	}

	findOne(id: string) {
		const university = this.universities.find(univer => univer.id === id);
		if (!university) {
			throw new ApolloError('University not found', '404');
		}
		return university;
	}

	update(id: string, updateUniversityInput: UpdateUniversityInput) {
		const index = this.universities.findIndex(univer => univer.id === id);
		if (index === -1) {
			throw new ApolloError('University not found', '404');
		}
		this.universities[index] = updateUniversityInput;
		return this.universities[index];
	}

	remove(id: string) {
		const index = this.universities.findIndex(univer => univer.id === id);
		if (index === -1) {
			throw new ApolloError('University not found', '404');
		}
		this.universities.splice(index, 1);
		return this.universities;
	}
}
