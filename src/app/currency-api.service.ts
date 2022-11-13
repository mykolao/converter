import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IGetLatestValuesResponse } from "./app.types";
import { REQUEST_URL } from "src/config";

@Injectable()
export class CurrencyApiService {
  constructor(private http: HttpClient) {}

  getLatestValues(): Observable<IGetLatestValuesResponse> {
    return this.http.get<IGetLatestValuesResponse>(REQUEST_URL);
  }
}
