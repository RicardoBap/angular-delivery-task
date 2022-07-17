import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Tween } from 'jquery';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  contact: boolean = false;
  fadePreLoad = {};

  @HostListener('window:load', ['$event'])
  onLoad(event: Event) {
    this.fadePreLoad = {
      'rk-fade-out': true
    }
  }

  openBoxContact = {};
  controlHiddenContact: number = 0

  constructor(private element: ElementRef) { }

  widthChild: any;
  sliderWidthList: any

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.btn-scroll-hidden', {
      opacity: 0,
      duration: 1,
      scrollTrigger: '.square'
    })

    // window.addEventListener('load', function () {
    //   var pagePreloader = document.querySelector('.rk-preloader');
    //   pagePreloader?.classList.add('rk-fade-out');
    // })

    var toggleModal = document.querySelectorAll('.rk-toggle-modal');
    for (var i = 0; i < toggleModal.length; i++) {
      toggleModal[i].addEventListener('click', function () {
        var overlay = document.querySelector('.rk-overlay');
        var modalMensagem = document.querySelector('#rk-modal-mensagem');
        overlay?.classList.toggle('rk-is-open');
        modalMensagem?.classList.toggle('rk-is-open');
        modalMensagem?.classList.toggle('rk-slide-top-in');
      })
    }

    // SLIDER
    // declarando variaveis
    var sliderContainer = document.querySelector('.rk-slider-container');
    var sliderList = document.querySelector('.rk-slider-list');
    var sliderItem = document.querySelectorAll('.rk-slider-item');

    // CAPTURANDO LARGURA INDIVIDUAIS
    var containerWidth = sliderContainer?.parentElement?.offsetWidth

    //PASSANDO AS LARGURAS DINAMICAS
    this.widthChild = containerWidth

    // console.log('width', containerWidth)
    // for (var p = 0; p < sliderItem.length; p++) {
    //   // sliderItem[p].style.width = containerWidth + 'px';
    //   // console.log('teste', sliderItem[p])
    // }
    this.sliderWidthList = this.widthChild * sliderItem.length
    console.log('largura', this.sliderWidthList)

    var prevItem = document.querySelector('.rk-item-prev');
    var nextItem = document.querySelector('.rk-item-next');

    nextItem?.addEventListener('click', function () {
      let slidePos = 0;
      let width: any = containerWidth;

      slidePos = slidePos - width;

      // tween.reverse();
      console.log('somaTotal', slidePos)

      // let tween = 
      gsap.to('.rk-slider-list', {
        rotation: 0,
        x: slidePos,
        duration: 1
      });
    })

  }

  contactInfo() {
    if (this.controlHiddenContact % 2 == 0) {
      this.openBoxContact = {
        'rk-is-open': true
      };
    } else {
      this.openBoxContact = {
        'rk-is-open': false
      };
    }
    this.controlHiddenContact = this.controlHiddenContact + 1;
  }

} 
