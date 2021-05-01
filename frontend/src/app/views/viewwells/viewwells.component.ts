import { WellsService } from './../../services/wells.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewwells',
  templateUrl: './viewwells.component.html',
  styleUrls: ['./viewwells.component.css']
})
export class ViewwellsComponent implements OnInit {

  public Wells:any =[]

  constructor(private wells:WellsService,private router:Router) { }

  ngOnInit(): void {
    this.fetchdata()
   
  }
  fetchdata(){
    return this.wells.getitem().subscribe(data=>{
      console.log(data)
      this.Wells = data
    },
      err=>console.log(err))
  }

  removeitem(id:number){
    return this.wells.deleteitem(id).subscribe(res=>{
      alert('item successfully deleted')
      this.router.navigateByUrl('wells')
      console.log(res)
    })
  }

}
