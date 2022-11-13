import { Component, Input, OnInit } from "@angular/core";
import { ICurrency, IFeaturedData } from "src/app/app.types";
import { BASE_CURRENCY, FEATURES_PAIRS } from "src/config";

@Component({
  selector: "app-converter",
  template: ` <main>Converter</main> `,
  styles: []
})
export class ConverterComponent implements OnInit {
  @Input() data: ICurrency[] = [];

  private baseCurrency: string = BASE_CURRENCY;

  // Header Properties
  featuredData: IFeaturedData = {
    pairs: FEATURES_PAIRS,
    values: []
  };

  // Info Properties
  infoValue: number = 0;

  // Converter Properties
  selectedCurrencies: ICurrency[] = [];
  inputValues: number[] = [1, 0];

  ngOnInit(): void {
    this.selectedCurrencies = [this.data[0], this.data[1]];
    this.calculateFeaturedValues();
    this.calculateInfoValue();
    this.calculateSecondValue();
  }

  // Value 1 Methods
  updateFirstCurrency(value: string) {
    this.selectedCurrencies[0] = this.getCurrencyByCode(value);
    this.calculateSecondValue();
    this.calculateInfoValue();
  }

  updateFirstInput(value: number) {
    this.inputValues[0] = value;
    this.calculateSecondValue();
  }

  private calculateFirstValue() {
    const [to, from] = this.getSelectedCurrencyCodes();
    const value = this.inputValues[1];

    this.inputValues[0] = this.convert(from, to, value);
  }

  // Value 2 Methods
  updateSecondCurrency(value: string) {
    this.selectedCurrencies[1] = this.getCurrencyByCode(value);
    this.calculateSecondValue();
    this.calculateInfoValue();
  }

  updateSecondInput(value: number) {
    this.inputValues[1] = value;
    this.calculateFirstValue();
  }

  private calculateSecondValue() {
    const [from, to] = this.getSelectedCurrencyCodes();
    const value = this.inputValues[0];

    this.inputValues[1] = this.convert(from, to, value);
  }

  // Swap Methods
  swapCurrencies() {
    this.selectedCurrencies.reverse();
    this.calculateSecondValue();
    this.calculateInfoValue();
  }

  swapInputs() {
    this.inputValues.reverse();
    this.calculateSecondValue();
  }

  // Util Methods
  private getCurrencyByCode(code: string) {
    return this.data.find((currency) => currency.code === code)!;
  }

  private getCurrencyValue(code: string) {
    return this.data.find((currency) => currency.code === code)!.value;
  }

  private getSelectedCurrencyCodes() {
    const [{ code: c1 }, { code: c2 }] = this.selectedCurrencies;
    return [c1, c2];
  }

  public convert(from: string, to: string, value = 1): number {
    if (from === this.baseCurrency) {
      return value * this.getCurrencyValue(to);
    }

    if (to === this.baseCurrency) {
      return value / this.getCurrencyValue(from);
    }

    const baseValue = this.convert(from, this.baseCurrency, value);
    return this.convert(this.baseCurrency, to, baseValue);
  }

  private calculateFeaturedValues() {
    const { pairs, values } = this.featuredData;
    this.featuredData.values = pairs.map(([from, to]) => this.convert(from, to));
  }

  private calculateInfoValue() {
    const [from, to] = this.getSelectedCurrencyCodes();
    this.infoValue = this.convert(from, to);
  }
}
