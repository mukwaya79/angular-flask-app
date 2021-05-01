import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WellborecoreService } from 'src/app/services/wellborecore.service';

@Component({
  selector: 'app-wellborecore',
  templateUrl: './wellborecore.component.html',
  styleUrls: ['./wellborecore.component.css']
})
export class WellborecoreComponent implements OnInit {

  public form:any ={
    wellborename:'',bottomformation:'',corenumber:'', coredate:'',coringcontractor:'', coretopmdrt:'',corebottommdrt:'',
    coretoptvd:'',corebottomtvd:'',cutlength:'',cutlengthtvd:'', recoveredlength:'',filesize:'',securitygrade:'',
    corerecovery:'',topformation:'',corepicturesoftcopypath:'',corepicturehyperlink:'',openduedate:'',comments:'',
    corereportsoftcopypath:'',corereporthyperlink:'',documentformat:'',documenttitle:'',receivedate:'',
    createdby:'',datecreated:'',cored:'',modifiedon:'',modifiedby:'',pictureuploaddate:'',documentname:'',
    documentdate:'',reportuploaddate:'',

  }

  constructor(private wellborecore:WellborecoreService,private router:Router) { }

  ngOnInit(): void {
  }
  additem(){
    return this.wellborecore.senditem(this.form).subscribe(res=>{
      alert('Wellborecore updated Successfully')
      this.router.navigate(['/viewwellborecore'])
      console.log(res)
    })
  }

}
