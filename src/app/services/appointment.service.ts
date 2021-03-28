import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    bookAppoint(data: any): any {
        console.log(data)
        return this.http.post(`${environment.apiUrl}/appoint/boot`, data)
        .subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log('ERROR : ' , err);
            }
        );
    }

    cancelAppoint(data: any): any {
        console.log(data)
        return this.http.post(`${environment.apiUrl}/c`, data)
        .subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log('ERROR : ' , err);
            }
        );
    }

    modifyAppoint(data){
        this.http.post(`${environment.apiUrl}/appoint/modify`, data)
        .subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }
}
