import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  pageTitle: string = 'Page not found';

  constructor() { }

  ngOnInit(): void {
  }

}
