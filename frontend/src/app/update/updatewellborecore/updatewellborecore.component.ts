import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WellborecoreService } from 'src/app/services/wellborecore.service';

@Component({
  selector: 'app-updatewellborecore',
  templateUrl: './updatewellborecore.component.html',
  styleUrls: ['./updatewellborecore.component.css']
})
export class UpdatewellborecoreComponent implements OnInit {

  public form:any ={
    wellborename:'',bottomformation:'',corenumber:'', coredate:'',coringcontractor:'', coretopmdrt:'',corebottommdrt:'',
    coretoptvd:'',corebottomtvd:'',cutlength:'',cutlengthtvd:'', recoveredlength:'',filesize:'',securitygrade:'',
    corerecovery:'',topformation:'',corepicturesoftcopypath:'',corepicturehyperlink:'',openduedate:'',comments:'',
    corereportsoftcopypath:'',corereporthyperlink:'',documentformat:'',documenttitle:'',receivedate:'',
    createdby:'',datecreated:'',cored:'',modifiedon:'',modifiedby:'',pictureuploaddate:'',documentname:'',
    documentdate:'',reportuploaddate:'',

  }

  constructor(private wellborecore:WellborecoreService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.wellborecore.getoneitem(this.route.snapshot.params.id).subscribe(result=>{
      this.form={
        wellborename:result.wellborecore['wellborename'],bottomformation:result.wellborecore['bottomformation'],
        corenumber:result.wellborecore['corenumber'],coredate:result.wellborecore['coredate'],
        coringcontractor:result.wellborecore['coringcontractor'],coretopmdrt:result.wellborecore['coretopmdrt'],
        corebottommdrt:result.wellborecore['corebottommdrt'], coretoptvd:result.wellborecore['coretoptvd'],corebottomtvd:result.wellborecore['corebottomtvd'],
        cutlength:result.wellborecore['cutlength'],cutlengthtvd:result.wellborecore['cutlengthtvd'],
        recoveredlength:result.wellborecore['recoveredlength'],filesize:result.wellborecore['filesize'],securitygrade:result.wellborecore['securitygrade'],
        corerecovery:result.wellborecore['corerecovery'],topformation:result.wellborecore['topformation'],
        corepicturesoftcopypath:result.wellborecore['corepicturesoftcopypath'],corepicturehyperlink:result.wellborecore['corepicturehyperlink'],
        openduedate:result.wellborecore['openduedate'],comments:result.wellborecore['comments'],
        corereportsoftcopypath:result.wellborecore['corereportsoftcopypath'],corereporthyperlink:result.wellborecore['corereporthyperlink'],
        documentformat:result.wellborecore['documentformat'],documenttitle:result.wellborecore['documenttitle'],
        receivedate:result.wellborecore['receivedate'],createdby:result.wellborecore['createdby'],modifiedon:result.wellborecore['modifiedon'],
        modifiedby:result.wellborecore['modifiedby'],cored:result.wellborecore['cored'],datecreated:result.wellborecore['datecreated'],
        pictureuploaddate:result.wellborecore['pictureuploaddate'],documentname:result.wellborecore['documentname'],
        documentdate:result.wellborecore['documentdate'],reportuploaddate:result.wellborecore['reportuploaddate'],

      }
    }
    )
  }
  updateitem(){
    return this.wellborecore.onupdateitem(this.route.snapshot.params.id,this.form).subscribe((result)=>{
      console.log(result)
      alert('Wellborecore updated Successfully')
      this.router.navigate(['/viewwellborecore'])
    },
    error=>{ console.log(error) })
  }

}
