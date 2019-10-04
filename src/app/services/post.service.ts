import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private httpClient: HttpClient) {

  }

  async addPost(post) {
    const res: any = await this.httpClient.post('http://localhost:3208/add', post).toPromise();
  }


  async deletePost(id) {
    let idobj = { "id": id };
    const res: any = await this.httpClient.post('http://localhost:3208/delete', idobj).toPromise();
  }

}

