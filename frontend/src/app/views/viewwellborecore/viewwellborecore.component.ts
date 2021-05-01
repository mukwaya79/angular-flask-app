import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WellborecoreService } from 'src/app/services/wellborecore.service';

@Component({
  selector: 'app-viewwellborecore',
  templateUrl: './viewwellborecore.component.html',
  styleUrls: ['./viewwellborecore.component.css']
})
export class ViewwellborecoreComponent implements OnInit {

  public Wellborecore:any =[]

  constructor(private wellborecore:WellborecoreService,private router:Router) { }

  ngOnInit(): void {
    this.fetchdata()
  }
  fetchdata(){
    return this.wellborecore.getitem().subscribe(data=>{
      console.log(data)
      this.Wellborecore =data
    },
      err=>console.log(err))
  }

  removeitem(id:number){
    return this.wellborecore.deleteitem(id).subscribe(res=>{
      alert('wellborecore updated Successfully')
      this.router.navigate(['/wellborecore'])
      console.log(res)
    })
  }

}
