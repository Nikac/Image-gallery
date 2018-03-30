import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit, OnDestroy {
  images: any[] = [];
  loading: boolean = false;
  data: any[];
  subscription;
  loadingResult: boolean = false;

  constructor(private imageService: ImageService) { }

  ngOnInit() {}

  onSerachImage(query: string) {
  	this.loading = true;

  	this.subscription = this.imageService.getImage(query)
  		.subscribe( 
  			(data: any) => {
          console.log(data.hits);
          this.data = data.hits;
          // console.log(this.data);
          if (data) this.images = data.hits;
  				
  			} ,
  			error => console.log(error),
  			() => {
          if (this.images.length >= 1) {
            this.loading = false;
            this.loadingResult = true;
          } else if (this.images.length === 0) {
            this.loading = true;
            this.loadingResult = false;
          }
  			}
  		)
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
