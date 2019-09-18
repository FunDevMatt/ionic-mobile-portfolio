import { Component, OnInit } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';



@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private sms: SMS) { }


  ngOnInit() {

  }

}
