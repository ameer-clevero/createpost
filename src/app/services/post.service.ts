import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts = [];
  dataURL = '../../assets/posts.json';
  constructor(private httpClient: HttpClient) {

  }

  async addPost(post) {
    const res: any = await this.httpClient.post('http://localhost:3208/add', post).toPromise();
  }

  async getPost() {
    if (this.posts && this.posts.length === 0) {
      const res: any = await this.httpClient.get(this.dataURL).toPromise();
      this.posts = res.posts;
    }
    return this.posts;
  }

  async deletePost(id) {
    let idobj = { "id": id };
    const res: any = await this.httpClient.post('http://localhost:3208/delete', idobj).toPromise();
  }

}

