import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedsService } from '../../service/feeds.service';
import { Feed } from '../feed';


@Component({
  selector: 'app-admin-feeds',
  templateUrl: './admin-feeds.component.html',
  styleUrls: ['./admin-feeds.component.css']
})
export class AdminFeedsComponent implements OnInit {

  constructor(private _feedsService: FeedsService, private router: Router) { }

  feed = new Feed;
  ngOnInit(): void {
  	this.feed = this._feedsService.getter();
    console.log(this.feed);
  }

   createOrUpdate() {
     console.log(this.feed)
   	if(this.feed._id == '') {
   		this._feedsService.createFeed(this.feed).subscribe(
   			data => {
   				this.router.navigate(['/admin-dashboard/admin-feeds-details'])
   			},
   			error => {
   				console.log(error)
   			}
   		)
   	}
   	else {
   		this._feedsService.updateFeed(this.feed).subscribe(
   			data => {
   				this.router.navigate(['/admin-dashboard/admin-feeds-details'])
   			},
   			error => {
   				console.log(error)
   			}
   		)
   	}

   }

}
