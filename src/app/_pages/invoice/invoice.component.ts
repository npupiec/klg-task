import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { InvoiceService } from "../../_services/invoice.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceComponent implements OnInit {
  constructor(
    private invoiceService: InvoiceService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  onFormValueChanges(form: FormGroup): void {
    this.submitForm(form);
  }

  addItem(): void {
    this.invoiceService.addNewInvoiceItem.next(true);
    this.cdr.markForCheck();
  }

  submitForm(form: FormGroup): void {
    localStorage.setItem('form', JSON.stringify(form.value));
    this._snackBar.open('Form saved', '', {
      duration: 1500
    });
    this.router.navigate(['/invoice-preview']);
    this.cdr.markForCheck();
  }
}
