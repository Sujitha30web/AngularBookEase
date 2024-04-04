import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Birthdayhall1()
  {
    this.router.navigateByUrl('birthdayhallone');
  }

}
