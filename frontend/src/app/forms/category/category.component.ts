import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  
  public form:any ={
    wasanalysed:'',bottomcoreformation:'',coretype:'', storeidentifier:'',catalogcorefromdepth:'', catalogcoretodepth:'',coresecurityflag:'',
    corecatalogname:'',welloperator:'',catalogcorelength:'',wellbore:'', corename:'',filesize:'',securitygrade:'',
    topcoreformation:'',catalogpicturesoftcopypath:'',catalogpicturehyperlink:'',openduedate:'',comments:'',
    catalogreportsoftcopypath:'',catalogreporthyperlink:'',documentformat:'',coredate:'',catalogpicturename:'',
    createdby:'',datecreated:'',recorddate:'',modifiedon:'',modifiedby:'',pictureuploaddate:'',
    spuddate:'',reportuploaddate:'',hascorephotos:'',wellborecorename:''

  }

  constructor(private category:CategoryService,private router:Router) { }

  ngOnInit(): void {
  }
  additem(){
    return this.category.senditem(this.form).subscribe(response=>{
      alert('Category data is added Successfully')
      this.router.navigate(['/viewcategory'])
      console.log(response)
    })
  }

}
