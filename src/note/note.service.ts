import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateNoteDto } from './note.dto';
import { Note } from './note.interface';
import { AuthorService } from 'src/author/author.service';

@Injectable()
export class NoteService {
    constructor(private authorService: AuthorService) {}
    private notes: Note[] = [
        {
            "id": 1,
            "title": "Математика 23213123 ",
            "content": "Сделать дз 1231232",
            authorId: 1
        },
        {
            "id": 2,
            "title": "Математика 23213123 ",
            "content": "Сделать дз 1231232",
            authorId: 1
        },
    ];
    createNewNote(body: CreateNoteDto) {
        const id = this.notes.length + 1;
        if(!this.authorService.validateAuthorId(body.authorId)) throw new BadRequestException('Not found authorId!')
        const newNote: Note = {
            id,
            'title': body.title,
            'content': body.content,
            'authorId': body.authorId
        }
        this.notes.push(newNote)
        console.log(this.notes);

        return newNote
    }
}
