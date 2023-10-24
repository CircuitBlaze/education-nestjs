import { IsEmpty, IsNotEmpty, IsString } from "class-validator"

export class CreateNoteDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}
export class UpdateNoteDto {
    title: string

    content: string
}