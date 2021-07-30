import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }
  logout()
  {
    var conf=confirm('ANDA YAKIN INGIN KELUAR??');
    if(conf){
      this.router.navigate(['/login']);
      }
    }
    
  }
