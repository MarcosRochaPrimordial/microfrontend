import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mlo-home',
  template: '<button (click)="goTolibTwo()">go to lib two</button>',
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goTolibTwo() {
    this.router.navigate(['two']);
  }

}
