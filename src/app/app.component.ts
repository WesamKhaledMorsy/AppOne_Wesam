import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAssignment';
 
  ngOnInit(): void {

  }

  // scrollFunction() {
  //   let postion = document.body.scrollHeight;
  //   // .scroll({
  //   //   top: 10,
  //   //   behavior: "auto",
  //   // });

  //   console.log(postion);
  // }
}
