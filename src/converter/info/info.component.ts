import { Component, Input, OnInit } from "@angular/core";
import { ICurrency } from "src/app/app.types";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"]
})
export class InfoComponent {
  @Input() selectedCurrencies: ICurrency[] = [];
  @Input() value: number = 0;
}
