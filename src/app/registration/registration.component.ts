import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import './../models/customer';
import { Customer } from './../models/customer';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // form group
  customerForm: FormGroup;
  // Data model
  customer: Customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    // form model
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      sendCatalog: true

    });
  }


  ResetForm(): void {
    this.customerForm.patchValue({
      firstName: '',
      lastName: '',
      sendCatalog: true
    });
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

}
