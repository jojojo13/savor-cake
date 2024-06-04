import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToIntro() {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToFooter() {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToCategory() {
    document.getElementById('category')?.scrollIntoView({ behavior: 'smooth' });
  }
}
