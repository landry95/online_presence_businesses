import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FootComponent } from './foot/foot.component';
import { HeaderoldComponent } from './headerold/headerold.component';



@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        FootComponent,
        HeaderoldComponent
    ],
    
    imports: [
        CommonModule,
        RouterModule,
    ],

    exports: [
        FooterComponent,
        HeaderComponent,
        FootComponent
    ]
})
export class ComponentsModule { }
