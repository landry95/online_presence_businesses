import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access/access.component';
import { ModuleComponent } from './module/module.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { CancelAppointmentComponent } from './cancel-appointment/cancel-appointment.component';

const routes: Routes = [
    {
      path: '', component: AccessComponent,
      children: [
        { path: '', redirectTo: 'access', pathMatch: 'full' },
        // {path: 'access', component: AppointmentComponent},
        { path: 'make-appointment', component: AppointmentComponent },
        { path: 'cancel-appointment', component: CancelAppointmentComponent },
      ]
    }
]

@NgModule({
    declarations: [
        AccessComponent, 
        ModuleComponent, 
        AppointmentComponent, CancelAppointmentComponent
    ],

    imports: [
        CommonModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        ComponentsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        HttpClientModule
        // BrowserAnimationsModule
    ]
})
export class AccessModule { }
