import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

send()
{
  alert("Your Request Has Been Submitted !! We Will Reach You In Next 24hr")
}

}
