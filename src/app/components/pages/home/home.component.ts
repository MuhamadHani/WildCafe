import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

foods:Food[]=[]


  constructor(private foodservice:FoodService , activatedRoute:ActivatedRoute ){
    activatedRoute.params.subscribe((params)=>{
      if(params.Search)
      this.foods = this.foodservice.getAllFoodBySearch(params.Search)
      else if (params.tag)
      this.foods = this.foodservice.getAllFoodByTags(params.tag)
      else

      this.foods = foodservice.getAll()
    })

  }

ngOnInit(): void {

}


}
