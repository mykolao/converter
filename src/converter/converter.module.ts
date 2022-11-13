import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConverterComponent } from "./converter.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ConverterComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [ConverterComponent]
})
export class ConverterModule {}
