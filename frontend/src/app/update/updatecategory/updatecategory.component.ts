import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {

  public form:any ={
    wasanalysed:'',bottomcoreformation:'',coretype:'', storeidentifier:'',catalogcorefromdepth:'', catalogcoretodepth:'',coresecurityflag:'',
    corecatalogname:'',welloperator:'',catalogcorelength:'',wellbore:'', corename:'',filesize:'',securitygrade:'',
    topcoreformation:'',catalogpicturesoftcopypath:'',catalogpicturehyperlink:'',openduedate:'',comments:'',
    catalogreportsoftcopypath:'',catalogreporthyperlink:'',documentformat:'',coredate:'',catalogpicturename:'',
    createdby:'',datecreated:'',recorddate:'',modifiedon:'',modifiedby:'',pictureuploaddate:'',
    spuddate:'',reportuploaddate:'',hascorephotos:'',wellborecorename:''

  }


  constructor(private category:CategoryService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.category.getoneitem(this.route.snapshot.params.id).subscribe(result=>{
      this.form={
        wasanalysed:result.category['wasanalysed'],bottomcoreformation:result.category['bottomcoreformation'],
        coretype:result.category['coretype'],storeidentifier:result.category['storeidentifier'],
        catalogcorefromdepth:result.category['catalogcorefromdepth'],catalogcoretodepth:result.category['catalogcoretodepth'],
        coresecurityflag:result.category['coresecurityflag'], corecatalogname:result.category['corecatalogname'],welloperator:result.category['welloperator'],
        catalogcorelength:result.category['catalogcorelength'],wellbore:result.category['wellbore'],
        corename:result.category['corename'],filesize:result.category['filesize'],securitygrade:result.category['securitygrade'],
        corerecovery:result.category['corerecovery'],topcoreformation:result.category['topcoreformation'],
        catalogpicturesoftcopypath:result.category['catalogpicturesoftcopypath'],catalogpicturehyperlink:result.category['catalogpicturehyperlink'],
        openduedate:result.category['openduedate'],comments:result.category['comments'],
        catalogreportsoftcopypath:result.category['catalogreportsoftcopypath'],catalogreporthyperlink:result.category['catalogreporthyperlink'],
        documentformat:result.category['documentformat'],coredate:result.category['coredate'],
        catalogpicturename:result.category['catalogpicturename'],createdby:result.category['createdby'],modifiedon:result.category['modifiedon'],
        modifiedby:result.category['modifiedby'],spuddate:result.category['spuddate'],datecreated:result.category['datecreated'],
        pictureuploaddate:result.category['pictureuploaddate'],recorddate:result.category['recorddate'],
        hascorephotos:result.category['hascorephotos'],reportuploaddate:result.category['reportuploaddate'],
        wellborecorename:result.category['wellborecorename']
      }
    }
    )
  }
  updateitem(){
    return this.category.Onupdateitem(this.route.snapshot.params.id,this.form).subscribe((result)=>{
      console.log(result)
      alert('Category updated Successfully')
      this.router.navigate(['/viewcategory'])
    },
    error=>{ console.log(error) })
  }

}
