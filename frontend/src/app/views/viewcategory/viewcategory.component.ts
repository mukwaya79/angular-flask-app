import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {

  public Category:any = []

  constructor(private category:CategoryService,private router:Router) { }

  ngOnInit(): void {

    this.fetchdata()
  }
  fetchdata(){
    return this.category.getitem().subscribe(data=>{
      console.log(data)
      this.Category =data
    },
      err=>console.log(err))
  }

  removeitem(id:number){
    return this.category.deleteitem(id).subscribe(res=>{
      alert('item successfully deleted')
      this.router.navigateByUrl('category')
      console.log(res)
    })
  }

}
