import { Injectable } from '@nestjs/common';
import { CreateGroupInput } from './dto/create-group.input';
import { UpdateGroupInput } from './dto/update-group.input';
import { Group } from './entities/group.entity';
import { v4 } from 'uuid';
import { ApolloError } from 'apollo-server-express';

@Injectable()
export class GroupService {
	private groups: Group[] = [
		{ id: v4(), name: 'N23 FullStack' },
		{ id: v4(), name: 'N24 FullStack' },
	]

	create(createGroupInput: CreateGroupInput) {
		const newGroup = { id: v4(), ...createGroupInput };
		this.groups.push(newGroup);
		return newGroup;
	}

	findAll() {
		return this.groups;
	}

	findOne(id: string) {
		const group = this.groups.find(group => group.id === id);
		if (!group) {
			throw new ApolloError('Group not found', '404');
		}
		return group;
	}

	update(id: string, updateGroupInput: UpdateGroupInput) {
		const index = this.groups.findIndex(group => group.id === id);
		if (index === -1) {
			throw new ApolloError('Group not found', '404');
		}
		this.groups[index] = updateGroupInput;
		return this.groups[index];
	}

	remove(id: string) {
		const index = this.groups.findIndex(group => group.id === id);
		if (index === -1) {
			throw new ApolloError('Group not found', '404');
		}
		this.groups.splice(index, 1);
		return this.groups;
	}
}
