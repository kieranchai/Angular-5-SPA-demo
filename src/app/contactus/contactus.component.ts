import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from "@angular/forms";
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm : FormGroup;

  submitted : boolean = false;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'subject' : new FormControl(null, [Validators.required, this.blankSpaces]),
      'useremail' : new FormControl(null, [Validators.required, Validators.email]), 
      'fcenquired': new FormControl(null, [Validators.required]),
      'usermessage' : new FormControl(null, [Validators.required])
    });

  }

  onSubmit() {
    console.log(this.contactForm);
    this.submitted = true;
  }

  blankSpaces(control : FormControl) : {[s: string]: boolean} {
    
    if (control.value !=null && control.value.trim().length === 0 ) { //value are blank spaces, error
      return { 'blankSpaces': true };
    }
    return null; //no error detected
  }

}
