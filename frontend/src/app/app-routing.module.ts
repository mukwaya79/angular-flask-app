import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';


import { WellboreComponent } from './forms/wellbore/wellbore.component';
import { WellsComponent } from './forms/wells/wells.component';
import { WellborecoreComponent } from './forms/wellborecore/wellborecore.component';
import { CategoryComponent } from './forms/category/category.component';
import { ViewwellsComponent } from './views/viewwells/viewwells.component';
import { ViewwellboreComponent } from './views/viewwellbore/viewwellbore.component';
import { ViewwellborecoreComponent } from './views/viewwellborecore/viewwellborecore.component';
import { LockGuard } from './lock.guard';
import { UpdatewellsComponent } from './update/updatewells/updatewells.component';
import { ViewcategoryComponent } from './views/viewcategory/viewcategory.component';
import { UpdatewellboreComponent } from './update/updatewellbore/updatewellbore.component';
import { UpdatewellborecoreComponent } from './update/updatewellborecore/updatewellborecore.component';
import { UpdatecategoryComponent } from './update/updatecategory/updatecategory.component';
import { MainComponent } from './component/main/main.component';



const routes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'home' , component:HomeComponent,
  canActivate:[LockGuard]},
  {path:'login' , component:LoginComponent},
  
  {path:'wells' , component:WellsComponent,canActivate:[LockGuard]},
  {path:'main' , component:MainComponent,canActivate:[LockGuard]},
  {path:'wellbore' , component:WellboreComponent,canActivate:[LockGuard]},
  {path:'wellborecore/update/:id' , component:UpdatewellborecoreComponent,canActivate:[LockGuard]},
  {path:'wellborecore' , component:WellborecoreComponent,canActivate:[LockGuard]},
  {path:'wellbore/update/:id' , component:UpdatewellboreComponent,canActivate:[LockGuard]},
  {path:'category' , component:CategoryComponent,canActivate:[LockGuard]},
  {path:'category/update/:id' , component:UpdatecategoryComponent,canActivate:[LockGuard]},
  {path:'viewwells' , component:ViewwellsComponent,canActivate:[LockGuard]},
  {path:'wells/update/:id' , component:UpdatewellsComponent,canActivate:[LockGuard]},
  {path:'viewwellbore' , component:ViewwellboreComponent,canActivate:[LockGuard]},
  {path:'viewwellborecore' , component:ViewwellborecoreComponent,canActivate:[LockGuard]},
  {path:'viewcategory' , component:ViewcategoryComponent,canActivate:[LockGuard]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
