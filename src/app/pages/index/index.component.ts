import { Component, HostListener, OnInit } from '@angular/core';

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  fadePreLoad = {};

  @HostListener('window:load', ['$event'])
  onLoad(event: Event) {
    this.fadePreLoad = {
      'rk-fade-out': true
    }
  }

  openBoxContact = {};
  changeIconContact = {};
  controlHiddenContact: number = 0

  constructor() {
    this.openBoxContact = {
      'rk-is-open': false
    };
    this.changeIconContact = {
      'rk-change-icon': false
    }
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.btn-scroll-hidden', {
      opacity: 0,
      duration: 1,
      scrollTrigger: '.square'
    })
    //   const btnContact: any = document.querySelector('.rk-btn-contact');

    //   btnContact.addEventListener('click', () => {
    //     var boxContact = document.querySelector('.rk-contact-info');
    //     boxContact?.classList.toggle('rk-is-open');
    //     btnContact.classList.toggle('rk-change-icon');
    //   }) 

    // window.addEventListener('load', function () {
    //   var pagePreloader = document.querySelector('.rk-preloader');
    //   pagePreloader?.classList.add('rk-fade-out');
    // })
  }

  contactInfo() {
    if (this.controlHiddenContact % 2 == 0) {
      this.openBoxContact = {
        'rk-is-open': true
      };
      this.changeIconContact = {
        'rk-change-icon': true
      }
    } else {
      this.openBoxContact = {
        'rk-is-open': false
      };
      this.changeIconContact = {
        'rk-change-icon': false
      }
    }
    this.controlHiddenContact = this.controlHiddenContact + 1;
  }

} 
