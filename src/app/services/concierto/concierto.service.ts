import { Injectable } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import {AngularFirestore,AngularFirestoreDocument,DocumentReference, AngularFirestoreCollection, CollectionReference } from "@angular/fire/compat/firestore";
import * as firebase from 'firebase/compat';
//import  * as firebase from "@angular/fire/app";

@Injectable({
  providedIn: 'root'
})
export class ConciertoService {
  public listaRefConcierto: any;
  constructor( public concierto_list_ref:AngularFirestore, public as:AuthService) { 
   
  }

  async createConcierto(conciertoName: string, conciertoDate:string, conciertoPrice:number, conciertoCost:number):Promise<DocumentReference>{
     const user: any = await this.as.getUser();
     const id = this.concierto_list_ref.createId()
     this.listaRefConcierto= this.concierto_list_ref.collection(`perfilUsuario/${user.uid}/listaConcierto`)
     .doc(`${id}`);
     return  this.listaRefConcierto.set({
      id,
      name: conciertoName, 
      date: conciertoDate,
      price: conciertoPrice * 1,
      cost: conciertoCost * 1,
      revenue: conciertoCost * -1,
    });    
   }

   async getConciertoList()
    //:Promise<firebase.firestore.QuerySnapshot>
   {
    const user: any= await this.as.getUser();
    this.listaRefConcierto= this.concierto_list_ref.collection(`perfilUsuario/${user.uid}/listaConcierto`);
    return this.listaRefConcierto.valueChanges();
    }
 
    async getConciertoDetail(conciertoId: string)
    //:Promise<firebase.firestore.DocumentSnapshot>
    {
      const user: any = await this.as.getUser();
      this.listaRefConcierto=  this.concierto_list_ref.collection(`perfilUsuario/${user.uid}/listaConcierto`);
      return this.listaRefConcierto.doc(conciertoId).valueChanges();
     }

     async createAsistente(asistenteId: string, asistenteName:string, asistenteApellido:string, conciertoId:string):Promise<DocumentReference>{
      const user: any = await this.as.getUser();
      asistenteId = this.concierto_list_ref.createId();
      this.listaRefConcierto= this.concierto_list_ref.collection(`perfilUsuario/${user.uid}/listaConcierto/${conciertoId}/asistentes`);
      return  this.listaRefConcierto.set({
       id :asistenteId,
       name: asistenteName, 
       apellido: asistenteApellido,
       
     });    
    }
}
