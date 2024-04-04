import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterAccount } from '../model/RegisterAccount';
import { Login } from '../model/Login';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  addNewRegistration(newRegister: RegisterAccount): Observable<any> {
    return this.httpClient.post("http://localhost:8080/newClient", newRegister);
  }

  addNewLogin(newLogin:Login): Observable<any> {
    return this.httpClient.post("http://localhost:8080/client/login", newLogin);
  }

  getClientbyId(clientId:number): Observable<any> {
    return this.httpClient.get("http://localhost:8080/client/" + clientId);
  }

  deleteClientById(clientId?: number): Observable<any> {
    console.log("Client"+clientId);
    return this.httpClient.delete("http://localhost:8080/client/" + clientId);
  }

  updateClient(clientget: RegisterAccount): Observable<any> {
    return this.httpClient.patch("http://localhost:8080/client", clientget);
  }

}