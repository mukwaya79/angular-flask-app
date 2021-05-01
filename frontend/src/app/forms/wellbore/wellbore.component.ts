import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WellboreService } from 'src/app/services/wellbore.service';

@Component({
  selector: 'app-wellbore',
  templateUrl: './wellbore.component.html',
  styleUrls: ['./wellbore.component.css']
})
export class WellboreComponent implements OnInit {

  public form:any ={
    wellboreofficialname:'',
    wellborelocalname:'',
    wellborealiasname:'',
    spudyear:'',
    wellborespuddate:'',
    wellboretypeid:'',
    initialwellborepurposeid:'',


  }

  constructor(private wellbore:WellboreService,private router:Router) { }

  ngOnInit(): void {
  }
  additem(){
    return this.wellbore.senditem(this.form).subscribe(res=>{
      alert('wellbore updated Successfully')
      this.router.navigate(['/viewwellbore'])
      console.log(res)
    })
  }

}
