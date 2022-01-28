import { Component } from '@angular/core';
import { ICurrentweather } from './icurrent-weather';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-weather-app';
  currentWeather:ICurrentweather={
    city:'',
    country:'',
    date:new Date(),
    image:'',
    description:'',
    temperature:0
  }
  constructor(private weatherService:WeatherService){}//injecting a weather service to app component
  doSearch(searchValue:string){
    const userInput=searchValue.split(',').map(s => s.trim());
        this.weatherService.getCurrentWeather(userInput[0],userInput.length > 1 ? userInput[1]:undefined).subscribe((data => this.currentWeather = data))

  }
}