import { Component } from '@angular/core';
import { HomepageAPIService } from './service/homepage-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homepage1:any;
  errMessage:string=''
  constructor(public _service: HomepageAPIService){
  this._service.getHomepage().subscribe({
  next:(data)=>{this.homepage1=data},
  error:(err)=>{this.errMessage=err}
  })
  }
}

 