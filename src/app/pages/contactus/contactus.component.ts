import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contact = new FormGroup({
    Name: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.email, Validators.required]),
    Subject: new FormControl('', Validators.required),
    Message: new FormControl('', Validators.required)
  });

  get Name() { return this.contact.get('Name')}
  get Email() { return this.contact.get('Email')}
  get Subject() { return this.contact.get('Subject') }
  get Message() { return this.contact.get('Message') }

}
