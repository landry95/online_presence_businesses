import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],

    exports: [
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        BrowserAnimationsModule
    ],

    providers: [],

    bootstrap: [AppComponent]
})
export class AppModule { }
