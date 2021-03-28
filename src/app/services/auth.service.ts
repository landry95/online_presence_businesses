import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
            private http: HttpClient,
            private router: Router
        ) { }

    registration(data: any): any {
        return this.http.post(`${environment.apiUrl}/user/registration`, data)
        .subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log('ERROR : ' , err);
            }
        );
    }

    login(data: any): any {
        return this.http.post(`${environment.apiUrl}/user/login`, data)
        .subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log('ERROR : ' , err);
            }
        );
    }

    account_activation(data){
        this.http.post(`${environment.apiUrl}/user/activateAccount`, data)
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


    logOut(): void {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/home']);
    }

}

