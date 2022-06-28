import { Component, OnInit } from '@angular/core';
import { ConciertoService } from 'src/app/services/concierto/concierto.service';
@Component({
  selector: 'app-concierto-list',
  templateUrl: './concierto-list.page.html',
  styleUrls: ['./concierto-list.page.scss'],
})
export class ConciertoListPage implements OnInit {
  conciertoList: any =[];
  constructor(public es:ConciertoService) { }

  ngOnInit() { 
    this.es.getConciertoList().then(observableCollection => {
      const subscription = observableCollection
      .subscribe(collection => {
        console.log(collection);
        this.conciertoList = collection;
      },
      (error)=> {
        console.log(error);
      });
    });
  }



}
