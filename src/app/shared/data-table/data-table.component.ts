import { Component, OnInit } from '@angular/core';
import { CoronaDataService } from '../../service/corona-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {


  coronadata = [{}];
  constructor(private _coronadate : CoronaDataService) {
   }
  

  ngOnInit(): void {
  	this._coronadate.datatable().subscribe(
  		coronadata => {
         this.coronadata = coronadata
      }
  	)
  }

}
