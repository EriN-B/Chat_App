import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  showSpinnerIcon = false;
  text: string;
  date: any;
  username:any;
  message: string = '';
  messages: any[];


  constructor(public db: AngularFireDatabase,private storage: Storage) {
    this.getMessages();
    this.SetUsername();
  }
  logScrollEnd(event) {
    console.log("logScrollEnd : When Scroll Ends", event);
  }
  SetUsername(){
    this.storage.get('username').then((val) => {
      console.log('Your username is', val);
      this.username=val;
    });
  }
  sendMessage(){
    
    this.SetUsername();
    this.showSpinnerIcon = true;
    this.db.list('chat/').push({
      username: this.username,
      text: this.message,
      date : '26.06.2020'
    }).then( () => {
      this.showSpinnerIcon = false;
    }).catch( () => {

    });
  }
  getMessages() {
    this.db.list('chat/', ref => ref.orderByChild('date')).snapshotChanges(['child_added'])
    .subscribe(actions => {
      this.messages = [];
      actions.forEach(action => {
        this.messages.push({
          username: action.payload.exportVal().username,
          text: action.payload.exportVal().text,
          date: action.payload.exportVal().date
        });
      });
    });
  }
}
