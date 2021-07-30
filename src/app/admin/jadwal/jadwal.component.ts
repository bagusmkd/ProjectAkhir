import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { TambahjadwalComponent } from '../tambahjadwal/tambahjadwal.component';

@Component({
  selector: 'app-jadwal',
  templateUrl: './jadwal.component.html',
  styleUrls: ['./jadwal.component.scss']
})
export class JadwalComponent implements OnInit {
  judul:any;
  jadwal:any={};
  jadwals:any=[];
  userdata:any={};

  constructor(
    public dialog:MatDialog,
     public db:AngularFirestore,
    public auth:AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.judul='Jadwal Kuliah Kelas A Sistem Informasi';
    this.auth.user.subscribe(user=>{
      this.userdata=user;
      this.getdata();
    })
  }
  loading:boolean | undefined;
  getdata()
  {
    this.loading=true;
    this.db.collection('jadwal', ref=>{
      return ref.where('uid','==',this.userdata.uid);
    }).valueChanges({idField:'id'}).subscribe(res=>{
      console.log(res);
      this.jadwals=res;
      this.loading=false;
    },err=>{
      this.loading=false;
    })
  }
  TambahJadwal(data: any,idx: number)
  {
    let dialog=this.dialog.open(TambahjadwalComponent,{
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe((res: any)=>{
      if(res)
      {
        if(idx==-1)this.jadwals.push(res);
        else this.jadwals[idx]=res;
      }
    })

  }
  loadingdelete:any={};
  hapusdata(id:any,idx: any)
  {
    var conf=confirm('ANDA YAKIN INGIN MENGHAPUS DATA???');
    if(conf){
      this.db.collection('jadwal').doc(id).delete().then(res=>{
        this.jadwals.splice(idx,1);
        this.loadingdelete[idx]=false;
      }).catch(err=>{
        this.loadingdelete[idx]=false;
        alert('TIDAK DAPAT MENGHAPUS DATA!!!');
      });
    }
    
  }

}
