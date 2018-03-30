import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {
  private api_key: string = '8520646-2a2c76639f65b240b800b0d01';
  private url :string = 'https://pixabay.com/api/?key='+ this.api_key  +'&q=';

  // https://pixabay.com/api/?key=8520646-2a2c76639f65b240b800b0d01&q=yellow+flowers&image_type=photo

  constructor(private http: HttpClient) { }

  getImage(query: string) {
  	return this.http.get(this.url + query);
  }

}
