import { HttpStatus, Injectable, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Injectable()
export class AppService {
	static async main(): Promise<void> {
		const app = await NestFactory.create(AppModule);

		const port = Number(process.env.PORT);

		app.useGlobalPipes(
			new ValidationPipe({
				whitelist: true,
				forbidNonWhitelisted: true,
				transform: true,
				errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
			}),
		);

		const api = 'api/v1';
		app.setGlobalPrefix(api);

		const configSwagger = new DocumentBuilder()
			.setTitle('Chat')
			.build();
		const documentFactory = SwaggerModule.createDocument(app, configSwagger);
		SwaggerModule.setup(api, app, documentFactory);

		app.listen(port, () => console.log('Server running on port', port));
	}
}
