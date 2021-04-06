import { Component, OnInit } from '@angular/core';
import { Feed } from '../../shared/feed';
import { FeedsService } from '../../service/feeds.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  
  feeds: Feed[]
  constructor(private _feedService: FeedsService) { }

  ngOnInit(): void {
  	this.readFeeds();
  }

  addedFeed: any;
  onAddedFeed(feedData) {
    this.addedFeed = feedData;
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

