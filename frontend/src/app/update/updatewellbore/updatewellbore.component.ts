import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WellboreService } from 'src/app/services/wellbore.service';

@Component({
  selector: 'app-updatewellbore',
  templateUrl: './updatewellbore.component.html',
  styleUrls: ['./updatewellbore.component.css']
})
export class UpdatewellboreComponent implements OnInit {

  public form:any ={
    wellboreofficialname:'',
    wellborelocalname:'',
    wellborealiasname:'',
    spudyear:'',
    wellborespuddate:'',
    wellboretypeid:'',
    initialwellborepurposeid:'',


  }

  constructor(private wellbore:WellboreService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.wellbore.getoneitem(this.route.snapshot.params.id).subscribe(result=>{
      this.form={
        wellboreofficialname:result.wellbore['wellboreofficialname'],
        wellborelocalname:result.wellbore['wellborelocalname'],
        wellborealiasname:result.wellbore['wellborealiasname'],
        spudyear:result.wellbore['spudyear'],
        wellborespuddate:result.wellbore['wellborespuddate'],
        wellboretypeid:result.wellbore['wellboretypeid'],
        initialwellborepurposeid:result.wellbore['initialwellborepurposeid']

      }
    }
    )
        
  }
  updateitem(){
    return this.wellbore.Onupdateitem(this.route.snapshot.params.id,this.form).subscribe((result)=>{
      console.log(result)
      alert('Wellbore updated Successfully')
      this.router.navigate(['/viewwellbore'])
    },
    error=>{ console.log(error) })
  }

}
