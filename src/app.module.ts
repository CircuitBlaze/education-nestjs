import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [NoteModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
