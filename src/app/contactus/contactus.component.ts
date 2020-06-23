import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { Response } from "@angular/http";
import { feedbackService } from "../shared/service/feedback.service";
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm : FormGroup;
  submitted = false;
  responseMsg = "Sending form.......";
  constructor(public feedbackService : feedbackService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      'subject' : new FormControl(null, [Validators.required, this.blankSpaces]),
      'useremail' : new FormControl(null, [Validators.required, Validators.email]), 
      'fcenquired': new FormControl(null, [Validators.required]),
      'usermessage' : new FormControl(null, [Validators.required])
    });

  }
  blankSpaces(control : FormControl) : {[s: string]: boolean} {
    
    if (control.value !=null && control.value.trim().length === 0 ) { //value are blank spaces, error
      return { 'blankSpaces': true };
    }
    return null; //no error detected
  }
  
  onSubmit() {
    this.submitted = true;
    console.log(this.contactForm.value.useremail);

    this.feedbackService.addFeedback({ subject: this.contactForm.value.subject,
    useremail: this.contactForm.value.useremail, fcenquired: this.contactForm.value.fcenquired, usermessage: this.contactForm.value.usermessage  })
      .subscribe((response: Response) => {
        const data = response.json();
        console.log(data);
        this.responseMsg = "Feedback Sent";
      }, (error) => {
        console.log(error);
        this.responseMsg =  "Failed to send feedback";
      });
  }
  resetForm() {
    this.contactForm.reset();
    this.submitted = false;
    this.responseMsg = "Sending form.......";
  }

}
