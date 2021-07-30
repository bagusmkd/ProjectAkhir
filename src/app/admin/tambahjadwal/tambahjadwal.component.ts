import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tambahjadwal',
  templateUrl: './tambahjadwal.component.html',
  styleUrls: ['./tambahjadwal.component.scss']
})
export class TambahjadwalComponent implements OnInit {

  userdata:any={};
  constructor(
    public dialogRef:MatDialogRef<TambahjadwalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public db:AngularFirestore,
    public auth:AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe(res=>{
      this.userdata=res;
    })
  }
  loading:boolean | undefined;
  saveData()
  {
    this.loading=true;
    if(this.data.id==undefined)
    {
     let doc = new Date().getTime().toString();
     this.data.uid = this.userdata.uid;
     this.db.collection('jadwal').doc(doc).set(this.data).then(res=>{
       this.dialogRef.close(this.data);
     }).catch(er=>{
       console.log(er);
       this.loading=false;
       alert('TIDAK DAPAT MENYIMPAN DATA!!!');
     })
    }else{
      this.db.collection('jadwal').doc(this.data.id).update(this.data).then(res=>{
        this.dialogRef.close(this.data);
      }).catch(er=>{
        console.log(er);
        this.loading=false;
        alert('TIDAK DAPAT MENYIMPAN DATA!!!');
      })
    }
  }

}
