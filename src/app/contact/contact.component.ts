import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  
  constructor() { 
    emailjs.init("user_yt6NAv4PLnZ34uiX9Ph2m");
  }

  ngOnInit() {

  }


  onClick(e: any) {
    console.log(e);
  }
}
