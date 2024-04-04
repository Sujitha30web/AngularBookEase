import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingRoom } from 'src/app/model/MeetingRoom';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-display-meetingroom',
  templateUrl: './display-meetingroom.component.html',
  styleUrls: ['./display-meetingroom.component.css']
})
export class DisplayMeetingroomComponent implements OnInit {
[x: string]: any;
  ngOnInit(): void {
  }

  displaymeetingrooms:MeetingRoom[]=[];
  message: string = "";
  errorMessage: string = "";
  searchTerm: string = '';

  constructor(private adminService:AdminService, private router: Router) { 
    this.adminService.getAllMeetingRooms().subscribe(
      {
        next:(data: MeetingRoom[])=>{
          console.log(data);
          this.displaymeetingrooms=data;
        },
        error:(err: any)=>{
          console.log(err);
          this.errorMessage="No meeting rooms found!!";
          this.message="";
        },
        complete:()=>{
          console.log("Server completed sending data");
        }
      }
    )
  }
  

  searchMeetingRoomsByName() {
    if (this.searchTerm.trim() !== '') {
      this.adminService.getMeetingRoomByName(this.searchTerm).subscribe({
        next: (data: MeetingRoom[] | MeetingRoom) => {
          if (Array.isArray(data)) {
            this.displaymeetingrooms = data;
          } else {
            this.displaymeetingrooms = [data]; 
          }
          this.errorMessage = '';
          this.message = '';
        },
        error: (err: any) => {
          console.log(err);
          this.errorMessage = 'Error occurred while searching meeting rooms.';
          this.message = '';
        }
      });
    } else {
      this.adminService.getAllMeetingRooms().subscribe({
        next: (data: MeetingRoom[]) => {
          this.displaymeetingrooms = data;
          this.errorMessage = '';
          this.message = '';
        },
        error: (err: any) => {
          console.log(err);
          this.errorMessage = 'Error occurred while fetching all halls.';
          this.message = '';
        }
      });
    }  
} 

}
