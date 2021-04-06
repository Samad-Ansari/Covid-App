import { Component, OnChanges, Input } from '@angular/core';
import { Feed } from '../feed';
import { FeedsService } from '../../service/feeds.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnChanges {


  feeds = new Feed;
  constructor(private _feedService: FeedsService) { }

  ngOnChanges(): void {
    if(!this.selectedFeed){
      this.selectedFeed = "5f13d071bcc9690af48e5d72";  
    }
    this.readFeeds(this.selectedFeed);
  }

  @Input() selectedFeed: string;

  readFeeds(id : string) {
  	return this._feedService.readFeed(id).subscribe(
  		data => {
  			this.feeds = data;
        console.log('Feed' + this.feeds.title);
  		},
  		error => {
  			console.log(error)
  		}
  	)
  }

}
