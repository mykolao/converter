import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CurrencyApiService } from "./currency-api.service";
import { LoaderComponent } from "./loader/loader.component";
import { ConverterModule } from "src/converter/converter.module";

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [BrowserModule, HttpClientModule, ConverterModule],
  providers: [CurrencyApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
