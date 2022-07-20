import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

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

  sliderTotalItems: any = 0;
  currentSlider: number = 1;

  constructor(private router: Router) { }

  widthChild: any;
  sliderWidthList: any

  ngOnInit(): void {
    gsap.to('.btn-scroll-hidden', {
      opacity: 0,
      duration: 1,
      scrollTrigger: '.square'
    })

    gsap.from('.rk-portfolio-item-thumb', {
      x: 400,
      duration: 2,
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
    var sliderItem = document.querySelectorAll('.rk-slider-item');

    this.sliderTotalItems = sliderItem.length

    // CAPTURANDO LARGURA INDIVIDUAIS
    var containerWidth = sliderContainer?.parentElement?.offsetWidth

    //PASSANDO AS LARGURAS DINAMICAS PARA O TEMPLATE
    this.widthChild = containerWidth
    this.sliderWidthList = this.widthChild * sliderItem.length
    console.log('largura', this.sliderWidthList)

    // VARIVEIS CAPTURADAS DO CLICK
    var prevItem = document.querySelector('.rk-item-prev');
    var nextItem = document.querySelector('.rk-item-next');

    // VARIAVEIS DE CONTROLE DA ROLAGEM HORIZONTAL UM A UM
    let width: any = containerWidth;
    let lastItem = this.sliderWidthList - width
    let slidePos = 0;

    // HANDLERS
    nextItem?.addEventListener('click', function () {
      nextSlideAnim();
    })

    prevItem?.addEventListener('click', function () {
      prevSlideAnim();
    })

    var nextSlideAnim = function () {
      console.log('somaTotal', slidePos, 'lastItem', lastItem);
      if ((-1 * (slidePos)) == lastItem) {
        console.log('ultimo slider', lastItem)
        return;
      }
      gsap.to('.rk-slider-list', {
        rotation: 0,
        x: slidePos = slidePos - width,
        duration: 1.5,
        ease: "expo.inOut"
      });
      gsap.to(".rk-item-active", {
        width: '55px'
      });
    }

    var prevSlideAnim = function () {
      if (slidePos == 0) {
        console.log('FIRST')
        return;
      }
      gsap.to('.rk-slider-list', {
        rotation: 0,
        x: slidePos = slidePos + width,
        duration: 1.5,
        ease: "expo.inOut"
      });
      gsap.to(".rk-item-active", {
        width: '55px'
      });
    }

  }

  ngAfterViewInit() {
    gsap.to('.rk-item-active', {
      width: '55px'
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


  nextCounter() {
    if (this.currentSlider >= this.sliderTotalItems) {
      return;
    } else {
      this.currentSlider = this.currentSlider + 1;
    }
  }

  prevCounter() {
    if (this.currentSlider <= 1) {
      return;
    } else {
      this.currentSlider = this.currentSlider - 1;
    }
  }

} 
