import { CategoryService } from './services/category.service';
import { WellsService } from './services/wells.service';
import { LoginService } from './services/login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

import { LoginComponent } from './component/login/login.component';

import { WellboreComponent } from './forms/wellbore/wellbore.component';
import { WellsComponent } from './forms/wells/wells.component';
import { WellborecoreComponent } from './forms/wellborecore/wellborecore.component';
import { CategoryComponent } from './forms/category/category.component';
import { FormsModule } from '@angular/forms';
import { ViewwellsComponent } from './views/viewwells/viewwells.component';
import { ViewwellboreComponent } from './views/viewwellbore/viewwellbore.component';
import { ViewwellborecoreComponent } from './views/viewwellborecore/viewwellborecore.component';

import { ViewcategoryComponent } from './views/viewcategory/viewcategory.component';
import { UpdatewellsComponent } from './update/updatewells/updatewells.component';
import { UpdatewellboreComponent } from './update/updatewellbore/updatewellbore.component';
import { UpdatewellborecoreComponent } from './update/updatewellborecore/updatewellborecore.component';
import { WellborecoreService } from './services/wellborecore.service';
import { WellboreService } from './services/wellbore.service';
import { UpdatecategoryComponent } from './update/updatecategory/updatecategory.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './component/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    LoginComponent,
    WellsComponent,
    WellboreComponent,
    WellborecoreComponent,
    CategoryComponent,
    ViewwellsComponent,
    ViewwellboreComponent,
    ViewwellborecoreComponent,
    
    ViewcategoryComponent,
         UpdatewellsComponent,
         UpdatewellboreComponent,
         UpdatewellborecoreComponent,
         UpdatecategoryComponent,
         NavbarComponent,
         MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService,WellsService,WellborecoreService,WellboreService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
