import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.component.html',
  styleUrls: ['./marriage.component.css']
})
export class MarriageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  MarriageHall1()
  {
    this.router.navigateByUrl('marriagehallone');
  }
}
