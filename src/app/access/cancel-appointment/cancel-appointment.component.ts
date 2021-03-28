import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
    selector: 'app-cancel-appointment',
    templateUrl: './cancel-appointment.component.html',
    styleUrls: ['./cancel-appointment.component.scss']
})
export class CancelAppointmentComponent implements OnInit {

    userForm: FormGroup;
    submitted = false;

    constructor(private appointmentService: AppointmentService) { }

    ngOnInit(): void {
        this.userForm = new FormGroup({
            name: new FormControl(''),
            firstname: new FormControl('', Validators.required),
            lastname: new FormControl(''),
            email: new FormControl('', Validators.required),
            type_of_service: new FormControl('', Validators.required)
        });
    }

    get f() { return this.userForm.controls; }

    onSubmit(){
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        this.appointmentService.cancelAppoint(this.userForm.value)
    }

}
