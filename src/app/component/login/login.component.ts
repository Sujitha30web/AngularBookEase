import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/Client';
import { Login } from 'src/app/model/Login';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newLogin:Login=new Login();
  client:Client=new Client();
  message: string = "";
  errorMessage: string = "";
  constructor(private router:Router,private clientService: ClientService) { }

  ngOnInit(): void {
  }

  registerNewUser(){
    console.log("Register User Successful!");
    this.router.navigateByUrl('register');
  }
  
  addLogin(){
    console.log(this.newLogin);
    this.clientService.addNewLogin(this.newLogin).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.client=data;
          console.log(this.client);
          localStorage.setItem("client",JSON.stringify(data));
          console.log(localStorage.getItem("client"));
          this.message = "Client loggedIn  Sucessfully!...";
              console.log("Client loggedIn  Sucessfully");
              alert("You have loggedIn successfully...")
              this.router.navigateByUrl('home');
          this.errorMessage = "";
        },
        error: (err) => {
          console.log(err);
          if (err.status == "0")
            this.errorMessage = " Network error, please try again later."
          else
            this.errorMessage = err.error;
          this.message = "";
        }
      }
    )
    }
  
}
