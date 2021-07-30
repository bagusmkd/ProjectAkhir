import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user:any={};
  hide:boolean=true;


  constructor(
    public router:Router,
    public auth:AngularFireAuth
  ) { }

  loading:boolean | undefined;
  ngOnInit(): void {
  }
 
  register(user:any)
  {
    this.loading=true;
    this.auth.createUserWithEmailAndPassword(user.email,user.password).then(res=>{
      this.loading=false;
      alert('Register Berhasil!!');
      this.router.navigate(['auth/login']);
    }).catch(err=>{
      this.loading=false;
      alert('ADA MASALAH!!!!!')
    })
  }
}
