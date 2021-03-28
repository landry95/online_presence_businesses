import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from 'src/app/services/appointment.service';
// import { AppointmentService } from '../../services/appointment.service';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

    userForm: FormGroup;
    submitted = false;

    constructor(private appointmentService: AppointmentService) { }

    ngOnInit(): void {
        this.userForm = new FormGroup({
            name: new FormControl(''),
            firstname: new FormControl('', Validators.required),
            lastname: new FormControl(''),
            phone: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            type_of_service: new FormControl('', Validators.required),
            time_of_service: new FormControl('', Validators.required),
        });
    }

    get f() { return this.userForm.controls; }

    onSubmit(){
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.appointmentService.bookAppoint(this.userForm.value)
    }

}
