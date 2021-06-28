import { Component, OnInit,Input } from '@angular/core';
import { ICurrentweather } from '../icurrent-weather';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() current:ICurrentweather={
    city:'',
    country:'',
    date:new Date(),
    image:'',
    description:'',
    temperature:0
  }
  constructor() {
    
   }

  ngOnInit(): void {
   
  }

}
