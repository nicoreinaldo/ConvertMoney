import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html',
  styleUrls: ['./yen.component.css']
})
export class YenComponent implements OnInit {
  @Input() yen="";
  @Output() newYenEvent = new EventEmitter<any>();

  constructor() { }
  

  ngOnInit(): void {
  }

  onFocusOutEvent(event: any){ 
    console.log(event.target.value); 
    let usd = event.target.value * 0.0079;
   // console.log("valor ",usd);
    this.newYenEvent.emit(usd);
 }

}
