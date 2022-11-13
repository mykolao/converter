import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConverterComponent } from "./converter.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ConverterComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [ConverterComponent]
})
export class ConverterModule {}
