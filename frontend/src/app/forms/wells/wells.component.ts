import { WellsService } from './../../services/wells.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wells',
  templateUrl: './wells.component.html',
  styleUrls: ['./wells.component.css']
})
export class WellsComponent implements OnInit {

  public form:any ={

    wellname:'',
    sampletype:'',
    layer:'',
    initialdepth:'',
    terminationdepth:'',
    samplebucket:'',
    
  }

  constructor(private wells:WellsService,private router:Router) { }

  ngOnInit(): void {
    
  }
  additem(){
    return this.wells.senditem(this.form).subscribe(res=>{
      console.log(res)
      this.router.navigateByUrl('/viewwells')
    })
  }
 

}
