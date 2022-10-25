import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { HealthModule } from './health/health.module';
import { PlanetModule } from './planet/planet.module';
import { StarshipModule } from './starship/starship.module';
@Module({
  imports: [
    HealthModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'sqlite',
          database: configService.get('SQL_MEMORY_DB_SHARED'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        } as TypeOrmModuleOptions;
      },
    }),
    PlanetModule,
    StarshipModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
