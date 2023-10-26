import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateAuthorDto {
    @IsNotEmpty()
    @IsString()
    name: string;

}
export class UpdateAuthorDto {
    @IsOptional()
    @IsString()
    name: string;
}