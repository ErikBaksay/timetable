import { DetailsService } from './../../services/details.service';
import { ScheduledEvent } from './../../interfaces/scheduled-event';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  event : ScheduledEvent | null = null 

  constructor(private detailsService : DetailsService,
    private router : Router) { }

  ngOnInit(): void {
    this.event = this.detailsService.getEvent()
    this.detailsService.eventSelected.subscribe(()=>{
      this.event = this.detailsService.getEvent()
      this.openDetails()
    })
  }

  formatTime(minutes:number){
    let minutesString = String(minutes)
    if (minutesString.length == 1){
      minutesString = `0${minutesString}`
    }
    return minutesString
  }

  openDetails(){
    let detailsElement = document.getElementById('details-background')
    detailsElement!.style.display = 'flex'
  }

  closeDetails(){
    let detailsElement = document.getElementById('details-background')
    detailsElement!.style.display = 'none'
  }

  openOnMaps(linkToRoom:string|null){
    if (linkToRoom != null){
      window.location.href = linkToRoom
    }
  }

}
