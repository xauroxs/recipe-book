import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { RecipesService } from './recipes.service';

import { IdDto } from './dto/id.dto';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  getRecipes() {
    return this.recipesService.getRecipes();
  }

  @Get(':id')
  getRecipeById(@Param() idDto: IdDto) {
    const { id } = idDto;

    return this.recipesService.getRecipeById(id);
  }

  @Post()
  createRecipe(@Body() dto: CreateRecipeDto) {
    return this.recipesService.createRecipe(dto);
  }

  @Put(':id')
  updateRecipe(@Param() idDto: IdDto, @Body() dto: UpdateRecipeDto) {
    const { id } = idDto;

    return this.recipesService.updateRecipe(id, dto);
  }

  @Delete(':id')
  deleteRecipe(@Param() idDto: IdDto) {
    const { id } = idDto;

    return this.recipesService.deleteRecipe(id);
  }
}
