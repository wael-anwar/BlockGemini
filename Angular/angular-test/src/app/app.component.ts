import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'https://reqres.in/api/users?page=1';
  AllData:any;
  constructor(private http:HttpClient){}

ngOnInit() {
  this.http.get<any>(this.url).subscribe(data => {
    this.AllData = data.data;
    console.log(this.AllData);
})   
}
}
