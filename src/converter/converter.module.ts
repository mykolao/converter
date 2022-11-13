import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConverterComponent } from "./converter.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { CurrencyInputComponent } from './currency-input/currency-input.component';

@NgModule({
  declarations: [ConverterComponent, HeaderComponent, FooterComponent, InfoComponent, CurrencyInputComponent],
  imports: [CommonModule],
  exports: [ConverterComponent]
})
export class ConverterModule {}
