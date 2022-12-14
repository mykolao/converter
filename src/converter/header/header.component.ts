import { Component, Input, OnInit } from "@angular/core";
import { IFeaturedData } from "src/app/app.types";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() data: IFeaturedData = { pairs: [], values: [] };
}
