/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormArray,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Importer } from '@ng-app/data-models';
import { MaterialModule } from '@ng-app/material';

@Component({
  selector: 'ng-app-carriers',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.scss'],
})
export class CarriersComponent {
  cust = 'Korean Airlines';
  openAmt = 20000;
  overDue = 1000;
  crLimit = 50000;

  importerForm = this.fb.group({
    clientId: null,
    name: [null, Validators.required],
    address1: [null, Validators.required],
    address2: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    ],
    country: [null, Validators.required],
    phone1: [null, Validators.required],
    email: [null, Validators.required],
    website: [null, Validators.required],

    bond: this.fb.group({
      effectiveDate: [''],
      bondNo: [''],
      amount: [''],
      suretyCode: [''],
      portFiled: [''],
      holderName: [''],
    }),

    addInfo: this.fb.array([]),
  });

  hasUnitNumber = false;
  importers: Importer[] = [];

  constructor(private fb: UntypedFormBuilder) {}

  get additional() {
    return this.importerForm.controls['addInfo'] as UntypedFormArray;
  }

  addaddInfo() {
    const addtionalInfo = this.fb.group({
      tel2: ['', Validators.required],
      email2: [''],
      tel3: [''],
      email3: [''],
    });
    this.additional.push(addtionalInfo);
  }

  onSubmit(): void {
    console.log(this.importers);

    alert('Thanks!');
  }
}
