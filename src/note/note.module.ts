import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { AuthorModule } from 'src/author/author.module';

@Module({
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
