import { Component } from '@angular/core';
import { SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { element } from 'protractor';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lenamarina';

  public workSlides = [
    {
      year: 'Jan 2019 - heute',
      title: 'BMW AG Landshut über Hays',
      img: `<img src="../assets/images/bmw-group.png"/> <img src="../assets/images/hays.png"/>`,
      text: [
        'Rolle Softwareentwicklerin Frontend Verantwortlich für Konzeption, Implementierung und Qualitätssicherung von Applikationen im Produktionsumfeld Verwendung von TypeScript, Nodejs/npm, Karma,  Jasmin, Git, Postman, OpenShift, Continuous Delivery'
      ]
    },
    {
      year: 'März 2018 - Dez 2018',
      title: 'BMW AG Landshut über toptecs',
      img: `<img src="../assets/images/bmw-group.png"/> <img src="../assets/images/toptecs.gif"/>`,
      text: [
        'Rolle Softwareentwicklerin Frontend Verantwortlich für Konzeption, Implementierung, Qualitätssicherung der Applikationen „Anlagenhistorie“ Verwendung von TypeScript, Nodejs/npm, Karma,  Jasmin, Git, Postman, OpenShift, Continuous Delivery',
        'Rolle IT-Architektin Smart Maintenance - Subprodukt „METIS“ Zuständig für Konzeption, Abstimmung mit dem Fachbereich, Steuerung des Dienstleisters sowie Präsentation auf der BMW IT-Messe',
        'Rolle Softwarentwicklerin Backend Implementierung und Qualitätssicherung der Applikation „Code Admin Tool - Backend“ Verwendung von Gatling, Scala, Postman, Docker, OpenShift, Eclipse, VirtualBox, Java Maven, Git, OpenShift, Continuous Delivery'
      ]
    },
    {
      year: 'Dez 2014 - Feb 2015',
      title: 'BMW AG Dingolfing',
      img: `<img src="../assets/images/bmw-group.png"/>`,
      text: [
        'Praktikum in der Abteilung Qualitätsmanagement der Montage Eigenverantwortliche Umsetzung des „Q-Info Portals“ zur Darstellung der Qualitätskennzahlen, Abstimmung und Erstellung der Qualitätswochenberichte inklusive Verteilung an BMW Qualitätsverantwortliche, Konsolidierung der Qualitätssicherung-Informationen für den LeiterkreisVerwendung von HTML5, CSS3, ECMAScript'
      ]
    },
    {
      year: 'Sommer 2012 - 2016',
      title: 'MANN + HUMMEL GmbH Marklkofen',
      img: `<img src="../assets/images/mh.jpg"/>`,
      text: [
        'Begleitende Tätigkeit während des Studiums Verantwortlich für Wareneingang und Verbuchung der Produktionsgüter, zuständig für die Entnahme der Qualitätsstichproben, Koordination des Einlagerungsprozesses'
      ]
    },
    {
      year: '2012 - 2016 ',
      title: 'ALS Planungsbüro',
      img: `<img src="../assets/images/ALS-SW.JPG"/>`,
      text: [
        'Begleitende Tätigkeit während des Studiums Selbstständiger Aufbau elektrischer Schaltschränke zur Steuerung verschiedener Anlagenteile bzw. Roboter, Programmierung der Steuerungstechnik'
      ]
    }
  ];

  public studySlides = [
    {
      year: 'März 2016 – Dez 2017',
      title: 'Master Informatik',
      img: `<img src="../assets/images/HS_LA.jpg"/>`,
      text: [
        'Schwerpunkt: angewandte Informatik, mit den Wahlfächern Robotik, Mensch-Computer-Interaktionen, Bildverstehen, Systems Engineering und den Seminararbeiten: „Design Patterns for Cloud Computing“ und „Faktorisierungsalgorithmus zur Affinen Rekonstruktion von Kameras und 3D-Punkten“ Master of Science (1,5)',
        'Masterarbeit      „Semantische 3D Umfeld-Repräsentation aus Kamerabildern mit Hilfe neuronaler Netze“'
      ]
    },
    {
      year: 'Okt 2016 – Feb 2017',
      title: 'Tutorin für Mathematik an der Hochschule für angewandte Wissenschaften Landshut',
      img: `<img src="../assets/images/HS_LA.jpg"/>`,
      text: ['']
    },
    {
      year: 'Dez 2012 – März 2016',
      title: 'Bachelor Wirtschaftsinformatik',
      img: `<img src="../assets/images/HS_LA.jpg"/>`,
      text: [
        'Schwerpunkt: Informatik, mit den Wahlfächern Netzwerkoptimierung und Medieninformatik Bachelor of Science (1,9)',
        'Bachelorarbeit „Konzept für die Optimierung des Berichtswesens der Qualität in der Physischen Logistik“',
        'Seminararbeiten Entwicklung einer Bus-Anbindung für eine speicherprogrammierbaren Steuerung mittels maschinennaher Programmierung                Konzeption, Entwicklung, Qualitätssicherung und Rollout einer mobilen Anwendung in Android in Verbindung mit Android Wareable'
      ]
    }
  ];

  public schoolSlides: Array<any> = [
    {
      year: 'Sep 2009 – Mai 2011',
      title: 'Gymnasium Landau an der Isar',
      text: ['Leistungskurse: Mathe, Kunst Allgemeine Hochschulreife                      (Note 2,5)']
    },
    {
      year: 'Sep 2002 – Sep 2009',
      title: 'Gymnasium Dingolfing',
      text: ['Mathematischer Zweig']
    }
  ];

  public skillSlides = [
    {
      year: 'Frontend',
      title: 'Tools',
      img: `<img src="../assets/images/angular_whiteTransparent.png"/> <img src="../assets/images/html.png"/> <img src="../assets/images/css.png"/><img src="../assets/images/nodejs-new-white.png"/>`,
      text: ['']
    },
    {
      year: 'Backend',
      title: 'Tools',
      img: `<img src="../assets/images/openshift-logo-black-and-white.png"/><img src="../assets/images/openstack.png"/><img src="../assets/images/docker-logo-black-and-white.png"/>`,
      text: ['']
    },
    {
      year: 'Testing',
      title: 'Tools',
      img: `<img src="../assets/images/Logo_jasmine.svg"/><img src="../assets/images/karma.svg"/><img src="../assets/images/gatling-logo.png"/><img src="../assets/images/pm-logo-horiz.png"/>`,
      text: ['']
    },
    {
      year: 'Project',
      title: 'Tools',
      img: `<img src="../assets/images/jira-logo-white.png"/><img src="../assets/images/bitbucket-logo_318-53867.jpg"/><img src="../assets/images/git.png"/><img src="../assets/images/confluence-logo.png"/><img src="../assets/images/scrum.png"/><img src="../assets/images/jenkins-icon-8.png"/>`,
      text: ['']
    },
    {
      year: 'Softwareengineering',
      title: 'Programmiersprachen',
      img: `<img src="../assets/images/java.png"/><img src="../assets/images/python-xxl.png"/><img src="../assets/images/scala-logo-white@2x.png"/><img src="../assets/images/tensorflow.png"/>`,
      text: ['']
    }
  ];

  public configWork: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    speed: 100,
    navigation: { nextEl: '.swiper-button-next1', prevEl: '.swiper-button-prev1' },
    pagination: false /* {
      el: '.swiper-pagination1',
      bulletActiveClass: '.swiper-pagination-bullet1-active',
      bulletClass: 'swiper-pagination-bullet1',
      renderBullet(index, className) {
        return '<span class="' + className + '">' + index + '</span>';
      }
    } */,
    breakpoints: {
      768: {
        direction: 'horizontal'
      }
    }
  };

  public configStudy: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    speed: 100,
    navigation: { nextEl: '.swiper-button-next1', prevEl: '.swiper-button-prev1' },
    pagination: false,
    breakpoints: {
      768: {
        direction: 'horizontal'
      }
    }
  };

  public schoolConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    speed: 100,
    navigation: { nextEl: '.swiper-button-next1', prevEl: '.swiper-button-prev1' },
    pagination: false,
    breakpoints: {
      768: {
        direction: 'vertical'
      }
    }
  };

  public skillConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    navigation: { nextEl: '.swiper-button-next1', prevEl: '.swiper-button-prev1' },
    pagination: false,
    breakpoints: {
      768: {
        direction: 'vertical'
      }
    }
  };

  /* horizontalConfig: SwiperOptions = {
    direction: "horizontal",
    loop: false,
  speed: 3000,
  initialSlide: 1,
  pagination: ".swiper-pagination",
  paginationBulletRender: function(swiper, index, className) {
    var year = document
      .querySelector(".swiper-slide")
      [index].getAttribute("data-year");
    return '<span class="' + className + '">' + year + "</span>";
  },
  paginationType: 'bullets',
  paginationClickable: true,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
  breakpoints: {
    768: {
      direction: "vertical"
    }
  }
  }; */
}
