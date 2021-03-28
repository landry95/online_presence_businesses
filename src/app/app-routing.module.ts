import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
    { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
    // { path: 'portal', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { 
    
}
