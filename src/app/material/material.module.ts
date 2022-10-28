import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const MODULES = [
  MatCardModule,
  MatButtonModule,
  MatInputModule
];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class MaterialModule { }
