import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  page_loading = false;
  search_box = false;
  menu_side = false;

  constructor() {
  }

  ngOnInit() {
    this.page_loading = true;
    setTimeout(() => {
      this.page_loading = false;
    }, 1000);
  }

  showSearchBox() {
    this.search_box = !this.search_box
  }

  showSideMenu(state) {
    this.menu_side = state === 'open';
  }
}
