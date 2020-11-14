import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Swiper} from "swiper";
import * as $ from 'jquery';

@Component({
  selector: 'app-post-images',
  templateUrl: './post-images.component.html',
  styleUrls: ['./post-images.component.css']
})
export class PostImagesComponent implements OnInit, AfterViewInit {
  @Input() post_images = [];
  _swiper: Swiper;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const self = this;
    $(document).ready(function () {
      self._swiper = new Swiper('.swiper-container', {
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        pagination: {
          el: '.swiper-pagination',
        },
      });
    });
  }

}
