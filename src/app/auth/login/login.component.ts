import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:any={};
  hide:boolean=true;

  constructor(
    public router:Router,
    public auth:AngularFireAuth
  ) { }

  ngOnInit(): void {
  }
  loading: boolean | undefined;
  login(user:any)
  {
    this.loading=true;
    this.auth.signInWithEmailAndPassword(user.email, user.password).then(res=>{
      this.loading=false;
      this.router.navigate(['admin/dashboard']);
    }).catch(err=>{
      this.loading=false;
      alert('TIDAK BISA LOGIN')
    })
  }

}
