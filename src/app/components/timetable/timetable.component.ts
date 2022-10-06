import { DetailsService } from './../../services/details.service';
import { ScheduledEvent } from './../../interfaces/scheduled-event';
import { eventsData } from './../../data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.sass']
})
export class TimetableComponent implements OnInit {

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
  sections = [1,2,3,4]
  events : ScheduledEvent[][] = Array(5).fill([])

  constructor(private detailsService : DetailsService) { }

  ngOnInit(): void {
    let tempEvents = eventsData
    tempEvents.forEach((event)=>{
      let day = [...this.events[event.day]]
      day.push(event)
      this.events[event.day] = day
    })
    console.log(this.events);    
  }

  formatTime(minutes:number){
    let minutesString = String(minutes)
    if (minutesString.length == 1){
      minutesString = `0${minutesString}`
    }
    return minutesString
  }

  openEventDetails(event:ScheduledEvent){
    this.detailsService.setEvent(event)
  }

}
