import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  username: string= '';

  constructor(private storage: Storage) {}

  login(){
    console.log()
    if(/^[a-zA-Z0-9]+$/.test(this.username)){
    this.storage.set('username', this.username);

    this.storage.get('username').then((val) => {
    console.log('Your username is', val);
  });
    }else{
     window.alert("Invalid Username");
    }
  }
}
