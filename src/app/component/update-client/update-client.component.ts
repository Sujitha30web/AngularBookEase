import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountRegistration } from 'src/app/model/AccountRegistration';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  newRegister: AccountRegistration = new AccountRegistration();
  message:string="";
  errorMessage:string="";
  clientid:number=0;
  clientname:string="";
  clientbalance:number=0;
  clientemail:string="";
  clientpassword:string="";
  isPresent: boolean =false;
  clientget: any = {};
  seeRegistration:AccountRegistration=new AccountRegistration();
  
  constructor(private router: Router, private clientService: ClientService, private activeRoute:ActivatedRoute) {
    this.clientget = JSON.parse(localStorage.getItem("client") || '{}');
    console.log("clientget:", this.clientget);
    this.clientid = this.clientget.id;
    this.clientname = this.clientget.name;
    this.clientbalance = this.clientget.account.balance;
    this.clientemail = this.clientget.email;
    this.clientpassword = this.clientget.password;
    console.log(this.clientid);
    console.log(this.clientname);
    console.log(this.clientbalance);
    console.log(this.clientpassword);
    console.log(this.clientpassword);
   }

  ngOnInit(): void {
  }

  displayToUpdateItems()
  {
    // console.log(this.newRegister);
    this.isPresent = true;
  }

  updateTheClient() {
    this.clientget.name = this.clientname;
  this.clientget.account.balance = this.clientbalance;
  this.clientget.email = this.clientemail;
  this.clientget.password = this.clientpassword;
    this.clientService.updateClient(this.clientget).subscribe({
      
      next: (data) => {
        console.log(data);
        alert("Your account has been updated successfully...");
        this.router.navigateByUrl('client/' + this.clientget.clientId);
        this.message = "Account Updated.";
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error;
      }
    });
  }

}
