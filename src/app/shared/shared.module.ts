import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


const materialModules = [
  MatCardModule,
  MatIconModule,
  MatButtonModule

];




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ...materialModules
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    ...materialModules

  ],
  providers:[

  ]
})
export class SharedModule { }
