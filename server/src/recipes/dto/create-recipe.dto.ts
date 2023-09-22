import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  categories: string[];

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  ingredients: string[];

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  instructions: string[];

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  comments: string[];
}
