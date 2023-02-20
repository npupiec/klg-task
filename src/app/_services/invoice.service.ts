import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Company } from "../_models/company";

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  backendUrl: string = `http://localhost:3000/api`;
  addNewInvoiceItem: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  addNewInvoiceItem$: Observable<boolean> = this.addNewInvoiceItem.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  getCompanyData(): Observable<Company> {
    return this.http.get<Company>(`${this.backendUrl}/data`);
  }
}
