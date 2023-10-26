import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateNoteDto, UpdateNoteDto } from './note.dto';
import { Note } from './note.interface';
import { NoteService } from './note.service';

@Controller('note/')
export class NoteController {
    constructor(private noteService: NoteService) {}
    @Post('notes')
    createNewNote(@Body() body: CreateNoteDto) {
        return this.noteService.createNewNote(body)
    }
    // @Get('notes')
    // getAllNotes() {
    //     return this.notes
    // }
    // @Get('notes/:id')
    // getNoteById(@Param('id') id: number) {
    //     id = Number(id)
    //     const getNoteByID = this.notes.filter(el => el.id === id);
    //     console.log(id, getNoteByID);

    //     return getNoteByID
    // }
    // @Put('notes/:id')
    // updateNoteById(@Param('id') id: number, @Body() body: UpdateNoteDto) {
    //     id = Number(id)
    //     console.log(this.notes);

    //     const findNote = this.notes.find(el => el.id === id);

    //     if (!findNote) throw new BadRequestException('Note not found!')
        
    //     const updateNote = {
    //         id,
    //         title: body.title ? body.title : findNote.title,
    //         content: body.content ? body.content : findNote.content,
            
    //     }
        
    //     this.notes[findNote.id - 1] = updateNote
    //     console.log(this.notes);
        
    //     return this.notes
    // }
    // @Delete('notes/:id')
    // deleteNote(@Param('id') id: number) {
    //     id = Number(id)
    //     console.log(this.notes);

    //     const findNote = this.notes.find(el => el.id === id);

    //     if (!findNote) throw new BadRequestException('Note not found!')
    //     this.notes = this.notes.filter(el => el.id !== id);
    //     console.log(this.notes);
        
    //     return this.notes 
    // }
}
