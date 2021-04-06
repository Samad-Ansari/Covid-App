import { Output, Component, OnInit, EventEmitter } from '@angular/core';
import { Feed } from '../feed';
import { FeedsService } from '../../service/feeds.service';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.css']
})
export class FeedsListComponent implements OnInit {

  feeds: Feed[];
  constructor(private _feedService: FeedsService) { }

  
  @Output() addedFeed: any = new EventEmitter<any>();
  
  activeFeed(feed) {
    console.log(feed);
    this.addedFeed.emit(feed);
  } 

  ngOnInit(): void {
  	this.readFeeds();
  }


  readFeeds() {
  	return this._feedService.readFeeds().subscribe(
  		data => {
  			this.feeds = data['msg'];
  		},
  		error => {
  			console.log(error)
  		}
  	)
  }

 
}
