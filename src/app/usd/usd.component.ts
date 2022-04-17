import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.css']
})
export class UsdComponent implements OnInit {
  @Input() usd="";
  @Output() newUsdEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onFocusOutEvent(event: any){ 
    console.log(event.target.value); 
    let yen = event.target.value * 126.68;
    //console.log("valor ",yen);
    this.newUsdEvent.emit(yen);
 }

}
