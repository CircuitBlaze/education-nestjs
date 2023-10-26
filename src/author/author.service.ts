import { Injectable } from '@nestjs/common';
import { Author } from './author.interface';
import { CreateAuthorDto } from './note.dto';

@Injectable()
export class AuthorService {
    private authors: Author[] = [
        {
            "id": 1,
            "name": "Ренат",
        },
        {
            "id": 2,
            "name": "Гоша",
        },
    ];
    createNewAuthor(body: CreateAuthorDto) {
        const id = this.authors.length + 1;
        const newAuthor: Author = {
            id,
            'name': body.name
        }
        this.authors.push(newAuthor)
        console.log(this.authors);

        return newAuthor
    }
    validateAuthorId(id: number) {
        const findAuthor = this.authors.find(el => el.id === id);
        return findAuthor ? findAuthor : false;
    }
}
