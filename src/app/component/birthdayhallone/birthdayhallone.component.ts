import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birthdayhallone',
  templateUrl: './birthdayhallone.component.html',
  styleUrls: ['./birthdayhallone.component.css']
})
export class BirthdayhalloneComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  booking()
  {
    alert("The room has been booked successfully!!....")
    this.router.navigateByUrl('home');
  }
}
