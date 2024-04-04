import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayprofile',
  templateUrl: './displayprofile.component.html',
  styleUrls: ['./displayprofile.component.css']
})
export class DisplayprofileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  displayprofile() {
    var clientget = JSON.parse(localStorage.getItem("client") || '{}');
    console.log(clientget.clientId);
    this.router.navigateByUrl("client/" + clientget.clientId);
  }
  logout() {
    localStorage.clear();
    alert("You have been logged out successfully!!!...✨✨");
  }
}
