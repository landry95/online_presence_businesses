import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    duration = [
        {name: "Manicure", duration: "20m"},
        {name: "French mani", duration: "20m"},
        {name: "Glue Manicure", duration: "30m"},
        {name: "Color Gel regular & french", duration: "30m"},
        {name: "Powder Fill-in", duration: "50m"},
        {name: "LCN Regular Fill-in", duration: "60m"},
        {name: "LCN Regular Fill-in", duration: "75m"},
        {name: "Powder Gel", duration: "45m"},
        {name: "LCN new set", duration: "60m"},
        {name: "LCN new set extension", duration: "60m"},
        {name: "LCN French new set", duration: "75m"},
        {name: "LCN French new set extension", duration: "75m"},
        {name: "Regular Pedicure", duration: "25m"},
        {name: "French Regular Pedi", duration: "25m"},
        {name: "Peppermint Spa", duration: "35m"},
        {name: "Green Tea Spa", duration: "35m"},
        {name: "Silky Milk Spa", duration: "50m"},
        {name: "Purissima Spa", duration: "60m"},
        {name: "Organic Spa", duration: "75m"},
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
