import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2Webstorage} from 'ngx-webstorage';

import { AppComponent } from './app.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    NgbModule.forRoot(),
    Ng2Webstorage.forRoot({ prefix: '', separator: ''})
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
