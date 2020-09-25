import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotfoundComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  click(){
    this.router.navigateByUrl('/home');
  }
}
