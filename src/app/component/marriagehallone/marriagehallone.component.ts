import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marriagehallone',
  templateUrl: './marriagehallone.component.html',
  styleUrls: ['./marriagehallone.component.css']
})
export class MarriagehalloneComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  booking()
  {
    alert("The room has been booked successfully!!....")
    this.router.navigateByUrl('home');
  }
}
