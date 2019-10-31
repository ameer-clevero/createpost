import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {

  }

  addPost(post) {
    return this.httpClient.post('http://localhost:3208/add', post).toPromise();
  }


  deletePost(id) {
    return this.httpClient.delete('http://localhost:3208/' + id).toPromise();
  }

  getData() {
    return this.httpClient.get('http://localhost:3208').toPromise();
  }



  editPost(post) {
    return this.httpClient.put('http://localhost:3208/edit', post).toPromise();
  }
}

