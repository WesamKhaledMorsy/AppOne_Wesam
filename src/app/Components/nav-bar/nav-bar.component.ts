import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 200){
      this.navbarfixed =true;
      // console.log(window.scrollY);
    }else{
      this.navbarfixed=false
    }
  }
  navbarfixed : boolean = false;
  //window.onscroll = function() {scrollFunction()};
  ngOnInit(): void {
    this.scrollFunction()
  }

   scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.querySelector(".navbar")
      console.log('====================================');
      console.log(document.body.scrollTop);
      console.log('====================================');
      // document.querySelector(".navbar").style.padding = "30px 10px";
      // document.querySelector(".navbar-brand").style.fontSize = "25px";
    } else {
      // document.getElementById("navbar").style.padding = "80px 10px";
      // document.getElementById("logo").style.fontSize = "35px";
    }
  }
}
