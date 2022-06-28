import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConciertoService } from 'src/app/services/concierto/concierto.service'; 
@Component({
  selector: 'app-concierto-detail',
  templateUrl: './concierto-detail.page.html',
  styleUrls: ['./concierto-detail.page.scss'],
})
export class ConciertoDetailPage implements OnInit {
  public currentConcierto: any=[];
  public guestName='';
  constructor(public es:ConciertoService, public ar:ActivatedRoute ) { }

  ngOnInit() {
    const eventId: string = this.ar.snapshot.paramMap.get('id');
    this.es.getConciertoDetail(eventId).then(observableDoc => {
      observableDoc.subscribe( evento => {
        this.currentConcierto = evento;
      } )

      });
  }
  createAsistente(asistenteName:string, asistenteApellido:string, asistenteId:string, conciertoId:string):void{
    conciertoId=this.currentConcierto.ip;
     if (asistenteName==undefined || 
         asistenteApellido==undefined)
     
     {
       return;
     }
     this.es.createAsistente(asistenteName, asistenteApellido, asistenteId, conciertoId);
 }
}
