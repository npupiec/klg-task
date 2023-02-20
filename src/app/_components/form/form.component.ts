import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import { Subscription } from "rxjs";
import { InvoiceService } from "../../_services/invoice.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Output() formChangeValue: EventEmitter<FormGroup> = new EventEmitter();
  invoiceForm: FormGroup = new FormGroup({
    items: new FormArray([], {validators: this.atLeastOne})
  });

  formErrors = {
    required: 'This field is required',
    max_100: 'Max 100',
    too_long_30: 'max 30 characters',
    max: 'Max 1000000',
    min: 'Min 1',
    at_least_3: 'at least 3 characters',
    wrong: 'Only integers',
  }

  private subscriptions: Subscription[] = [];
  constructor(
    private _snackBar: MatSnackBar,
    private invoiceService: InvoiceService
  ) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.invoiceService.addNewInvoiceItem$.subscribe((add: boolean) => add ? this.addItem() : null)
    )
  }

  get itemsFormArray() {
    return this.invoiceForm.get('items') as FormArray;
  }

  removeItem(index: number): void {
    this.itemsFormArray.removeAt(index);
  }

  addItem(): void {
    const item: FormArray = this.itemsFormArray
    const i: FormGroup = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      count: new FormControl(null,
        [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern("^[0-9]*$")]),
      price: new FormControl(null,
        [Validators.required,  Validators.min(1), Validators.max(1000000), Validators.pattern("^[0-9]*$")])
    }, {updateOn: 'blur'});

    item.push(i);
  }

  atLeastOne(control: AbstractControl): ValidationErrors {
    const valid: boolean = (control as FormArray).controls.some(c => c.valid);
    return valid ? {} : { allIncorrect: true }
  }

  submit(): void {
    if (this.invoiceForm.get('items')?.value.length === 0) {
      this._snackBar.open('Please add items', '', {
        duration: 3000
      })
    }

    if (this.itemsFormArray.getError('allIncorrect')) {
      this.invoiceForm.markAllAsTouched();
    } else {
      this.formChangeValue.emit(this.invoiceForm);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s: Subscription) => s.unsubscribe());
  }
}
