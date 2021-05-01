import { WellsService } from './../../services/wells.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatewells',
  templateUrl: './updatewells.component.html',
  styleUrls: ['./updatewells.component.css']
})
export class UpdatewellsComponent implements OnInit {

  public form:any ={

    wellname:'',
    sampletype:'',
    layer:'',
    initialdepth:'',
    terminationdepth:'',
    samplebucket:'',
    
  }

  constructor(private wells:WellsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.wells.getoneitem(this.route.snapshot.params.id).subscribe(result=>{
      this.form={
        wellname:result.wells['wellname'],
        sampletype:result.wells['sampletype'],
        layer:result.wells['layer'],
        initialdepth:result.wells['initialdepth'],
        terminationdepth:result.wells['terminationdepth'],
        samplebucket:result.wells['samplebucket'],
        
      }
      
    }

    )
  }
  updateitem(){
    return this.wells.Onupdateitem(this.route.snapshot.params.id,this.form).subscribe((result)=>{
      console.log(result)
      alert('Wells updated Successfully')
      this.router.navigate(['/viewwells'])
    },
    error=>{ console.log(error) })
  }

}
