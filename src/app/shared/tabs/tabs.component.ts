import { Component, OnInit, OnChanges } from '@angular/core';
import { TabsDataService } from '../../service/tabs-data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnChanges , OnInit{

  constructor(private _tabsdata: TabsDataService) { }

  cases: string;
  death: string;
  recovery: string;
  ngOnInit(): void {
  	this._tabsdata.tabsCoronaData().subscribe(
      coronaData => {
        this.cases = coronaData.Global.TotalConfirmed
        this.death = coronaData.Global.TotalDeaths
        this.recovery = coronaData.Global.TotalRecovered
      }
    )
  }

  ngOnChanges(): void {
        this._tabsdata.tabsCoronaData().subscribe(
      coronaData => {
        this.cases = coronaData.Global.TotalConfirmed
        this.death = coronaData.Global.TotalDeaths
        this.recovery = coronaData.Global.TotalRecovered
      }
    )
  }



}
