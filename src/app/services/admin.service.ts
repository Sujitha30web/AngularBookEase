import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeetingRoom } from '../model/MeetingRoom';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  
  constructor(private httpClient:HttpClient) { }


  getAllMeetingRooms(): Observable<any> {
    return this.httpClient.get("http://localhost:8080/viewallmeetingrooms");
  }

  getMeetingRoomByName(searchTerm?: string):Observable<any> {
    return this.httpClient.get("http://localhost:8080/meetingroom/name/"+searchTerm);
  }
  
}
