import { Body, Controller, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './note.dto';

@Controller('author')
export class AuthorController {
    constructor(private authorService: AuthorService) {}
    @Post('create')
    createNewNote(@Body() body: CreateAuthorDto) {
        return this.authorService.createNewAuthor(body)
    }
}
