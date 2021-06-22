import { Component, OnInit } from '@angular/core';
import { ICurrentweather } from '../icurrent-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current:ICurrentweather={
    city:'',
    country:'',
    date:new Date(),
    image:'',
    description:'',
    temperature:0
  }
  constructor(private weatherService: WeatherService) {
    
   }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather('Redmond','US').subscribe(data=>this.current = data)  
  }

}
