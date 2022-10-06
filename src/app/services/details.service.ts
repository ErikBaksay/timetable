import { ScheduledEvent } from './../interfaces/scheduled-event';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  event : ScheduledEvent | null = null
  eventSelected = new EventEmitter()

  constructor() { }

  setEvent(event:ScheduledEvent){
    this.event = event
    this.eventSelected.emit()
  }
  getEvent(){
    return this.event
  }
}
