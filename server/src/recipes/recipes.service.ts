import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Recipe } from './recipe.entity';

import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}

  async getRecipes(): Promise<Recipe[]> {
    return await this.recipesRepository.find();
  }

  async getRecipeById(id: string): Promise<Recipe> {
    const recipe = await this.recipesRepository.findOneBy({ id });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID "${id}" not found.`);
    }

    return recipe;
  }

  async createRecipe(dto: CreateRecipeDto): Promise<Recipe> {
    const recipe = this.recipesRepository.create(dto);

    await this.recipesRepository.save(recipe);

    return recipe;
  }

  async updateRecipe(id: string, dto: UpdateRecipeDto): Promise<Recipe> {
    const recipe = await this.getRecipeById(id);

    Object.assign(recipe, dto);

    await this.recipesRepository.save(recipe);

    return recipe;
  }

  async deleteRecipe(id: string): Promise<void> {
    const result = await this.recipesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Recipe with ID "${id}" not found.`);
    }
  }
}
