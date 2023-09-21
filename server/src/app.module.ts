import { Module } from '@nestjs/common';

import { RecipesModule } from './recipes/recipes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'recipes-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
