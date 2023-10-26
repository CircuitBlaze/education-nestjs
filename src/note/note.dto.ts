import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateNoteDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsNumber()
    authorId: number;
}
export class UpdateNoteDto {
    title: string

    content: string
}