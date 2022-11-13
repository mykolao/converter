import { Component, OnInit } from "@angular/core";
import { ICurrency } from "./app.types";
import { CurrencyApiService } from "./currency-api.service";

@Component({
  selector: "app-root",
  template: `<h1>App</h1>`,
  styles: []
})
export class AppComponent implements OnInit {
  public isLoading: boolean = true;
  public currencyValues: ICurrency[] = [];

  constructor(private currencyApiService: CurrencyApiService) {}

  ngOnInit(): void {
    this.currencyApiService.getLatestValues().subscribe(({ data }) => {
      this.currencyValues = Object.values(data);
      this.isLoading = false;
    });
  }
}
