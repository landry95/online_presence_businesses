import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    registrationForm: FormGroup;
    loginSubmitted = false;
    regSubmitted = false;
    
    constructor() { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });

        this.registrationForm = new FormGroup({
            username: new FormControl('', Validators.required),
            pass: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
        });
    }

    get g() { return this.loginForm.controls; }
    get f() { return this.registrationForm.controls; }


    onSubmitLoginForm(){
        this.loginSubmitted = true;
        console.log(this.loginForm.value)
        if (this.loginForm.invalid) {
            return;
        }
    }

    onSubmitRegistrationForm(){
        this.regSubmitted = true;
        console.log(this.registrationForm.value)
        if (this.loginForm.invalid) {
            return;
        }
    }

}
