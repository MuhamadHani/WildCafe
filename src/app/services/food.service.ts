import { Injectable } from '@angular/core';
import { Food, sampleTag } from '../shared/models/food';
import { sample_foods } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return sample_foods
  }
  getAllFoodBySearch(Search:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(Search.toLowerCase()))

  }
  getAllTags():Tag[]{
    return sampleTag
  }
  getAllFoodByTags(tag:string):Food[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag))
  }
  getFoodById(foodId:string):Food{
    return this.getAll().find(food=> food.id == foodId) ?? new Food()
  }
}
