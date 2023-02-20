import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { InvoiceService } from "../../_services/invoice.service";
import { Company } from "../../_models/company";
import { InvoiceItems } from "../../_models/invoice";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponent implements OnInit {
  invoices: InvoiceItems[] = [];
  companyData!: Company;

  constructor(
    private invoiceService: InvoiceService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.checkIsForm();
    this.getCompanyData();
  }

  getCompanyData(): void {
    this.invoiceService.getCompanyData().subscribe((data: Company) => {
      this.companyData = data;
      this.cdr.markForCheck();
    })
  }

  checkIsForm(): void {
    const form: string | null = localStorage.getItem('form');
    this.invoices = form ? JSON.parse(form).items : [];
    this.cdr.markForCheck();
  }

}
