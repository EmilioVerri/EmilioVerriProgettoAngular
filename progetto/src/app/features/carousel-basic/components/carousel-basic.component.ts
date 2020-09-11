import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.scss']
})
export class NgbdCarouselBasic {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}

  
