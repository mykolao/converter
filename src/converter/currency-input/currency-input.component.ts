import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { ICurrency } from "src/app/app.types";

@Component({
  selector: "app-currency-input",
  templateUrl: "./currency-input.component.html",
  styles: []
})
export class CurrencyInputComponent implements OnInit, OnChanges {
  @Input() value: number = 0;
  @Input() selectedCurrency: ICurrency = { code: "", value: 0 };
  @Input() currencies: ICurrency[] = [];

  @Output() onInputChange = new EventEmitter<number>();
  @Output() onCurrencyChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.value = this.formatNumber(this.value);
  }

  ngOnChanges(): void {
    this.value = this.formatNumber(this.value);
  }

  getInputNumber(event: Event) {
    return +(event.target as HTMLInputElement).value;
  }

  public getSelectedCurrency(event: Event) {
    return (event.target as HTMLSelectElement).value;
  }

  private formatNumber(value: number) {
    return +value.toFixed(3);
  }
}
