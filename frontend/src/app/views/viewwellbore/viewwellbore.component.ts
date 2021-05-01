import { WellboreService } from './../../services/wellbore.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewwellbore',
  templateUrl: './viewwellbore.component.html',
  styleUrls: ['./viewwellbore.component.css']
})
export class ViewwellboreComponent implements OnInit {

  public Wellbore:any =[];

  constructor(private wellbore:WellboreService,private router:Router) { }

  ngOnInit(): void {
    this.fetchdata()
  }
  fetchdata(){
    return this.wellbore.getitem().subscribe(data=>{
      console.log(data)
      this.Wellbore =data
    },
      err=>console.log(err))
  }

  removeitem(id:number){
    return this.wellbore.deleteitem(id).subscribe(res=>{
      alert('Wellbore updated Successfully')
      this.router.navigate(['/wellbore'])
      console.log(res)
    })
  }

}
