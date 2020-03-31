import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  phone:any;
  email:any;
  facebook:any;
  instagram:any;

  constructor() { }

  ngOnInit() {
    this.phone="https://api.whatsapp.com/send?phone=+918861040646";
    this.email="mailto:faz2658@gmail.com?Subject=From%20Blog";
    this.facebook="https://www.facebook.com/fazeel.ahmed.773";
    this.instagram="https://www.instagram.com/enstafaz/";
  }

}
