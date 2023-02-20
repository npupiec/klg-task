import { Component, Input } from '@angular/core';
import { InvoiceItems } from "../../_models/invoice";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{
  @Input() dataSource: InvoiceItems[] = [];

  displayedColumns: string[] = ['position', 'name', 'count', 'price'];

  constructor() { }

  getTotalCost(): number {
    return this.dataSource.map((t: InvoiceItems) => t).reduce((acc: any, value: InvoiceItems) =>
      this.dataSource.length * Number(value.count), 0);
  }

}
