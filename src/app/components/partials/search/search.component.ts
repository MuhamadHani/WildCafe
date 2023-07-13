import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
Search = '';
constructor(activatedRoute:ActivatedRoute,private router:Router){
  activatedRoute.params.subscribe((params)=>{
    if(params.search) this.Search = params.search
  })
}

ngOnInit(): void {
}

searched(term:string):void{
  if(term)
  this.Search = term
  this.router.navigateByUrl('/search/' + term )
}

}
