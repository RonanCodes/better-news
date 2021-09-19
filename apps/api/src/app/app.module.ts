import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { IrishTimesRestService } from './irish-times-rest/irish-times-rest.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../..', 'dist/apps/better-news-app'), // client
      // dist/apps/better-news-app/index.html
      // exclude: ['/api*'], // Comment out?
    }),
  ],
  controllers: [AppController],
  providers: [IrishTimesRestService],
})
export class AppModule {}
