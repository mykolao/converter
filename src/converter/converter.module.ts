import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConverterComponent } from "./converter.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [ConverterComponent, HeaderComponent, FooterComponent, InfoComponent],
  imports: [CommonModule],
  exports: [ConverterComponent]
})
export class ConverterModule {}
