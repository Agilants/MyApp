import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  modal = false;
  modalImage = '';
  selectedTab = '1';
  list = true;
  gridimage = '';
  gimage = '';
  alert = false;
  constructor() {

  }

  viewImage(image) {
    this.modalImage = image;
    this.modal = true;
  }
  viewgrid(image) {
    this.list = false;
    this.gridimage = image;
  }
  close() {
    this.modal = false;
  }

  switchTab(tab) {
    this.list = true;
    this.selectedTab = tab;
  }
  changeImage(image) {
    this.gridimage = image;
  }

  showAlert() {
    this.alert = true;
    setTimeout(() => { this.alert = false; }, 3000)
  }
}
