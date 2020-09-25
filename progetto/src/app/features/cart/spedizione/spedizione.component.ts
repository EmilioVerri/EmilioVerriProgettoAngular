import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spedizione',
  templateUrl: './spedizione.component.html',
  styleUrls: ['./spedizione.component.scss']
})
export class SpedizioneComponent implements OnInit {

  constructor(private router: Router) { 

    
  }
  ngOnInit(): void {
  }


  click(){
    this.router.navigateByUrl("/home");
  }
  
    
  


  
}
