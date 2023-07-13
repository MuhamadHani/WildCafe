import { Tag } from "./Tag";

export class Food{
  id!:string;
  name!:string;
  price!:number;
  tags?:string[];
  favorite!:boolean;
  stars!:number;
  imageUrl!:string;
  origins!:string[];
  cookTime!:string;
}

export let sampleTag:Tag[] = [
  {name: "All", count:7},
  {name: "FastFood", count:5},
  {name: "Pizza", count:2},
  {name: "Lunch", count:4},
  {name: "SlowFood", count:2},
  {name: "Hamburger", count:1},
  {name: "Fry", count:1},
  {name: "Soup", count:1}
]

