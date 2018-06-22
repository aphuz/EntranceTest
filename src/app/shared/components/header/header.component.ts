import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../../../token.storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private token: TokenStorage) { }

  ngOnInit() {
  }

  logout(){
    this.token.signOut();
    this.router.navigate(['login']);
  }
}
