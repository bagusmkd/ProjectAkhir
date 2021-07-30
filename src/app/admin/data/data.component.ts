import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TambahdataComponent } from '../tambahdata/tambahdata.component';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  judul:any;
  mahasiswa:any={};
  mahasiswas:any=[];
  userdata:any={};
 
  constructor(
     public dialog:MatDialog,
     public db:AngularFirestore,
    public auth:AngularFireAuth
  ) {
   

   }

  ngOnInit(): void {
    this.judul='Data Mahasiswa';
    this.auth.user.subscribe(user=>{
      this.userdata=user;
      this.getdata();
    })
    
  }

  loading:boolean | undefined;
  getdata()
  {
    this.loading=true;
    this.db.collection('mahasiswas', ref=>{
      return ref.where('uid','==',this.userdata.uid);
    }).valueChanges({idField:'id'}).subscribe(res=>{
      console.log(res);
      this.mahasiswas=res;
      this.loading=false;
    },err=>{
      this.loading=false;
    })
  }
  TambahData(data: any,idx: number)
  {
    let dialog=this.dialog.open(TambahdataComponent,{
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe((res: any)=>{
      if(res)
      {
        if(idx==-1)this.mahasiswas.push(res);
        else this.mahasiswas[idx]=res;
      }
    })

  }
  loadingdelete:any={};
  hapusdata(id:any,idx: any)
  {
    var conf=confirm('ANDA YAKIN INGIN MENGHAPUS DATA???');
    if(conf){
      this.db.collection('mahasiswas').doc(id).delete().then(res=>{
        this.mahasiswas.splice(idx,1);
        this.loadingdelete[idx]=false;
      }).catch(err=>{
        this.loadingdelete[idx]=false;
        alert('TIDAK DAPAT MENGHAPUS DATA!!!');
      });
    }
    
  }

}
function idx(idx: any, arg1: number) {
  throw new Error('Function not implemented.');
}

