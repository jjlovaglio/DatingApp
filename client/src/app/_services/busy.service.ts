import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestcount = 0;


  constructor(private spinnerService: NgxSpinnerService) { }

  busy() {
    this.busyRequestcount++;
    this.spinnerService.show(undefined, {
      type: 'line-scale-party',
      bdColor: 'rgba(255,255,255,0)',
      color: '#333333'
    })
  }

  Idle() {
    this.busyRequestcount--;
    if (this.busyRequestcount <= 0) {
      this.busyRequestcount = 0;
      this.spinnerService.hide();  
    }
  }
}
