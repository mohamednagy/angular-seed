import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
  }

  constructor(private _service: NotificationsService){
  }

  notify(){
    this._service.success(
                          'Some Title',
                          'Some Content',
                          {
                              timeOut: 5000,
                              showProgressBar: true,
                              pauseOnHover: false,
                              clickToClose: false,
                              maxLength: 10
                          }
                      )
  }
}
