import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConciertoService } from 'src/app/services/concierto/concierto.service'; 

@Component({
  selector: 'app-concierto-create',
  templateUrl: './concierto-create.page.html',
  styleUrls: ['./concierto-create.page.scss'],
})
export class ConciertoCreatePage implements OnInit {
  conciertoName:string; conciertoDate:string; conciertoPrice:number; conciertoCost:number;
  constructor(public router:Router,public es:ConciertoService) { }

  ngOnInit() { }

  createConcierto(conciertoName:string, conciertoDate:string, conciertoPrice:number, conciertoCost:number):void{
    if (conciertoName==undefined || 
        conciertoDate==undefined || 
        conciertoPrice==undefined || 
        conciertoCost==undefined) 
    {
      return;
    }
    this.es.createConcierto(conciertoName, conciertoDate, conciertoPrice, conciertoCost).then(()=> {
      this.router.navigateByUrl('concierto-home');  
    });
}

}
