import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-config',
  templateUrl: './post-config.component.html',
  styleUrls: ['./post-config.component.css']
})
export class PostConfigComponent implements OnInit {
  form = {appropriate_pic_size: '18*13', album_page_type: 1, two_side_tape: false, album_page_tape_num: 0, album_page_num: 1}

  constructor() { }

  ngOnInit() {
  }

}
