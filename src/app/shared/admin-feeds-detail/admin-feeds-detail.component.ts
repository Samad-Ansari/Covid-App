import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feed } from '../../shared/feed';
import { FeedsService } from '../../service/feeds.service';

@Component({
  selector: 'app-admin-feeds-detail',
  templateUrl: './admin-feeds-detail.component.html',
  styleUrls: ['./admin-feeds-detail.component.css']
})
export class AdminFeedsDetailComponent implements OnInit {

  feeds: Feed[]
  constructor(private _feedService: FeedsService, private router: Router) { }

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

  doUpdate(feed) {
  	this._feedService.setter(feed);
  	this.router.navigate(['/admin-dashboard/admin-feeds']);

  }

  doDelete(feed) {
  	this._feedService.deleteFeed(feed._id).subscribe(
  		data=> {
  			this.feeds.splice(this.feeds.indexOf(feed), 1);
  		},
  		error => {
  			console.log(error);
  		}
  	)
  }


}
