import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreInfoComponent } from './more-info/more-info.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';

import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'more-info', component: MoreInfoComponent },
  { path: ':id', component: ProductComponent },
];

const DECLARATIONS = [
  ProductsComponent,
  MoreInfoComponent,
  MainComponent,
  ProductComponent
]

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  exports:[
    ...DECLARATIONS
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductsModule { }
