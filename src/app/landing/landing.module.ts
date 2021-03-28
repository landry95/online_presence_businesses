import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
    {
      path: '', component: LandingComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {path: 'home', component: HomeComponent},
        { path: 'login', component: LoginComponent },
        { path: 'contact-us', component: ContactComponent },
        { path: 'read-more-about-us', component: AboutComponent },
        { path: 'about-us', component: AboutComponent },
        { path: 'gallery', component: GalleryComponent },
        { path: 'pricings', component: PricingComponent },
        // { path: 'reset-your-password', component: ResetPasswordComponent },
      ]
    }
  ]

@NgModule({
    declarations: [
      LandingComponent, 
      LoginComponent,
      HomeComponent,
      AboutComponent, 
      ContactComponent, 
      GalleryComponent, 
      PricingComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
    
    exports: [RouterModule]
})
export class LandingModule { }
