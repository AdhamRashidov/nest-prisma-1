import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UniversityModule } from './university/university.module';
import { GroupModule } from './group/group.module';
import { StudentModule } from './student/student.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			graphiql: true,
			playground: true,
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
			sortSchema: true
	  }),
		UniversityModule,
		GroupModule,
		StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
