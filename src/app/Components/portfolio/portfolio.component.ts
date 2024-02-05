import { Component } from '@angular/core';
import { Images } from 'src/app/Models/images';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images :Images []=[
    {
      Id:1,
      src:'assets/images/poert1.png'
    },
    {
      Id:2,
      src:'assets/images/port2.png'
    },
    {
      Id:3,
      src:'assets/images/port3.png'
    },
    {
      Id:4,
      src:'assets/images/poert1.png'
    },
    {
      Id:5,
      src:'assets/images/port2.png'
    },
    {
      Id:6,
      src:'assets/images/port3.png'
    },
  ]
}
